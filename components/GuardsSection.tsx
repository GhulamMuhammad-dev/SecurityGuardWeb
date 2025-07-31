"use client";
import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const guards = [
  {
    name: "Alex Morgan",
    role: "Lead Security Officer",
    image: "/images/guard1.jpg",
    about:
      "With over a decade in high-stakes environments, Alex specializes in managing facility and event security, with a strong track record in emergency response and team leadership.",
    skills: ["Conflict Management", "Emergency Response", "SIA Licensed"],
    linkedin: "https://linkedin.com/in/alexmorgan",
    email: "alex@secureguard.com",
  },
  {
    name: "Rita Singh",
    role: "Surveillance Expert",
    image: "/images/guard2.jpg",
    about:
      "Rita brings sharp attention to detail with deep expertise in surveillance systems and behavioral analysis. She plays a key role in loss prevention and real-time threat assessment.",
    skills: ["CCTV Monitoring", "Risk Analysis", "Communication"],
    linkedin: "https://linkedin.com/in/ritasingh",
    email: "rita@secureguard.com",
  },
  {
    name: "Jamal Turner",
    role: "Mobile Patrol Supervisor",
    image: "/images/guard1.jpg",
    about:
      "Jamal oversees mobile units across large estates, ensuring full area coverage, fast response, and seamless coordination between field teams and base operations.",
    skills: ["Mobile Patrols", "Logistics", "Team Leadership"],
    linkedin: "https://linkedin.com/in/jamalturner",
    email: "jamal@secureguard.com",
  },
  {
    name: "Sophie Chen",
    role: "Event Security Lead",
    image: "/images/guard2.jpg",
    about:
      "Specialized in event security and crowd control, Sophie excels in managing VIP movements and maintaining a secure, enjoyable environment for attendees.",
    skills: ["Crowd Management", "VIP Protection", "First Aid"],
    linkedin: "https://linkedin.com/in/sophiechen",
    email: "sophie@secureguard.com",
  },
];

export default function GuardSection() {
  return (
    <section className="py-20 bg-[#f6f7f9]" id="securityteam">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Meet Our Security Experts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guards.map((guard, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={guard.image}
                alt={guard.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {guard.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{guard.role}</p>
                <p className="text-sm text-gray-700 mb-3">{guard.about}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {guard.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#EF443B] text-gray-100 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-2">
                  <a
                    href={guard.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${guard.email}`}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <FaEnvelope size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
