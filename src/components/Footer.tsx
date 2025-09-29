
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { useState } from "react";


const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
       
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="font-bold transition-colors duration-300 text-left text-foreground"
            >
              <div className="text-2xl leading-tight">Amwal</div>
              <div className="text-primary text-lg leading-tight">Management & Accounting</div>
            </button>

            {/* UK Flag Badge with Image */}
            <div className="flex items-center gap-2">
              <img
                src="/images/flag.png"
                alt="UK Flag"
                className="w-6 h-4 rounded-sm object-cover"
              />
              <span className="text-sm font-medium text-foreground">UK Based Company</span>
            </div>

            <p className="text-muted-foreground">
              Your trusted accounting partner in United Kingdom, providing expert financial solutions for businesses of all sizes.
            </p>
          </div>

          {/* Quick Links */}
          {/* // In your Footer component, update the Quick Links section: */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="block text-muted-foreground hover:text-primary transition-colors text-left w-full"
              >
                Home
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('services');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-muted-foreground hover:text-primary transition-colors text-left w-full"
              >
                Services
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('about');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-muted-foreground hover:text-primary transition-colors text-left w-full"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-muted-foreground hover:text-primary transition-colors text-left w-full"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Company Accounts & Tax Returns
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Self Assessment Tax Returns
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Expert Bookkeeping Services
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                VAT Accountants
              </p>
              <p className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                Documentation Services - Apostille
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">

              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  + 44 78 8761 99900
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  info@amwalmanagment.co.uk
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">


          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
