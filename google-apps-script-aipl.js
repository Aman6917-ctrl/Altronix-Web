// Google Apps Script for AIPL Cricket Registration
// Deployment URL: https://script.google.com/macros/s/AKfycbxnqwML3y7vRjhAMVtKlAq2-liWiTn65ilr-3wPTeqfOqQPT5620nIg7OyZFA9OiXaImQ/exec

function doGet(e) {
  console.log('doGet called with:', e);
  return handleRequest(e);
}

function doPost(e) {
  console.log('doPost called with:', e);
  return handleRequest(e);
}

function doOptions(e) {
  console.log('doOptions called (CORS preflight)');
  return createResponse(true, 'CORS preflight handled');
}

function handleRequest(e) {
  console.log('=== AIPL Registration Handler Started ===');
  console.log('Timestamp:', new Date().toISOString());
  
  try {
    // Access the spreadsheet
    const spreadsheetId = '1Gfpp_FHjxAOneBncNpCyZVg0akkGLE_WuqCcbeo8UOA';
    console.log('Opening spreadsheet with ID:', spreadsheetId);
    
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    console.log('Spreadsheet opened successfully:', spreadsheet.getName());
    
    // Get or create sheet
    let sheet = spreadsheet.getSheetByName('AIPL Registration');
    if (!sheet) {
      console.log('Creating new AIPL Registration sheet...');
      sheet = spreadsheet.insertSheet('AIPL Registration');
      
      // Add headers
      const headers = [
        'Timestamp', 'Name', 'Section', 'Roll No', 'Email', 'Phone Number', 
        'Playing Preference', 'Past Experiences', 'Achievements', 'Photo URL', 'Status'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
      
      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('white');
      
      // Set column widths
      sheet.setColumnWidth(1, 150); // Timestamp
      sheet.setColumnWidth(2, 200); // Name
      sheet.setColumnWidth(3, 80);  // Section
      sheet.setColumnWidth(4, 120); // Roll No
      sheet.setColumnWidth(5, 250); // Email
      sheet.setColumnWidth(6, 130); // Phone
      sheet.setColumnWidth(7, 130); // Playing Preference
      sheet.setColumnWidth(8, 300); // Past Experiences
      sheet.setColumnWidth(9, 300); // Achievements
      sheet.setColumnWidth(10, 300); // Photo URL
      sheet.setColumnWidth(11, 120); // Status
      
      console.log('Sheet created with headers and formatting');
    }
    
    // Parse request data safely
    let formData = {};
    
    if (!e) {
      console.log('Event object is null or undefined');
      return createResponse(false, 'No request data received');
    }
    
    console.log('Event object keys:', Object.keys(e));
    
    // Try different ways to get the data
    if (e.parameter) {
      console.log('Found e.parameter (FormData):', Object.keys(e.parameter));
      formData = e.parameter;
    } else if (e.postData && e.postData.contents) {
      console.log('Found POST data (JSON):', e.postData.contents.substring(0, 100) + '...');
      try {
        formData = JSON.parse(e.postData.contents);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        return createResponse(false, 'Invalid JSON in request');
      }
    } else {
      console.log('No recognizable data format found');
      return createResponse(false, 'No form data found in request');
    }
    
    console.log('Parsed form data:', formData);
    console.log('Form data keys:', Object.keys(formData));
    console.log('Form data values:', Object.values(formData));
    
    // Extract all fields (all mandatory)
    const name = formData.name || '';
    const section = formData.section || '';
    const rollNo = formData.rollNo || '';
    const email = formData.email || '';
    const phoneNumber = formData.phoneNumber || '';
    const playingPreference = formData.playingPreference || '';
    const pastExperiences = formData.pastExperiences || '';
    const achievements = formData.achievements || '';
    const photograph = formData.photograph || '';
    const photographName = formData.photographName || '';
    
    console.log('Extracted data:', { name, section, rollNo, email, phoneNumber, playingPreference });
    console.log('Photo data length:', photograph ? photograph.length : 0);
    console.log('Photo name:', photographName);
    
    // Validate ALL fields as mandatory
    const requiredFields = { 
      name, 
      section, 
      rollNo, 
      email, 
      phoneNumber, 
      playingPreference, 
      pastExperiences: pastExperiences.trim(), 
      achievements: achievements.trim(),
      photograph
    };
    
    const missingFields = Object.entries(requiredFields).filter(([key, value]) => {
      return !value || value.toString().trim() === '';
    }).map(([key]) => key);
    
    if (missingFields.length > 0) {
      console.log('Missing required fields:', missingFields);
      return createResponse(false, 'All fields are mandatory. Missing: ' + missingFields.join(', '));
    }
    
    // Validate email format
    if (!email.endsWith('@rknec.edu')) {
      console.log('Invalid email format:', email);
      return createResponse(false, 'Email must end with @rknec.edu');
    }
    
    // Check for duplicate email registration
    const lastRow = sheet.getLastRow();
    if (lastRow > 1) {
      const emails = sheet.getRange(2, 5, lastRow - 1, 1).getValues().flat();
      const isDuplicate = emails.some(existingEmail => 
        existingEmail.toString().toLowerCase() === email.toLowerCase()
      );
      
      if (isDuplicate) {
        console.log('Duplicate email found:', email);
        return createResponse(false, 'This email address has already been registered for AIPL. Each email can only register once.', true);
      }
    }
    
    // Handle photograph upload to Google Drive
    let photoUrl = 'No photo provided';
    if (photograph && photograph.length > 0) {
      try {
        console.log('Attempting photo upload with data length:', photograph.length);
        console.log('Photo filename:', photographName);
        console.log('Photo data preview:', photograph.substring(0, 50) + '...');
        
        photoUrl = uploadPhotoToDrive(photograph, photographName, name, email);
        console.log('Photo uploaded successfully:', photoUrl);
      } catch (photoError) {
        console.error('Error uploading photo:', photoError);
        photoUrl = 'Photo upload failed - please contact admin';
        // Don't throw error here - continue with registration without photo
        console.log('Continuing registration without photo due to upload error');
      }
    } else {
      console.log('No photograph data provided or empty photograph field');
      console.log('Photograph value:', photograph);
      console.log('Photograph type:', typeof photograph);
      
      // If no photo data but photo was marked as required, this might be a data transmission issue
      if (!photograph) {
        photoUrl = 'Photo data not received - please try uploading again';
      }
    }
    
    // Add data to sheet
    const rowData = [
      new Date(),
      name,
      section,
      rollNo,
      email,
      phoneNumber,
      playingPreference,
      pastExperiences,
      achievements,
      photoUrl,
      'Registered'
    ];
    
    sheet.appendRow(rowData);
    console.log('Data added to sheet successfully');
    
    // Log successful registration
    console.log('AIPL Registration completed:', {
      name: name,
      email: email,
      playingPreference: playingPreference,
      rowNumber: sheet.getLastRow()
    });
    
    return createResponse(true, 'AIPL cricket registration submitted successfully! You will be contacted soon.');
    
  } catch (error) {
    console.error('Error in handleRequest:', error);
    console.error('Error stack:', error.stack);
    return createResponse(false, 'Server error: ' + error.toString());
  }
}

// Function to upload photo to Google Drive
function uploadPhotoToDrive(base64Data, fileName, studentName, email) {
  try {
    console.log('uploadPhotoToDrive called with:', {
      hasBase64Data: !!base64Data,
      fileName: fileName,
      studentName: studentName,
      email: email,
      base64DataLength: base64Data ? base64Data.length : 0
    });
    
    // Validate input data
    if (!base64Data || typeof base64Data !== 'string') {
      console.error('Invalid base64Data:', base64Data);
      throw new Error('Invalid photo data received');
    }
    
    if (!base64Data.includes(',')) {
      console.error('Base64 data does not contain comma separator:', base64Data.substring(0, 100));
      throw new Error('Invalid base64 format - missing data URL prefix');
    }
    
    // Create or get the AIPL Photos folder
    const folderName = 'AIPL Cricket Registration Photos';
    let folder;
    const folders = DriveApp.getFoldersByName(folderName);
    
    if (folders.hasNext()) {
      folder = folders.next();
      console.log('Using existing folder:', folderName);
    } else {
      folder = DriveApp.createFolder(folderName);
      console.log('Created new folder:', folderName);
    }
    
    // Extract base64 data (remove data:image/jpeg;base64, prefix)
    const parts = base64Data.split(',');
    if (parts.length !== 2) {
      throw new Error('Invalid base64 format - expected data URL with comma separator');
    }
    
    const base64String = parts[1];
    const dataUrlPrefix = parts[0];
    
    // Extract MIME type from data URL
    let mimeType = 'image/jpeg'; // default
    if (dataUrlPrefix.includes(':') && dataUrlPrefix.includes(';')) {
      try {
        mimeType = dataUrlPrefix.split(':')[1].split(';')[0];
      } catch (mimeError) {
        console.log('Could not extract MIME type, using default:', mimeType);
      }
    }
    
    console.log('Extracted MIME type:', mimeType);
    console.log('Base64 string length:', base64String.length);
    
    // Generate safe filename
    const safeStudentName = studentName.replace(/[^a-zA-Z0-9]/g, '_');
    const safeEmail = email.replace(/[^a-zA-Z0-9@.]/g, '_');
    const safeFileName = fileName ? fileName.replace(/[^a-zA-Z0-9.]/g, '_') : 'photo.jpg';
    const finalFileName = `${safeStudentName}_${safeEmail}_${safeFileName}`;
    
    // Create blob from base64
    const blob = Utilities.newBlob(
      Utilities.base64Decode(base64String),
      mimeType,
      finalFileName
    );
    
    console.log('Created blob with size:', blob.getBytes().length);
    
    // Upload file to Drive
    const file = folder.createFile(blob);
    console.log('File created in Drive with ID:', file.getId());
    
    // Make file viewable by anyone with the link
    file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    
    // Return the file URL
    const fileUrl = file.getUrl();
    console.log('Photo uploaded successfully for:', studentName, 'URL:', fileUrl);
    
    return fileUrl;
    
  } catch (error) {
    console.error('Error in uploadPhotoToDrive:', error);
    console.error('Error details:', error.toString());
    throw new Error('Photo upload failed: ' + error.toString());
  }
}

// Helper function to create consistent responses
function createResponse(success, message, duplicate = false) {
  const response = { success, message };
  if (duplicate) response.duplicate = true;
  
  console.log('Sending response:', response);
  
  const output = ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
  
  // Add CORS headers to allow cross-origin requests
  output.setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400'
  });
  
  return output;
}

// Test function for manual testing
function testRegistration() {
  const testData = {
    parameter: {
      name: 'Test Student',
      section: 'A',
      rollNo: '12345',
      email: 'test@rknec.edu',
      phoneNumber: '9876543210',
      playingPreference: 'Batsman',
      pastExperiences: 'Played district level cricket',
      achievements: 'Best batsman award in college tournament',
      photograph: 'test-photo-data'
    }
  };
  
  console.log('Running test registration...');
  return handleRequest(testData);
}

// Function to get registration statistics
function getRegistrationStats() {
  try {
    const spreadsheetId = '1Gfpp_FHjxAOneBncNpCyZVg0akkGLE_WuqCcbeo8UOA';
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName('AIPL Registration');
    
    if (!sheet) {
      return 'No registrations found';
    }
    
    const lastRow = sheet.getLastRow();
    const totalRegistrations = lastRow > 1 ? lastRow - 1 : 0;
    
    console.log('Total AIPL registrations:', totalRegistrations);
    return `Total AIPL Cricket registrations: ${totalRegistrations}`;
    
  } catch (error) {
    console.error('Error getting stats:', error);
    return 'Error getting registration statistics';
  }
}