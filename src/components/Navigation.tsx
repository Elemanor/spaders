import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80; // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Services',
      href: '#services',
      dropdown: [
        { label: 'Basement Underpinning', href: '#underpinning' },
        { label: 'Bench Footing', href: '#bench-footing' },
        { label: 'Basement Lowering', href: '#lowering' },
        { label: 'Waterproofing', href: '#waterproofing' },
      ]
    },
    { label: 'Process', href: '#process' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Cost Calculator', href: '#calculator' },
    { label: 'FAQs', href: '#faqs' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl">
                S
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">SPADERS</h1>
                <p className="text-xs text-gray-600 hidden sm:block">Professional Underpinning</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => item.dropdown && setServicesOpen(true)}
                onMouseLeave={() => item.dropdown && setServicesOpen(false)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div
                      className={`absolute top-full left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 transition-all duration-200 ${
                        servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={(e) => handleNavClick(e, subItem.href)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:437-545-0067"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>437-545-0067</span>
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
              Get Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <div className="py-2">
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex items-center justify-between w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                            onClick={(e) => handleNavClick(e, subItem.href)}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3">
              <a
                href="tel:437-545-0067"
                className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 font-medium"
              >
                <Phone className="h-5 w-5" />
                <span>437-545-0067</span>
              </a>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}