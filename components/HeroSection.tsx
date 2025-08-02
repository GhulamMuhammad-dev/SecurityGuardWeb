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
      {/* Background image layers */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={img.src}
              alt="Security"
              fill
              className="object-cover w-full h-full"
              priority={index === 0}
              quality={90}
            />
            <div className="absolute inset-0 bg-[#EF443B] opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 py-24 text-white">
        <h2 className="text-white font-bold text-lg md:text-xl tracking-wide uppercase mb-3">
          24/7 Monitoring
        </h2>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6">
          <span className='text-black'>Reliable</span> <span className="text-white">Protection Services</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Button className="bg-black hover:bg-gray-900 text-white px-8 py-4 text-lg rounded">
            <Link href="#services">
               Services
            </Link>
          </Button>
           
           <Button className="bg-[#EF443B] hover:bg-[#C6362E] text-white px-8 py-4 text-lg rounded">
            <Link href="#contact">
                Contact
            </Link>
            </Button>
            
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImageIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === currentImageIndex ? 'bg-[#EF443B] w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
