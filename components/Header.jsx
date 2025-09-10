'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (id) => {
    setMenuOpen(false);

    if (pathname !== '/') {
      router.push(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide hover:opacity-80 transition">
          <Link href="/">Madasha Saab</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-gray-700 text-sm">
          <button onClick={() => handleNavigation('about')} className="hover:text-blue-600 transition">About</button>
          <button onClick={() => handleNavigation('work')} className="hover:text-blue-600 transition">Our Work</button>
          <Link href="/events" className="hover:text-blue-600 transition">Events</Link>
          <button onClick={() => handleNavigation('impact')} className="hover:text-blue-600 transition">Impact</button>
          <button onClick={() => handleNavigation('team')} className="hover:text-blue-600 transition">Board</button>
          <button
            onClick={() => handleNavigation('contact')}
            className="hover:bg-blue-600 hover:text-white text-blue-600 border border-blue-600 px-4 py-1 rounded-full transition duration-300"
          >
            Get Involved
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 shadow-inner border-t border-gray-200 space-y-4 text-sm font-medium">
          <button onClick={() => handleNavigation('about')} className="block w-full text-left text-gray-700 hover:text-blue-600">About</button>
          <button onClick={() => handleNavigation('work')} className="block w-full text-left text-gray-700 hover:text-blue-600">Our Work</button>
          <Link href="/events" className="block text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Events</Link>
          <button onClick={() => handleNavigation('impact')} className="block w-full text-left text-gray-700 hover:text-blue-600">Impact</button>
          <button onClick={() => handleNavigation('team')} className="block w-full text-left text-gray-700 hover:text-blue-600">Board</button>
          <button
            onClick={() => handleNavigation('contact')}
            className="block w-full text-left text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white"
          >
            Get Involved
          </button>
         
        </div>
      )}
    </header>
  );
};

export default Header;
