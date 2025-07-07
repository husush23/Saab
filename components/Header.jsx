'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1
          className="text-2xl font-bold text-blue-600 cursor-pointer tracking-wide hover:opacity-80 transition"
          onClick={() => scrollToSection('hero')}
        >
            <Link href='/'>
          Madasha Saab
            </Link>
        </h1>

        <nav className="hidden md:flex gap-8 items-center font-medium text-gray-700 text-sm">
          <button
            className="hover:text-blue-600 transition duration-200"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button
            className="hover:text-blue-600 transition duration-200"
            onClick={() => scrollToSection('work')}
          >
            Our Work
          </button>
          <Link
            href="/events"
            className="hover:text-blue-600 transition duration-200"
          >
            Events
          </Link>
          <button
            className="hover:text-blue-600 transition duration-200"
            onClick={() => scrollToSection('impact')}
          >
            Impact
          </button>
          <button
            className="hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-600 px-4 py-1 rounded-full transition duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Get Involved
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
