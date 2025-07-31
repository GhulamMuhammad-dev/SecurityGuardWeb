'use client';

import React from 'react';
import Image from 'next/image';

const cities = [
  {
    name: 'London',
    desc: 'Security teams available 24/7 across Greater London.',
    image: '/images/london.jpg',
  },
  {
    name: 'Manchester',
    desc: 'Trusted protection services throughout Greater Manchester.',
    image: '/images/manchester.jpg',
  },
  {
    name: 'Birmingham',
    desc: 'Professional guards and patrol units citywide.',
    image: '/images/birmingham.jpg',
  },
  {
    name: 'Liverpool',
    desc: 'Rapid response and event security across Merseyside.',
    image: '/images/liverpool.jpg',
  },
  {
    name: 'Glasgow',
    desc: 'Available across central Scotland for all security needs.',
    image: '/images/glasgow.jpg',
  },
  {
    name: 'Bristol',
    desc: 'Expert security teams protecting the South West.',
    image: '/images/bristol.jpg',
  },
];

const ServiceCoverage = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Nationwide Service Coverage</h2>
        <p className="text-gray-600 mt-4 text-lg">
          We proudly operate across the entire United Kingdom, offering tailored protection wherever you need it.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <div
            key={city.name}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48 w-full">
              <Image
                src={city.image}
                alt={city.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{city.name}</h3>
              <p className="text-gray-600 mt-2">{city.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <div className="inline-block bg-black text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg">
          Available Across the UK 🇬🇧
        </div>
      </div>
    </section>
  );
};

export default ServiceCoverage;
