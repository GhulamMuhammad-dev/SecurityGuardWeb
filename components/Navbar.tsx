"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";

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

  return (
    <motion.header
      className="w-full sticky top-0 z-50 bg-white shadow"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <nav className="px-4 lg:px-16 py-4 flex justify-between items-center relative z-20 text-black">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-4">
          <Link href="/" className="text-2xl font-bold flex gap-4 items-center">
            <Image
              width={60}
              height={60}
              src="/images/crossfrontLogo.jpg"
              alt="CrossFront logo"
              className="object-cover rounded-2xl"
            />
            <h3 className="text-xl font-bold leading-5">
              <span className="text-primary-color">CrossFront</span>
              <br />
              Services
            </h3>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 text-md items-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/" className="hover:text-primary-color">Home</Link>
          </motion.div>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <motion.button className="flex items-center gap-1 hover:text-primary-color">
              About <ChevronDown size={16} />
            </motion.button>
            <AnimatePresence>
              {aboutDropdownOpen && (
                <motion.div
                  className="absolute left-0 bg-white text-black shadow-lg rounded-md mt-2 w-60 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">Mission Statement</Link>
                  <Link href="/about/environment" className="block px-4 py-2 hover:bg-gray-100">Environmental Policy</Link>
                  <Link href="/about/health-and-safety" className="block px-4 py-2 hover:bg-gray-100">Health & Safety Policy</Link>
                  <Link href="/about/quality" className="block px-4 py-2 hover:bg-gray-100">Quality Policy</Link>
                  <Link href="/about/faq" className="block px-4 py-2 hover:bg-gray-100">FAQ</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <motion.button className="flex items-center gap-1 hover:text-primary-color">
              Services <ChevronDown size={16} />
            </motion.button>
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  className="absolute left-0 bg-white text-black shadow-lg rounded-md mt-2 w-64 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {servicesData.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/serviceInfo/${service.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="#coverage" className="hover:text-primary-color">Coverage</Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/online-quote" className="hover:text-primary-color">Online Quote</Link>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div className="hidden md:flex" whileHover={{ scale: 1.05 }}>
          <Link
            href="/online-quote"
            className="flex items-center gap-2 bg-primary-color hover:bg-primary-color-hover text-white px-4 py-2 rounded-md text-sm"
          >
            <Sparkles size={16} /> Get A Quote
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Link href="/" onClick={() => setMenuOpen(false)} className="block">Home</Link>

            {/* About */}
            <details className="border-t border-gray-200 pt-2">
              <summary className="cursor-pointer">About</summary>
              <div className="pl-4 pt-2 space-y-2">
                <Link href="/about" onClick={() => setMenuOpen(false)}>Mission Statement</Link>
                <Link href="/about/environment" onClick={() => setMenuOpen(false)}>Environmental Policy</Link>
                <Link href="/about/health-and-safety" onClick={() => setMenuOpen(false)}>Health & Safety Policy</Link>
                <Link href="/about/quality" onClick={() => setMenuOpen(false)}>Quality Policy</Link>
                <Link href="/about/faq" onClick={() => setMenuOpen(false)}>FAQ</Link>
              </div>
            </details>

            {/* Services */}
            <details className="border-t border-gray-200 pt-2">
              <summary className="cursor-pointer">Services</summary>
              <div className="pl-4 pt-2 space-y-2">
                {servicesData.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/serviceInfo/${service.slug}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </details>

            <Link href="#coverage" onClick={() => setMenuOpen(false)}>Coverage</Link>
            <Link href="/online-quote" onClick={() => setMenuOpen(false)}>Online Quote</Link>

            <Link
              href="/online-quote"
              onClick={() => setMenuOpen(false)}
              className="block bg-primary-color text-white text-center px-4 py-2 rounded-md"
            >
              Get A Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
