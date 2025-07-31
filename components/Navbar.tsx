'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top emergency bar */}
      <div className="bg-[#1A1A1A] text-[#F4F4F4] text-sm py-2 px-4 flex justify-between items-center ">
        <span>24/7 Emergency Service: <span className="font-semibold text-white">Call Now: +1 (555) 123-4567</span></span>
        <div className="flex items-center gap-4">
          <span>Follow Our Security Updates:</span>
          <a href="#" className="hover:text-[#EF443B]">📘</a>
          <a href="#" className="hover:text-[#EF443B]">🔗</a>
          <a href="#" className="hover:text-[#EF443B]">📸</a>
        </div>
      </div>

      {/* Centered contact row */}
      <div className="bg-white text-[#1A1A1A] py-4 px-6 hidden md:flex justify-between items-center shadow">
        <div className="flex items-center space-x-2 text-2xl font-bold">
          <span className="text-[#EF443B]">Intleaf</span><span>Guard</span>
        </div>
        <div className="flex items-center gap-10 text-sm">
          <div className="text-center">
            <div className="uppercase text-xs font-semibold">Headquarters</div>
            <div>456 Security Ave, Safe City</div>
          </div>
          <div className="text-center">
            <div className="uppercase text-xs font-semibold">Email Us</div>
            <div>contact@secureguard.com</div>
          </div>
          <div className="text-center">
            <div className="uppercase text-xs font-semibold">Emergency</div>
            <div>+1 (555) 987-6543</div>
          </div>
        </div>
      </div>

      {/* Navigation over Hero */}
      <nav className="absolute top-[160px] left-0 right-0 z-50 px-4 text-white font-medium ">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold md:hidden block">
            <span className="text-black">Intleaf</span>Guard
          </Link>

          <ul className="hidden md:flex gap-8 md:w-full md:items-center md:justify-center text-sm bg-[#1A1A1A]/80 px-8 py-3 rounded-full">
            <li><Link href="#" className="hover:text-[#EF443B]">Home</Link></li>
            <li><Link href="#about" className="hover:text-[#EF443B]">About Us</Link></li>
            <li><Link href="#services" className="hover:text-[#EF443B]">Our Services</Link></li>
            <li><Link href="#securityteam" className="hover:text-[#EF443B]">Security Team</Link></li>
            <li><Link href="#available" className="hover:text-[#EF443B]">Available</Link></li>
            <li><Link href="#blog" className="hover:text-[#EF443B]">Blog</Link></li>
            <li>
              <Link href="#contact" className="bg-[#EF443B] text-white px-4 py-2 rounded hover:bg-[#C6362E]">
                Contact
              </Link>
            </li>
          </ul>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 bg-[#1A1A1A]/90 rounded-lg p-4 space-y-3 text-white">
            {['Home', 'About Us', 'Our Services', 'Security Team', 'Resources', 'Get a Quote'].map((label, i) => (
              <Link
                key={i}
                href={`#${label.toLowerCase().replace(/ /g, '')}`}
                className="block hover:text-[#EF443B]"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
