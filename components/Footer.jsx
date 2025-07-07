'use client'
import { FaFacebookF, FaYoutube, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-blue-400 mb-2">Madasha Saab</h3>
          <p className="text-gray-300 text-sm">Voices That Inspire. Dialogue That Transforms.</p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('vision')}>Vision & Mission</button></li>
            <li><button onClick={() => scrollToSection('work')}>What We Do</button></li>
            <li><button onClick={() => scrollToSection('events')}>Events</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Get Involved</button></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
          <p className="text-sm text-gray-300 mb-2">📧 madashasaab@gmail.com</p>
          <div className="flex gap-4 mt-2 text-lg">
            <a href="https://www.facebook.com/people/Madasha-Saab/61573872676289/?_rdr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com/@saab-l2m?si=ILhqtapqysJ2FXDd" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-white">
              <FaYoutube />
            </a>
            <a href="mailto:madashasaab@gmail.com" className="text-yellow-400 hover:text-white">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Madasha Saab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
