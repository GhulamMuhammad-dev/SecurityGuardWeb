'use client'
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#10002B] text-[#E0AAFF] sticky top-0 z-50 shadow-lg">
      {/* Top contact bar */}
      <div className="bg-[#240046] px-4 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-end items-center gap-6 text-sm">
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-[#C77DFF] transition-colors">
            <Phone className="w-4 h-4" />
            <span>+1 (234) 567-890</span>
          </a>
          <a href="mailto:contact@intleafsecurity.com" className="flex items-center gap-2 hover:text-[#C77DFF] transition-colors">
            <Mail className="w-4 h-4" />
            <span>contact@intleafsecurity.com</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-[#C77DFF] transition-colors">
          Intleaf Security
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li>
            <Link href="#" className="hover:text-[#C77DFF] transition-colors">Home</Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-[#C77DFF] transition-colors">About</Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-[#C77DFF] transition-colors">Services</Link>
          </li>
          <li>
            <Link href="#guards" className="hover:text-[#C77DFF] transition-colors">Our Guards</Link>
          </li>
          <li>
            <Link href="#blog" className="hover:text-[#C77DFF] transition-colors">Blog</Link>
          </li>
          <li>
            <Link href="#contact" className="bg-[#C77DFF] text-black px-4 py-2 rounded hover:bg-[#9D4EDD] transition-colors">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C77DFF]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#10002B] border-t border-[#3C096C]">
          <ul className="px-4 py-4 space-y-4">
            <li>
              <Link 
                href="#" 
                className="block py-2 hover:text-[#C77DFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#about" 
                className="block py-2 hover:text-[#C77DFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="#services" 
                className="block py-2 hover:text-[#C77DFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="#guards" 
                className="block py-2 hover:text-[#C77DFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Our Guards
              </Link>
            </li>
            <li>
              <Link 
                href="#blog" 
                className="block py-2 hover:text-[#C77DFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="#contact" 
                className="block py-2 hover:text-[#C77DFF] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="pt-4 border-t border-[#3C096C]">
              <div className="flex flex-col gap-3 text-sm">
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-[#C77DFF] transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a href="mailto:contact@intleafsecurity.com" className="flex items-center gap-2 hover:text-[#C77DFF] transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>contact@intleafsecurity.com</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}