'use client';

import React from 'react';
import { ShieldCheck, Dog } from 'lucide-react';
import ServicesCard from './ui/ServicesCard';

const ServicesSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12" id="services">
      <div className="text-center mb-12 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-primary-color">Our Security Services</h2>
        <p className="text-gray-500 mt-4 text-lg max-w-4xl">
          Tailored protection solutions designed to meet the unique needs of
          businesses, properties, and individuals—delivered with precision,
          integrity, and vigilance.
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-12">
        <ServicesCard
          title="SPECIALIST SECURITY SERVICES"
          description="Comprehensive protection tailored for corporate, residential, and event-based needs. Professionally trained personnel ensure safety with precision and vigilance."
          icon={<ShieldCheck size={24} className="text-white" />}
          imageUrl="/images/security1.jpg"
          link="/services"
        />

        <ServicesCard
          title="DOG UNIT SERVICES"
          description="Trained K9 teams offering superior deterrence and rapid response capabilities. Ideal for patrols, events, and high-risk environments."
          icon={<Dog size={24} className="text-white" />}
          imageUrl="/images/dogUnit.jpg"
          link="/serviceInfo/k9-dog-units"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
