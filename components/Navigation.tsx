'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white bg-gray-700 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-playfair text-xl font-semibold text-white">
              AdokGroup
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-white font-medium">
            <a href="#home" className="hover:text-blue-400 transition duration-300 py-2">
              Accueil
            </a>
            <a href="#about" className="hover:text-blue-400 transition duration-300 py-2">
              À propos
            </a>
            <a href="#projects" className="hover:text-blue-400 transition duration-300 py-2">
              Projets
            </a>
            <a href="#services" className="hover:text-blue-400 transition duration-300 py-2">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-400 transition duration-300 py-2">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
            >
              Accueil
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
            >
              À propos
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
            >
              Projets
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
