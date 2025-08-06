'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type CardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
  link: string;
};

const ServicesCard = ({ title, description, icon, imageUrl, link }: CardProps) => {
  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-lg max-w-sm w-full group border border-neutral-800 hover:border-primary-color transition duration-300 h-[420px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover brightness-[0.5] group-hover:brightness-[0.8] transition duration-300 cursor-pointer"
          priority={false}
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full bg-gradient-to-t from-black/60 via-black/30 to-transparent">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary-color p-3 rounded-full">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        <p className="text-sm text-neutral-300 mb-6">{description}</p>

        <Link
          href={link}
          className="inline-block bg-primary-color hover:bg-primary-color-hover text-white px-5 py-2 rounded-md text-sm font-medium transition duration-300 w-fit"
        >
          Click Here →
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
