import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom'; // <-- Add this import

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: location.pathname === '/' ? '#home' : '/#home' },
    { name: 'Team', href: '/team' },
    { name: 'About', href: location.pathname === '/' ? '#vision' : '/#vision' },
    { name: 'Contact', href: location.pathname === '/' ? '#contact' : '/#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/download.png"
              alt="Download"
              className="h-12 w-12"
            />
            <span className="text-3xl font-bold text-gradient">Altronix</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) =>
                item.href.startsWith('/') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-3 py-2 text-base font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-base font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex justify-end">
            <Link to="/hirewire-registration">
              <Button variant="default" className="bg-primary hover:bg-primary-glow glow-primary">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.href.startsWith('/') ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-lg font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-lg font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
            <div className="px-3 py-2">
              <Link to="/hirewire-registration" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full bg-primary hover:bg-primary-glow glow-primary">
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;