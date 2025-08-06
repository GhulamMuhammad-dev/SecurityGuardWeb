"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Mail,
  Phone,
  Headphones,
  User,
  Sparkles,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

// Sample services list (you can import from /data/services.ts)
const servicesData = [
  { slug: "manned-guarding", title: "Manned Guarding" },
  { slug: "mobile-patrols", title: "Mobile Patrols" },
  { slug: "k9-dog-units", title: "K9 Dog Units" },
  { slug: "event-security", title: "Event Security" },
  { slug: "construction-site-security", title: "Construction Site Security" },
  { slug: "key-holding", title: "Key Holding" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#covarage", label: "Coverage" },
    { href: "/online-quote", label: "Online Quote" },
  ];

  return (
    <header className="w-full">
      <nav className="bg-white text-black px-4 lg:px-16 py-4 flex justify-between items-center relative z-20">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center cursor-pointer">
          <Image
            width={60}
            height={60}
            src="/images/LogocrossService.png"
            alt="CrossFront logo"
            className="object-cover rounded-2xl"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-sm items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary-color transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary-color cursor-pointer">
              About <ChevronDown size={16} />
            </button>
            {aboutDropdownOpen && (
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md mt-2 w-60 z-50">
                <Link href="/about/mission" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Mission Statement</Link>
                <Link href="/about/environment" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Environmental Policy</Link>
                <Link href="/about/health-and-safety" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Health & Safety Policy</Link>
                <Link href="/about/quality" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Quality Policy</Link>
                <Link href="/about/faq" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-primary-color cursor-pointer">
              Services <ChevronDown size={16} />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 bg-white text-black shadow-lg rounded-md mt-2 w-64 z-50">
                {servicesData.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/serviceInfo/${service.slug}`}
                    className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden md:flex items-center gap-2 bg-primary-color hover:bg-primary-color-hover text-white px-4 py-2 rounded-md text-sm cursor-pointer"
        >
          <Sparkles size={16} /> Get A Quote
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-black text-white flex flex-col px-6 py-4 space-y-4 md:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary-color cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* About Links */}
          <div className="mt-4">
            <p className="uppercase text-sm font-semibold mb-2">About</p>
            <Link href="/about/mission" className="block py-1 pl-2 text-sm hover:text-primary-color" onClick={() => setMenuOpen(false)}>Mission Statement</Link>
            <Link href="/about/environment" className="block py-1 pl-2 text-sm hover:text-primary-color" onClick={() => setMenuOpen(false)}>Environmental Policy</Link>
            <Link href="/about/health-and-safety" className="block py-1 pl-2 text-sm hover:text-primary-color" onClick={() => setMenuOpen(false)}>Health & Safety Policy</Link>
            <Link href="/about/quality" className="block py-1 pl-2 text-sm hover:text-primary-color" onClick={() => setMenuOpen(false)}>Quality Policy</Link>
            <Link href="/about/faq" className="block py-1 pl-2 text-sm hover:text-primary-color" onClick={() => setMenuOpen(false)}>FAQ</Link>
          </div>

          {/* Services Links */}
          <div className="mt-4">
            <p className="uppercase text-sm font-semibold mb-2">Services</p>
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                href={`/serviceInfo/${service.slug}`}
                className="block py-1 pl-2 text-sm hover:text-primary-color cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {service.title}
              </Link>
            ))}
          </div>

          <Link
            href="/contact"
            className="flex items-center gap-2 bg-primary-color hover:bg-primary-color-hover text-white px-4 py-2 rounded-md text-sm w-max cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <Sparkles size={16} /> Get A Quote
          </Link>
        </div>
      )}
    </header>
  );
}
