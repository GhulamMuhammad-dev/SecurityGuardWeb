'use client';

import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Static Guarding',
    desc: [
      'On-site security personnel for continuous protection',
      'Ideal for offices, industrial units, and gated communities',
      'Guards trained in access control and emergency response',
      'Enhances safety through physical presence and surveillance'
    ],
     image: '/images/securityImg4.webp',
    icon: '🛡️'
  },
  {
    title: 'Mobile Patrols',
    desc: [
      'Scheduled and random security patrols',
      'Covers large or low-risk areas cost-effectively',
      'Detailed incident reporting and site checks',
      'Visible deterrent against unauthorized activity'
    ],
     image: '/images/securityImg4.webp',
    icon: '🚔'
  },
  {
    title: 'Construction Site Security',
    desc: [
      'Protect high-value equipment and materials',
      'Specialized guards for high-risk construction zones',
      '24/7 monitoring, access control, and surveillance',
      'Helps reduce liability and project delays due to theft'
    ],
     image: '/images/securityImg4.webp',
    icon: '🏗️'
  },
  {
    title: 'Retail Security',
    desc: [
      'In-store guards to deter theft and manage customer behavior',
      'Real-time CCTV monitoring and incident response',
      'Stock loss prevention through surveillance and analysis',
      'Creates a safe shopping experience for customers and staff'
    ],
    image: '/images/securityImg4.webp',
    icon: '🛒'
  },
  {
    title: 'Event Security',
    desc: [
      'Professional crowd control and guest screening',
      'VIP protection and backstage area monitoring',
      'Emergency preparedness and rapid response',
      'Tailored solutions for events of all sizes'
    ],
    image: '/images/securityImg4.webp',
    icon: '🎪'
  },
  {
    title: 'Key Holding & Alarm Response',
    desc: [
      'Secure key holding with 24/7 rapid alarm response',
      'Immediate dispatch to investigate triggered alarms',
      'Minimizes risk while reducing your personal liability',
      'Detailed post-incident reports and follow-ups'
    ],
    image: '/images/securityImg4.webp',
    icon: '🔑'
  }
];


export default function ServicesSection() {
  return (
    <section className="bg-[#F9FAFB] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A]">
            OUR SECURITY SERVICES
          </h2>
          <p className="text-[#6B7280] mt-4 text-lg">
            Tailored security solutions designed to meet your specific protection needs with maximum efficiency and discretion.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-52 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 w-full bg-[#1A1A1A] text-white px-4 py-3 flex items-center gap-2">
                  <span className="text-[#EF443B] text-xl">{service.icon}</span>
                  <h3 className="text-lg font-semibold uppercase tracking-wide">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-6 flex flex-col flex-grow">
                <ul className="text-[#1A1A1A] space-y-2 mb-6 flex-grow">
                  {service.desc.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-[#EF443B] mt-1">✔</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/services"
                  className="mt-auto inline-block bg-[#EF443B] hover:bg-[#C6362E] text-white font-medium text-sm px-5 py-2 rounded-md transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
