export function GuardsSection() {
  return (
    <section className="py-28 px-6 bg-[#240046] text-[#E0AAFF] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-[#C77DFF] blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#9D4EDD] blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C77DFF] font-semibold tracking-wider uppercase text-sm">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Meet Our <span className="text-[#C77DFF]">Security Professionals</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-[#E0AAFF]/80">
            We take pride in hiring and training only the most qualified security personnel in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Guard qualifications */}
          <div className="bg-[#10002B]/80 p-8 rounded-xl border border-[#3C096C]">
            <h3 className="text-2xl font-bold mb-6 text-white">Our Guard Standards</h3>
            <ul className="space-y-4">
              {[
                "SIA Licensed & Background Checked",
                "Trained in Conflict Management & First Aid",
                "Equipped with Uniform & Communication Tools",
                "Polite, Punctual, and Professionally Presented",
                "Regularly Assessed for Performance",
                "Specialized Training for Various Environments"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircleIcon className="text-[#C77DFF] flex-shrink-0 mt-1" />
                  <span className="text-[#E0AAFF]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guard image placeholder */}
          <div className="bg-[#10002B]/50 rounded-xl border-2 border-[#3C096C] overflow-hidden relative min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <ShieldIcon className="w-20 h-20 mx-auto text-[#C77DFF] mb-6" />
                <h3 className="text-2xl font-bold mb-2">Professional Security Team</h3>
                <p className="text-[#E0AAFF]/80">Uniformed, trained, and ready to protect</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#10002B]/80 p-8 md:p-10 rounded-xl border border-[#3C096C] relative">
            <QuoteIcon className="absolute top-6 left-6 text-[#3C096C] w-8 h-8" />
            <p className="text-xl md:text-2xl italic mb-6 text-center relative z-10">
              &apos;The professionalism and dedication of Intleaf&apos;s security guards exceeded our expectations. 
              Their team became an integral part of our operations, providing both security and peace of mind.&apos;
            </p>
            <div className="text-center">
              <p className="font-bold text-[#C77DFF]">— Happy Client</p>
              <p className="text-sm text-[#E0AAFF]/60">Commercial Property Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Icon components
function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}