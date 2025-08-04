"use client";

import Image from "next/image";
import React from "react";

const certifications = [
  {
    name: "SIA Approved Contractor",
    imgSrc: "/images/logo1.png",
    alt: "SIA Approved Contractor Logo",
  },
  {
    name: "ISO 9001 Certified",
    imgSrc: "/images/logo2.png",
    alt: "ISO 9001 Certification Logo",
  },
  {
    name: "SafeContractor Approved",
    imgSrc: "/images/logo3.png",
    alt: "SafeContractor Certification Logo",
  },
  {
    name: "CHAS Accredited",
    imgSrc: "/images/logo4.png",
    alt: "CHAS Accreditation Logo",
  },
];

const CertificationsSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12" id="certifications">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
         Security Certifications
        </h2>
        <p className="text-[#555555] text-lg mb-12 max-w-2xl mx-auto">
          CrossFront Services is proud to hold some of the most respected certifications in the UK security industry. Our commitment to excellence ensures that we meet and exceed national standards for quality, safety, and professionalism.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center">
          {certifications.map((cert, index) => (
            <div key={index} className="relative w-32 h-20 mx-auto">
              <Image
                src={cert.imgSrc}
                alt={cert.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
