'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Manned Guarding",
    description: "Trained and licensed personnel ensuring safety at all times for businesses, events, and private premises.",
    image: "/images/securityImg1.webp",
  },
  {
    title: "Mobile Patrols",
    description: "Visible deterrents with mobile units providing surveillance and rapid response across multiple sites.",
    image: "/images/securityImg4.webp",
  },
  {
    title: "Event Security",
    description: "Crowd control, access monitoring, and risk management for events of all sizes.",
    image: "/images/securityImg3.webp",
  },
  {
    title: "K9 Dog Units",
    description: "Professional dog units trained in detection, deterrence, and tactical response.",
    image: "/images/k9Dog.jpg",
  },
  {
    title: "Key Holding",
    description: "Secure key management and rapid dispatch when alarms are triggered—ensuring peace of mind around the clock.",
    image: "/images/securityImg2.webp",
  },
  {
    title: "Construction Site Security",
    description: "Prevent theft, vandalism, and unauthorized access with specialized construction site protection.",
    image: "/images/security1.jpg",
  },
];

const ServicesPage = () => {
  return (
    <main className="bg-white text-black px-6 py-20 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Specialist Security Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Comprehensive protection delivered by trained professionals using modern surveillance, planning, and on-ground execution.
          </p>
        </header>

        {/* Services Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-primary-color rounded-xl overflow-hidden shadow-lg group transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold group-hover:text-primary-color transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <div className="mt-20 text-center">
          <Link
            href="/online-quote"
            className="inline-block bg-primary-color hover:bg-primary-color-hover transition duration-300 px-6 py-3 rounded-lg text-white font-semibold"
          >
            Contact Us for a Custom Quote →
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
