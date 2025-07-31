'use client'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ label, value }: { label: string; value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <motion.div
      className="flex flex-col items-center bg-[#1A1A1A] text-white rounded-2xl p-6 w-full md:w-60 shadow-md"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-4xl font-bold text-[#EF443B]">{count}+</span>
      <p className="text-[#F4F4F4] text-center mt-2">{label}</p>
    </motion.div>
  );
};

export default function StatsCounter() {
  const stats = [
    { label: 'Trained Professionals', value: 250 },
    { label: 'Satisfied Clients', value: 120 },
    { label: 'Security Assignments', value: 430 },
    { label: 'Industry Awards', value: 18 },
  ];

  return (
    <section className="py-20 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {stats.map((stat, i) => (
            <StatCard key={i} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
