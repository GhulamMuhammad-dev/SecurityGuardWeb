'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Mail,
  Phone,
  Headphones,
  User,
  Sparkles,
  Menu,
  X,
} from 'lucide-react';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from 'react-icons/fa6';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#certifications', label: 'Certificates' },
    { href: '#covarage', label: 'Covarage' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="hidden  bg-[#EF443B] md:bg-[#EF443B] text-white md:text-white text-sm md:flex flex-col md:flex-row justify-between items-center px-4 lg:px-16 py-2 gap-2">
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook"><FaFacebookF size={16} /></a>
          <a href="#" aria-label="X / Twitter"><FaXTwitter size={16} /></a>
          <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn size={16} /></a>
          <a href="#" aria-label="YouTube"><FaYoutube size={16} /></a>
        </div>
        <div className="flex flex-wrap gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-1">
            <Phone size={16} /> <span>Sales: 0808 196 2872</span>
          </div>
          <div className="flex items-center gap-1">
            <Headphones size={16} /> <span>Support: 0344 477 9991</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail size={16} /> <Link href="/contact" className="hover:text-[#EF443B]">Contact Us</Link>
          </div>
          <div className="flex items-center gap-1">
            <User size={16} /> <Link href="/login" className="hover:text-[#EF443B]">Staff & Client Login</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white md:bg-white text-black md:text-black px-4 lg:px-16 py-4 flex justify-between items-center relative z-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-[#EF443B]">CrossFront</span>
          <span className="text-black"> Services</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-[#EF443B] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Quote Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 bg-[#EF443B] hover:bg-[#d63c2f] text-white px-4 py-2 rounded-md text-sm"
        >
          <Sparkles size={16} /> Get A Quote
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="bg-black text-white flex flex-col px-6 py-4 space-y-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="flex items-center gap-2 bg-[#EF443B] text-white px-4 py-2 rounded-md text-sm w-max"
            onClick={() => setMenuOpen(false)}
          >
            <Sparkles size={16} /> Get A Quote
          </Link>

          {/* Top Bar info in mobile menu */}
          <div className="pt-4 border-t border-[#EF443B] space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} /> Sales: 0808 196 2872
            </div>
            <div className="flex items-center gap-2">
              <Headphones size={16} /> Support: 0344 477 9991
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} /> <Link href="/contact">Contact Us</Link>
            </div>
            <div className="flex items-center gap-2">
              <User size={16} /> <Link href="/login">Login</Link>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <FaFacebookF size={16} />
              <FaXTwitter size={16} />
              <FaInstagram size={16} />
              <FaLinkedinIn size={16} />
              <FaYoutube size={16} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
