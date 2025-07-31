'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="w-full bg-[#1A1A1A] py-20 px-6 md:px-12 text-[#F4F4F4] " id='about'>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <div className="w-full md:w-1/2 relative h-80 md:h-[400px]">
          <Image
            src="/images/securityImg3.webp" // Replace with actual image path
            alt="Security Team"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-white leading-tight">
            Who We Are
          </h2>
          <p className="text-[#F4F4F4] text-lg leading-relaxed">
            At <span className="text-[#EF443B] font-semibold">IntleafGuard</span>, we specialize in delivering advanced security solutions tailored to your needs. With a team of certified experts, cutting-edge technology, and round-the-clock service, we ensure your peace of mind—anytime, anywhere.
          </p>
          <ul className="list-disc list-inside text-[#F4F4F4] space-y-1 pl-2">
            <li>24/7 Surveillance and Response</li>
            <li>Certified Security Personnel</li>
            <li>Integrated Smart Security Systems</li>
            <li>Custom Security Strategy & Planning</li>
          </ul>

          {/* CTA */}
          <div className="pt-6">
            <a
              href="/contact"
              className="inline-block bg-[#EF443B] hover:bg-[#C6362E] text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
