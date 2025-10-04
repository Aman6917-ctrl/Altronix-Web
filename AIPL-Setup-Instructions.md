# AIPL Registration - Google Apps Script Setup

## Instructions for Setting Up Google Apps Script

1. **Open Google Apps Script**
   - Go to [script.google.com](https://script.google.com)
   - Click "New Project"

2. **Add the Script Code**
   - Delete the default `myFunction()` code
   - Copy and paste the entire code from `google-apps-script-aipl.js`
   - Save the project (Ctrl+S) and give it a name like "AIPL Registration Handler"

3. **Deploy the Script**
   - Click "Deploy" → "New deployment"
   - Choose type: "Web app"
   - Description: "AIPL Cricket Registration Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (or "Anyone with Google account" for better security)
   - Click "Deploy"

4. **Get the Deployment URL**
   - Copy the "Web app" URL that looks like:
     `https://script.google.com/macros/s/[SCRIPT_ID]/exec`

5. **Update the React Form**
   - In `src/pages/AIPLRegistration.tsx`, find line with `scriptUrl`
   - Replace the placeholder URL with your actual deployment URL

6. **Grant Permissions**
   - The first time the script runs, it will ask for permissions
   - Allow access to Google Sheets
   - The script will create a new sheet named "AIPL Registration" in your spreadsheet

## Google Sheet Structure

The script will automatically create these columns:
- Timestamp
- Name  
- Section
- Roll No
- Email
- Phone Number
- Playing Preference
- Past Experiences
- Achievements
- Photograph (status)
- Status

## Features Implemented

✅ **Duplicate Email Prevention**: Each @rknec.edu email can register only once
✅ **Email Validation**: Only @rknec.edu emails are accepted
✅ **Form Validation**: All required fields must be filled
✅ **Error Handling**: Clear error messages for users
✅ **CORS Support**: Works with web deployment
✅ **Automatic Timestamps**: Records when each registration was submitted

## Testing

1. Test with a valid @rknec.edu email
2. Try submitting the same email twice (should be rejected)
3. Try submitting with invalid email (should be rejected)
4. Check your Google Sheet for the data

## Troubleshooting

### If registration says "successful" but no sheet is created:

1. **Check Google Apps Script Logs:**
   - Go to your Google Apps Script project
   - Click "Executions" on the left sidebar
   - Look for error messages or logs

2. **Verify Spreadsheet ID:**
   - Make sure the spreadsheet ID in line 12 of your script matches your Google Sheet
   - Current ID in script: `1ibb4DAXxKEXdFxwjXI2sn6vzbd4W3-9Qmt4CB-vKk18`
   - Your Google Sheet URL should contain this ID

3. **Check Permissions:**
   - Make sure the script has permission to access Google Sheets
   - Re-authorize if needed

4. **Alternative Solution:**
   - Use the `google-apps-script-aipl-alternative.js` file instead
   - This version creates its own spreadsheet if the specified one doesn't exist
   - Check the script logs for the new spreadsheet URL

### Common Issues:

- ❌ **"Script not found"**: Redeploy the web app
- ❌ **"Permission denied"**: Check script permissions
- ❌ **"Spreadsheet not found"**: Verify spreadsheet ID
- ❌ **CORS errors**: Ensure deployment allows "Anyone" access

### Debug Steps:

1. Open browser developer tools (F12)
2. Go to Console tab
3. Submit a test registration
4. Check for error messages
5. Cross-reference with Google Apps Script execution logs