"use client";

import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      className="w-full bg-white py-20 px-6 md:px-12 text-black"
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2 relative h-80 md:h-[400px]">
          <Image
            src="/images/securityImg3.webp"
            alt="CrossFront Security Team"
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold leading-tight">
            About{" "}
            <span className="text-primary-color">CrossFront Services</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            At CrossFront Services, we stand at the forefront of professional
            security. With years of experience and a commitment to excellence,
            we provide tailored protection solutions for businesses, events,
            properties, and individuals across{" "}
            <strong>[your region]</strong>. Our highly trained personnel,
            cutting-edge systems, and proactive approach make us the trusted
            partner for all your security needs.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            From manned guarding to K9 units, we deliver service with integrity,
            discipline, and vigilance—ensuring safety without compromise.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="/about"
              className="inline-block bg-primary-color hover:bg-primary-color-hover text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
            >
              Learn More About Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
