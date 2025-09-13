import { Zap, Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/aiml_rbu/' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/aiml-rcoem/posts/?feedView=all' },
    { name: 'Email', icon: Mail, href: 'mailto:altronix@rknec.edu' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Team', href: '/team' },
    { name: 'About', href: location.pathname === '/' ? '#vision' : '/#vision' },
    { name: 'Contact', href: location.pathname === '/' ? '#contact' : '/#contact' }
  ];


  return (
    <footer className="relative py-20 border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="/download.png"
                  alt="Altronix Logo"
                  className="h-12 w-12"
                />
              </div>
              <span className="text-3xl font-bold text-gradient">Altronix</span>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Transforming and
              Building the future, one algorithm at a time.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover-glow group transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-base"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">ALTRONIX-RBU</p>
                <p className="text-sm">Ramdeobaba Univesity</p>
              </div>
              <div>
                <p className="text-sm">
                  <span className="block">Email: altronix@rknec.edu</span>
                  <span className="block mt-1"> 53G6+GCJ, 15, Gittikhadan Rd, Nehru Colony, BUPESHNAGAR, Nagpur, Maharashtra 440013</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-muted-foreground text-sm">
                © 2025 Altronixx. All rights reserved.
              </p>
              <div className="hidden md:block w-px h-4 bg-white/10"></div>
              <p className="text-muted-foreground text-sm">
                Made with ❤️ by Altronix Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;