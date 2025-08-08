"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="bg-white text-black px-6 py-20 md:px-20">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            About <span className="text-primary-color">CrossFront Services</span>
          </h1>
          <p className="text-black max-w-3xl mx-auto text-lg">
            At CrossFront Services, we stand at the forefront of professional security. With decades of combined experience, we deliver exceptional security solutions tailored to protect people, properties, and assets across the UK.
          </p>
        </section>

        {/* Image & Description Section */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 h-80 relative rounded-xl overflow-hidden">
            <Image
              src="/images/securityImg3.webp"
              alt="CrossFront Security Team"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Who We Are</h2>
            <p className="text-black leading-relaxed">
              CrossFront Services is built on the pillars of integrity, discipline, and vigilance. We pride ourselves on our elite personnel, robust protocols, and proactive mindset. From private events to large-scale industrial sites, our trained professionals maintain a constant presence and rapid response capability, ensuring every client enjoys peace of mind.
            </p>
            <p className="text-black">
              With a deep understanding of risk, compliance, and modern threats, we blend technology with human expertise to offer unmatched protection in dynamic environments.
            </p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#1A1A1A] p-8 rounded-xl shadow">
            <h3 className="text-xl font-bold text-primary-color mb-4">Our Mission</h3>
            <p className="text-[#CCCCCC] leading-relaxed">
              To deliver uncompromising security services that ensure the safety and satisfaction of our clients, while setting a benchmark for professionalism and excellence in the industry.
            </p>
          </div>
          <div className="bg-[#1A1A1A] p-8 rounded-xl shadow">
            <h3 className="text-xl font-bold text-primary-color mb-4">Our Vision</h3>
            <p className="text-[#CCCCCC] leading-relaxed">
              To become the UK&apos;s most trusted and respected private security firm recognized for our people, and our impact.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Why Choose CrossFront Services?</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left text-black text-base">
            <li className="border-primary-color border-2 p-6 rounded-xl">✅ SIA-Licensed Professionals</li>
            <li className="border-primary-color border-2 p-6 rounded-xl">✅ 24/7 Operations & Rapid Response</li>
            <li className="border-primary-color border-2 p-6 rounded-xl">✅ Nationwide Coverage Across the UK</li>
            <li className="border-primary-color border-2 p-6 rounded-xl">✅ K9 Dog Units & Mobile Patrols</li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-20">
          <Link
            href="/contact"
            className="inline-block bg-primary-color hover:bg-primary-color-hover transition duration-300 px-8 py-4 rounded-lg text-white font-semibold text-lg"
          >
            Get in Touch →
          </Link>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
