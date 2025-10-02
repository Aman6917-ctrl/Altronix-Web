import { useState } from 'react';
import { Upload, User, Calendar, BookOpen, Phone, MessageSquare, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const HirewireRegistration = () => {
  console.log(">>> HirezwireRegistration MOUNTED at", window.location.pathname);

  const [formData, setFormData] = useState({
    name: '',
    year: '',
    section: '',
    branch: '',
    customBranch: '',
    whatsapp: '',
    email: '',
    contact: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Handle branch field - use custom branch if "Other" is selected
      const finalBranch = formData.branch === 'Other' ? formData.customBranch : formData.branch;

      // Try GET request with URL parameters (more CORS-friendly)
      const params = new URLSearchParams({
        fullName: formData.name,
        year: formData.year,
        section: formData.section,
        branch: finalBranch,
        whatsapp: formData.whatsapp,
        email: formData.email,
        contact: formData.contact,
        additionalInfo: formData.message,
        timestamp: new Date().toISOString()
      });

      const getUrl = `https://script.google.com/macros/s/AKfycbzYIOnzIYD3X1Q3YWH2AIzJwWQ0HL_cLVkwXToaFzGobTx2EO6Q7hlTh1tOtG7pGxxJ/exec?${params.toString()}`;

      console.log('Trying GET request with URL:', getUrl);

      try {
        console.log('Sending GET request to:', getUrl);
        const response = await fetch(getUrl, {
          method: 'GET',
          mode: 'no-cors' // This helps with CORS issues
        });

        console.log('GET request completed (no-cors mode)');
        console.log('Note: With no-cors mode, we cannot read the response');
        console.log('✅ Form submitted');
        alert('Registration submitted! ');

      } catch (getError) {
        console.log('GET request failed, trying POST...');

        // Fallback to POST if GET fails
        const submissionData = {
          fullName: formData.name,
          year: formData.year,
          section: formData.section,
          branch: finalBranch,
          whatsapp: formData.whatsapp,
          email: formData.email,
          contact: formData.contact,
          additionalInfo: formData.message,
          timestamp: new Date().toISOString()
        };

        console.log('Trying POST request with data:', submissionData);

        const postResponse = await fetch('https://script.google.com/macros/s/AKfycbzYIOnzIYD3X1Q3YWH2AIzJwWQ0HL_cLVkwXToaFzGobTx2EO6Q7hlTh1tOtG7pGxxJ/exec', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData)
        });

        console.log('POST Response status:', postResponse.status);

        if (postResponse.ok) {
          console.log('✅ Form submitted successfully via POST');
          alert('Registration submitted successfully! We will contact you soon.');
        } else {
          console.error('❌ POST request failed with status:', postResponse.status);
          alert('Submission failed. Please try again.');
        }
      }
      // Reset form
      setFormData({
        name: '',
        year: '',
        section: '',
        branch: '',
        customBranch: '',
        whatsapp: '',
        email: '',
        contact: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      if (error instanceof Error) {
        alert(`An error occurred: ${error.message}. Please try again later.`);
      } else {
        alert('An unexpected error occurred. Please try again later.');
      }
    }

    setIsSubmitting(false);
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
                <Sparkles className="h-5 w-5 text-primary animate-glow-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Hirewire Registration
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Join The Ultimate AI Challenge!
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Register for HireWire 2025: The Placement Simulator with Mechasso.
                Get ready for resume building, coding challenges, group discussions, and more!
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gradient">Registration Form</h2>
                <p className="text-muted-foreground">
                  Fill in your details to register for HireWire 2025
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
                        className="bg-glass-card border-white/10 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="year" className="block text-sm font-medium mb-2">
                        Year *
                      </label>
                      <select
                        id="year"
                        name="year"
                        required
                        value={formData.year}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-glass-card border border-white/10 rounded-lg focus:border-primary focus:outline-none text-foreground"
                      >
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
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
                        className="bg-glass-card border-white/10 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="branch" className="block text-sm font-medium mb-2">
                        Branch *
                      </label>
                      <select
                        id="branch"
                        name="branch"
                        required
                        value={formData.branch}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-glass-card border border-white/10 rounded-lg focus:border-primary focus:outline-none text-foreground"
                      >
                        <option value="">Select Branch</option>
                        <option value="Computer Engineering">Computer Science and Engineering</option>
                        <option value="AIML">CSE-AICS</option>
                        <option value="AIML">CSE-Data Science</option>
                        <option value="Information Technology">Information Technology</option>
                        <option value="Electronics & Communication">Electronics & Communication</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        <option value="Electrical Engineering">Electronics and Computer Science</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Other">Other</option>
                      </select>

                      {formData.branch === 'Other' && (
                        <Input
                          id="customBranch"
                          name="customBranch"
                          type="text"
                          required
                          placeholder="Please specify your branch"
                          value={formData.customBranch}
                          onChange={handleInputChange}
                          className="bg-glass-card border-white/10 focus:border-primary"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>Contact Information</span>
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                        WhatsApp Number *
                      </label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        placeholder="+91 9876543210"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="bg-glass-card border-white/10 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@rknec.edu"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-glass-card border-white/10 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact" className="block text-sm font-medium mb-2">
                        Contact Number
                      </label>
                      <Input
                        id="contact"
                        name="contact"
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.contact}
                        onChange={handleInputChange}
                        className="bg-glass-card border-white/10 focus:border-primary"
                      />
                    </div>

                    <div>
                      {/* Empty div for grid balance */}
                    </div>
                  </div>
                </div>


                {/* Additional Message */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Additional Information</span>
                  </h3>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message (Optional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Any additional information or questions..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-glass-card border-white/10 focus:border-primary resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-glow glow-primary py-6 text-lg font-semibold group disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
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

export default HirewireRegistration;
