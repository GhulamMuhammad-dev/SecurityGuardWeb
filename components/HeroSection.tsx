'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const heroImages = [
  { src: '/images/securityImg1.webp', width: 1920, height: 1080 },
  { src: '/images/securityImg2.webp', width: 1920, height: 1080 },
  { src: '/images/securityImg3.webp', width: 1920, height: 1080 },
  { src: '/images/securityImg4.webp', width: 1920, height: 1080 },
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={img.src}
              alt="Security"
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
              quality={90}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mb-6">
          Security Beyond the Front Line.
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl text-white/90 mb-8">
          Trusted Protection for People, Property & Peace of Mind.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/online-quote">
            <Button
              className="bg-primary-color hover:bg-primary-color-hover text-white px-6 py-3 text-base md:text-lg rounded"
            >
              Get a Free Quote
            </Button>
          </Link>
          <Link href="#contact">
            <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base md:text-lg rounded">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImageIndex(i)}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === currentImageIndex
                ? 'bg-primary-color w-6'
                : 'bg-blue-500 w-3'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
