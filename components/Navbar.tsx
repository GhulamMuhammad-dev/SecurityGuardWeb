"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
} from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

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
    { href: "#coverage", label: "Coverage" },
    { href: "/online-quote", label: "Online Quote" },
  ];

  return (
    <motion.header
      className="w-full sticky top-0 z-50 bg-white shadow"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="px-4 lg:px-16 py-4 flex justify-between items-center relative z-20 text-black">
        
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4"
        >
          <Link href="/" className="text-2xl font-bold flex gap-4 items-center">
            <Image
              width={60}
              height={60}
              src="/images/crossfrontLogo.jpg"
              alt="CrossFront logo"
              className="object-cover rounded-2xl"
            />
             <h3 className="text-xl font-bold leading-5">
            <span className="text-primary-color">CrossFront</span><br />
            Services
          </h3>
          </Link>
         
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-md items-center">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link.href}
                className="hover:text-primary-color transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {/* About Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <motion.button
              className="flex items-center gap-1 hover:text-primary-color cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About <ChevronDown size={16} />
            </motion.button>
            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div
                  className="absolute top-4 left-0 bg-white text-black shadow-lg rounded-md mt-2 w-60 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Mission Statement</Link>
                  <Link href="/about/environment" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Environmental Policy</Link>
                  <Link href="/about/health-and-safety" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Health & Safety Policy</Link>
                  <Link href="/about/quality" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Quality Policy</Link>
                  <Link href="/about/faq" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">FAQ</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <motion.button
              className="flex items-center gap-1 hover:text-primary-color cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Services <ChevronDown size={16} />
            </motion.button>
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  className="absolute top-4 left-0 bg-white text-black shadow-lg rounded-md mt-2 w-64 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/serviceInfo/${service.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="hidden md:flex"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/online-quote"
            className="flex items-center gap-2 bg-primary-color hover:bg-primary-color-hover text-white px-4 py-2 rounded-md text-sm cursor-pointer"
          >
            <Sparkles size={16} /> Get A Quote
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-black cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="bg-black text-white flex flex-col px-6 py-4 space-y-4 md:hidden z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
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
            <div className="mt-4">
              <p className="uppercase text-sm font-semibold mb-2">About</p>
              <Link href="/about" className="block py-1 pl-2 hover:text-primary-color" onClick={() => setMenuOpen(false)}>Mission Statement</Link>
              <Link href="/about/environment" className="block py-1 pl-2 hover:text-primary-color" onClick={() => setMenuOpen(false)}>Environmental Policy</Link>
              <Link href="/about/health-and-safety" className="block py-1 pl-2 hover:text-primary-color" onClick={() => setMenuOpen(false)}>Health & Safety Policy</Link>
              <Link href="/about/quality" className="block py-1 pl-2 hover:text-primary-color" onClick={() => setMenuOpen(false)}>Quality Policy</Link>
              <Link href="/about/faq" className="block py-1 pl-2 hover:text-primary-color" onClick={() => setMenuOpen(false)}>FAQ</Link>
            </div>
            <div className="mt-4">
              <p className="uppercase text-sm font-semibold mb-2">Services</p>
              {servicesData.map((service) => (
                <Link
                  key={service.slug}
                  href={`/serviceInfo/${service.slug}`}
                  className="block py-1 pl-2 hover:text-primary-color cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <Link
              href="/online-quote"
              className="flex items-center gap-2 bg-primary-color hover:bg-primary-color-hover text-white px-4 py-2 rounded-md text-sm w-max cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <Sparkles size={16} /> Get A Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
