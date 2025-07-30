const services = [
  {
    title: "Static Guarding",
    desc: "Permanent or short-term guarding solutions for premises, facilities, or businesses.",
    icon: "🛡️"
  },
  {
    title: "Mobile Patrols",
    desc: "Visible deterrence through randomized patrols — ideal for large areas or low-risk sites.",
    icon: "🚔"
  },
  {
    title: "Construction Site Security",
    desc: "Safeguard materials and machinery with guards trained for high-risk environments.",
    icon: "🏗️"
  },
  {
    title: "Retail Security",
    desc: "Prevent theft, monitor CCTV, and enhance safety in retail environments.",
    icon: "🛒"
  },
  {
    title: "Event Security",
    desc: "Professional security for concerts, exhibitions, private events, and corporate functions.",
    icon: "🎪"
  },
  {
    title: "Key Holding & Alarm Response",
    desc: "Rapid response to alarms, ensuring your property is secure 24/7.",
    icon: "🔑"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-[#10002B] text-[#E0AAFF] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#C77DFF] blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#9D4EDD] blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C77DFF] font-semibold tracking-wider uppercase text-sm">
            Our Specializations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Comprehensive <span className="text-[#C77DFF]">Security Solutions</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-[#E0AAFF]/80">
            Tailored security services designed to meet your specific needs and provide complete peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i} 
              className="bg-[#240046]/80 hover:bg-[#240046] border border-[#3C096C] hover:border-[#C77DFF] p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex flex-col h-full">
                <div className="text-4xl mb-6 group-hover:text-[#C77DFF] transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#C77DFF] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#E0AAFF]/80 mb-6 flex-grow">
                  {service.desc}
                </p>
                <div className="mt-auto">
                  <button className="text-[#C77DFF] font-medium flex items-center gap-2 group-hover:underline">
                    Learn more
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-[#C77DFF] hover:bg-[#9D4EDD] text-black font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}

// Arrow icon component
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}