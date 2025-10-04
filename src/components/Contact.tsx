import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'altronix@rknec.edu',
      action: 'mailto:altronix@rknec.edu'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      details: '@altronix.rknec',
      action: 'https://www.linkedin.com/company/aiml-rcoem/'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      details: '@altronix.rknec',
      action: 'https://www.instagram.com/aiml_rbu'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'RBU',
      action: '#'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      // Add Web3Forms API key
      formData.append('access_key', 'c15fc6bd-bcce-459e-b8d5-8ac9df48d5eb');
      formData.append('subject', 'Contact Form Submission - Altronix');
      formData.append('from_name', 'Altronix Contact Form');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        alert('Message sent successfully! We will get back to you soon.');
        form.reset(); // Reset the form
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <MessageCircle className="h-4 w-4 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Start Your AI Journey</span>?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name
                  </label>
                  <Input 
                    id="firstName"
                    type="text" 
                    placeholder="John"
                    className="bg-glass-card border-white/10 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name
                  </label>
                  <Input 
                    id="lastName"
                    type="text" 
                    placeholder="Doe"
                    className="bg-glass-card border-white/10 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="john@company.com"
                  className="bg-glass-card border-white/10 focus:border-primary"
                />
              </div>


              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell us about your project and how we can help..."
                  rows={6}
                  className="bg-glass-card border-white/10 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-glow glow-primary py-6 text-lg font-semibold group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.action}
                  className="glass rounded-xl p-6 hover-glow group block transition-all duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors duration-200">
                        {info.title}
                      </h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
