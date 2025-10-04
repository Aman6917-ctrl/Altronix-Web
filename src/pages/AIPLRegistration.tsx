import { useState } from 'react';
import { Upload, User, Calendar, BookOpen, Phone, MessageSquare, Send, Sparkles, Trophy, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const AIPLRegistration = () => {
  console.log(">>> AIPLRegistration MOUNTED at", window.location.pathname);

  const [formData, setFormData] = useState({
    name: '',
    section: '',
    rollNo: '',
    email: '',
    phoneNumber: '',
    photograph: null as File | null,
    playingPreference: '',
    pastExperiences: '',
    achievements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        photograph: file
      }));
      
      if (errors.photograph) {
        setErrors(prev => ({
          ...prev,
          photograph: ''
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    // All fields are now mandatory
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.section.trim()) newErrors.section = 'Section is required';
    if (!formData.rollNo.trim()) newErrors.rollNo = 'Roll number is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.playingPreference) newErrors.playingPreference = 'Playing preference is required';
    if (!formData.photograph) newErrors.photograph = 'Photograph is required';
    if (!formData.pastExperiences.trim()) newErrors.pastExperiences = 'Past cricket experiences are required';
    if (!formData.achievements.trim()) newErrors.achievements = 'Cricket achievements are required';
    
    // Email validation for @rknec.edu suffix
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!formData.email.endsWith('@rknec.edu')) {
      newErrors.email = 'Email must end with @rknec.edu';
    }
    
    // Phone number validation (basic)
    if (formData.phoneNumber && !/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = document.createElement('img');
      
      img.onload = () => {
        // Calculate new dimensions (max 800px width, maintain aspect ratio)
        const maxWidth = 800;
        const maxHeight = 800;
        let { width, height } = img;
        
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Draw and compress
        ctx?.drawImage(img, 0, 0, width, height);
        
        // Convert to base64 with compression (0.7 quality)
        const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
        console.log('Image compressed from', file.size, 'bytes to', compressedBase64.length, 'characters');
        resolve(compressedBase64);
      };
      
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    // Show loading message
    const loadingMessage = setTimeout(() => {
      console.log('Checking for duplicate registration...');
    }, 1000);

    try {
      let photographBase64 = '';
      
      if (formData.photograph) {
        console.log('Converting photo to base64...');
        photographBase64 = await convertFileToBase64(formData.photograph);
        console.log('Photo converted successfully, size:', photographBase64.length);
      }

      // Prepare data for Google Sheets with image info
      const submissionData = {
        name: formData.name,
        section: formData.section,
        rollNo: formData.rollNo,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        photograph: photographBase64,
        photographName: formData.photograph.name,
        playingPreference: formData.playingPreference,
        pastExperiences: formData.pastExperiences,
        achievements: formData.achievements,
        timestamp: new Date().toISOString()
      };

      // Google Apps Script URL for AIPL registration
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbxnqwML3y7vRjhAMVtKlAq2-liWiTn65ilr-3wPTeqfOqQPT5620nIg7OyZFA9OiXaImQ/exec';

      console.log('Submitting AIPL registration data:', {
        ...submissionData,
        photograph: submissionData.photograph ? `[${submissionData.photograph.length} characters]` : 'none'
      });

      try {
        // Try POST request with FormData for better handling of large payloads
        const formData = new FormData();
        Object.entries(submissionData).forEach(([key, value]) => {
          formData.append(key, String(value));
        });

        const response = await fetch(scriptUrl, {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Use no-cors to avoid CORS issues
        });

        // With no-cors mode, we can't read the response, so assume success
        console.log('✅ AIPL registration submitted successfully (no-cors mode)');
        alert('🏏 AIPL Registration submitted successfully! We will contact you soon for further details.');

      } catch (fetchError) {
        console.error('POST request failed:', fetchError);
        throw new Error('Failed to submit registration. Please check your internet connection and try again.');
      }

      // Reset form
      setFormData({
        name: '',
        section: '',
        rollNo: '',
        email: '',
        phoneNumber: '',
        photograph: null,
        playingPreference: '',
        pastExperiences: '',
        achievements: ''
      });

      // Reset file input
      const fileInput = document.getElementById('photograph') as HTMLInputElement;
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error('Error submitting AIPL registration:', error);
      alert('An error occurred while submitting your registration. Please try again later.');
    } finally {
      clearTimeout(loadingMessage);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 hover-glow border border-primary/20">
                <Trophy className="h-5 w-5 text-primary animate-glow-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  AIPL Cricket Registration
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Join AIPL Cricket Tournament!
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Register for AIPL Cricket Tournament 2025. Show your cricket skills and compete with the best players in college!
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gradient">AIPL Cricket Registration</h2>
                <p className="text-muted-foreground mb-2">
                  Fill in your details to register for the AIPL Cricket Tournament 2025
                </p>
                <p className="text-sm text-yellow-400 font-medium">
                  ⚠️ All fields marked with * are mandatory
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center space-x-2">
                    <User className="h-5 w-5 text-primary" />
                    <span>Personal Information</span>
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`bg-glass-card border-white/10 focus:border-primary ${errors.name ? 'border-red-500' : ''}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="section" className="block text-sm font-medium mb-2">
                        Section *
                      </label>
                      <Input
                        id="section"
                        name="section"
                        type="text"
                        required
                        placeholder="e.g., A, B, C"
                        value={formData.section}
                        onChange={handleInputChange}
                        className={`bg-glass-card border-white/10 focus:border-primary ${errors.section ? 'border-red-500' : ''}`}
                      />
                      {errors.section && <p className="text-red-500 text-sm mt-1">{errors.section}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="rollNo" className="block text-sm font-medium mb-2">
                        Roll Number *
                      </label>
                      <Input
                        id="rollNo"
                        name="rollNo"
                        type="text"
                        required
                        placeholder="Enter your roll number"
                        value={formData.rollNo}
                        onChange={handleInputChange}
                        className={`bg-glass-card border-white/10 focus:border-primary ${errors.rollNo ? 'border-red-500' : ''}`}
                      />
                      {errors.rollNo && <p className="text-red-500 text-sm mt-1">{errors.rollNo}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address (@rknec.edu) *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="yourname@rknec.edu"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`bg-glass-card border-white/10 focus:border-primary ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className={`bg-glass-card border-white/10 focus:border-primary ${errors.phoneNumber ? 'border-red-500' : ''}`}
                      />
                      {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
                    </div>

                    <div>
                      <label htmlFor="photograph" className="block text-sm font-medium mb-2">
                        Photograph *
                      </label>
                      <div className="relative">
                        <Input
                          id="photograph"
                          name="photograph"
                          type="file"
                          accept="image/*"
                          required
                          onChange={handleFileChange}
                          className={`bg-glass-card border-white/10 focus:border-primary file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 ${errors.photograph ? 'border-red-500' : ''}`}
                        />
                        <Image className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                      </div>
                      {errors.photograph && <p className="text-red-500 text-sm mt-1">{errors.photograph}</p>}
                      <p className="text-xs text-muted-foreground mt-1">Upload a clear photograph (JPG, PNG, etc.)</p>
                    </div>
                  </div>
                </div>

                {/* Cricket Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center space-x-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <span>Cricket Information</span>
                  </h3>

                  <div>
                    <label htmlFor="playingPreference" className="block text-sm font-medium mb-2">
                      Playing Preference *
                    </label>
                    <select
                      id="playingPreference"
                      name="playingPreference"
                      required
                      value={formData.playingPreference}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 bg-glass-card border border-white/10 rounded-lg focus:border-primary focus:outline-none text-foreground ${errors.playingPreference ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select your playing preference</option>
                      <option value="Batsman">Batsman</option>
                      <option value="Bowler">Bowler</option>
                      <option value="All-rounder">All-rounder</option>
                    </select>
                    {errors.playingPreference && <p className="text-red-500 text-sm mt-1">{errors.playingPreference}</p>}
                  </div>

                  <div>
                    <label htmlFor="pastExperiences" className="block text-sm font-medium mb-2">
                      Past Cricket Experiences *
                    </label>
                    <Textarea
                      id="pastExperiences"
                      name="pastExperiences"
                      placeholder="Describe your past cricket experiences (tournaments played, teams, etc.)"
                      rows={4}
                      required
                      value={formData.pastExperiences}
                      onChange={handleInputChange}
                      className={`bg-glass-card border-white/10 focus:border-primary resize-none ${errors.pastExperiences ? 'border-red-500' : ''}`}
                    />
                    {errors.pastExperiences && <p className="text-red-500 text-sm mt-1">{errors.pastExperiences}</p>}
                    <p className="text-xs text-muted-foreground mt-1">Required - tell us about your cricket background</p>
                  </div>

                  <div>
                    <label htmlFor="achievements" className="block text-sm font-medium mb-2">
                      Cricket Achievements *
                    </label>
                    <Textarea
                      id="achievements"
                      name="achievements"
                      placeholder="List your cricket achievements (awards, records, recognitions, etc.)"
                      rows={4}
                      required
                      value={formData.achievements}
                      onChange={handleInputChange}
                      className={`bg-glass-card border-white/10 focus:border-primary resize-none ${errors.achievements ? 'border-red-500' : ''}`}
                    />
                    {errors.achievements && <p className="text-red-500 text-sm mt-1">{errors.achievements}</p>}
                    <p className="text-xs text-muted-foreground mt-1">Required - showcase your cricket accomplishments</p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-glow glow-primary py-6 text-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Uploading Photo & Submitting...
                      </>
                    ) : (
                      <>
                        Register for AIPL Cricket 🏏
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground space-y-2">
                  <p>By registering, you agree to participate in the AIPL Cricket Tournament 2025</p>
                  <p className="text-xs">📧 Each @rknec.edu email can register only once</p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIPLRegistration;