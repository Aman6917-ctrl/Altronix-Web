import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (hash: string) => {
    if (location.pathname === "/") {
      // Already on homepage → scroll to section
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Not on homepage → navigate home, then scroll after render
      navigate("/" + hash);
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", action: () => navigate("/") },
    { name: "Gallery", action: () => navigate("/gallery") },
    { name: "Achievements", action: () => navigate("/achievements") },
    { name: "About", action: () => handleScrollOrNavigate("#vision") },
    { name: "Contact", action: () => handleScrollOrNavigate("#contact") },
  ];

  const teamOptions = [
    { name: "Technical Team", action: () => navigate("/team") },
    { name: "Altronix Committee", action: () => navigate("/committee") },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
            <div className="h-12 w-auto flex items-center">
              <img 
                src="/download.png" 
                alt="Altronix Logo" 
                className="h-12 w-auto object-contain" 
              />
            </div>
            <span className="text-3xl font-bold text-gradient">Altronix</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="px-3 py-2 text-base font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Team Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center space-x-1 px-3 py-2 text-base font-semibold text-muted-foreground hover:text-primary transition-colors duration-200">
                    <span>Team</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass border-white/10 bg-background/95 backdrop-blur-sm">
                  {teamOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.name}
                      onClick={option.action}
                      className="text-muted-foreground hover:text-primary hover:bg-primary/10 cursor-pointer"
                    >
                      {option.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="block w-full text-left px-3 py-2 text-lg font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
            {/* Team options in mobile */}
            <div className="border-l-2 border-primary/20 ml-3 pl-3">
              <div className="text-sm font-medium text-primary mb-2 px-3">Team</div>
              {teamOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={option.action}
                  className="block w-full text-left px-3 py-2 text-base text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {option.name}
                </button>
              ))}
            </div>
            
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
