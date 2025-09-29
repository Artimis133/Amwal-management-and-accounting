
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-lg'
        : 'bg-transparent md:bg-transparent bg-background/20 backdrop-blur-xl'
      }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
  onClick={() => scrollToSection('home')} 
  className={`font-bold transition-colors duration-300 text-left ${
    scrolled ? 'text-foreground' : 'text-white'
  }`}
>
  <div className="text-2xl leading-tight">Amwal</div>
  <div className="text-primary text-lg leading-tight">Management & Accounting</div>
</button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`transition-all duration-300 hover:scale-110 ${scrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-accent'
                }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`transition-all duration-300 hover:scale-110 ${scrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-accent'
                }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-all duration-300 hover:scale-110 ${scrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-accent'
                }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-all duration-300 hover:scale-110 ${scrolled
                  ? 'text-foreground hover:text-primary'
                  : 'text-white hover:text-accent'
                }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-all duration-300 hover:scale-110 ${scrolled ? 'text-foreground' : 'text-white'
              }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in">
            <div className="pt-4 space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
