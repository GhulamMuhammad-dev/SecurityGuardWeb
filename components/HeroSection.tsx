"use client"
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import Image from "next/image";

const heroImages = [
  {
    src: "/images/securityImg1.webp",
    width: 1920,
    height: 1080
  },
  {
    src: "/images/securityImg2.webp",
    width: 1920,
    height: 1080
  },
  {
    src: "/images/securityImg3.webp",
    width: 1920,
    height: 1080
  },
  {
    src: "/images/securityImg4.webp",
    width: 1920,
    height: 1080
  }
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div 
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image 
              src={image.src} 
              alt="Security guard service" 
              className="w-full h-full object-cover"
              width={image.width}
              height={image.height}
              priority={index === 0} // Only preload first image
              quality={90}
            />
            <div className="absolute inset-0 bg-[#10002B] opacity-70"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center text-center py-24 px-6 text-[#E0AAFF]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Professional <span className="text-[#C77DFF]">Security Services</span> You Can Trust
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
          Trained. Reliable. On-Demand Security Guards for Commercial, Industrial, and Residential Sites.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button className="bg-[#C77DFF] hover:bg-[#9D4EDD] text-black px-8 py-6 text-lg">
            Get a Free Quote
          </Button>
          <Button 
            variant="outline" 
            className="border-2 border-[#C77DFF] text-[#C77DFF] hover:bg-[#240046] px-8 py-6 text-lg"
          >
            Speak to Our Team
          </Button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-[#C77DFF] w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}