import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-10 w-auto" src="/rapido-logo.svg" alt="Rapido Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-yellow-500 font-medium">About Us</a>
            <a href="#safety" className="text-gray-700 hover:text-yellow-500 font-medium">Safety</a>
            <a href="#blog" className="text-gray-700 hover:text-yellow-500 font-medium">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-yellow-500 font-medium">Contact Us</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button onClick={toggleNav} className="text-gray-700 hover:text-yellow-500 focus:outline-none">
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block text-gray-700 hover:text-yellow-500 font-medium">About Us</a>
            <a href="#safety" className="block text-gray-700 hover:text-yellow-500 font-medium">Safety</a>
            <a href="#blog" className="block text-gray-700 hover:text-yellow-500 font-medium">Blog</a>
            <a href="#contact" className="block text-gray-700 hover:text-yellow-500 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
