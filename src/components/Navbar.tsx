import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0">
              <img 
                src="/logo.svg" 
                alt="Mindpik Technologies" 
                className="h-12 w-auto transform transition-transform hover:scale-105"
                style={{ filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))' }}
              />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#services" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
              <a href="#about" className="text-primary hover:text-secondary px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors">Contact Us</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="text-primary hover:text-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors">Home</a>
            <a href="#services" className="text-primary hover:text-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors">Services</a>
            <a href="#about" className="text-primary hover:text-secondary block px-3 py-2 rounded-md text-base font-medium transition-colors">About</a>
            <a href="#contact" className="bg-primary text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary transition-colors">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}