"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const DogUnitsPage = () => {
  return (
    <main className="bg-[#0D0D0D] text-white px-6 py-20 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional K9 Dog Units
          </h1>
          <p className="text-[#CCCCCC] max-w-2xl mx-auto text-lg">
            Our expertly trained security dog units offer unmatched protection, deterrence, and rapid response in high-risk environments.
          </p>
        </header>

        {/* Image */}
        <div className="relative w-full h-72 md:h-[400px] rounded-2xl overflow-hidden mb-12">
          <Image
            src="/images/k9Dog.jpg" // Replace with your actual image path
            alt="K9 Dog Unit"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <section className="space-y-8 text-[#EAEAEA]">
          <p>
            At <span className="text-[#EF443B] font-semibold">CrossFront Services</span>, our K9 Dog Units are a critical part of our elite protection services. Each unit is comprised of a highly trained dog and a licensed handler working in complete coordination to provide proactive security.
          </p>

          <p>
            K9 units are especially effective in large open spaces, industrial zones, events, and high-risk areas. They serve as a powerful visual deterrent and are trained in:
          </p>

          <ul className="list-disc list-inside pl-2 space-y-2">
            <li>Patrol and Intruder Detection</li>
            <li>Search and Locate Missions</li>
            <li>Explosive and Drug Detection</li>
            <li>Crowd Control and Area Security</li>
          </ul>

          <p>
            Our handlers follow strict operational protocols and undergo continuous training to meet UK security standards, ensuring both effectiveness and safety in every deployment.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-block bg-[#EF443B] hover:bg-[#C6362E] transition duration-300 px-6 py-3 rounded-lg text-white font-semibold"
          >
            Request K9 Security Services →
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DogUnitsPage;
