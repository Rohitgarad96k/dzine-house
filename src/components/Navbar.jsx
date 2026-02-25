import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Define exact paths to match your App.jsx routes
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'Brand', path: '/brand' },
    { name: 'Promotions', path: '/promotions' },
    { name: 'Digital', path: '/digital' },
    { name: 'Retainer', path: '/retainer' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      
      {/* Top Social / Contact Bar */}
      <div className="bg-teal-600 text-white text-xs py-1.5 px-4 flex justify-end items-center gap-4">
        <span>+91-9876543210</span>
        <div className="flex gap-2">
          {/* Replace with actual SVG icons */}
          <span className="cursor-pointer hover:text-teal-200">FB</span>
          <span className="cursor-pointer hover:text-teal-200">IG</span>
          <span className="cursor-pointer hover:text-teal-200">LI</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - Wrap in a Link so clicking the logo goes Home */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
             <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                d
             </div>
             <span className="text-2xl font-bold text-gray-800 tracking-tight">Dzine House</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-gray-600 hover:text-teal-600 text-sm font-medium uppercase tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsOpen(false)} // Closes the mobile menu when a link is clicked
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}