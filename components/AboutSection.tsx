export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-[#240046] text-[#E0AAFF]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C77DFF] font-semibold tracking-wider">ABOUT OUR COMPANY</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Your Safety Is Our <span className="text-[#C77DFF]">Top Priority</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            At Intleaf Security, we don&apos;t just provide manned guarding — we deliver comprehensive 
            security solutions and peace of mind through professionalism and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#10002B]/50 p-8 rounded-xl border border-[#3C096C] hover:border-[#C77DFF] transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-[#3C096C] p-3 rounded-full">
                <ShieldCheckIcon className="text-[#C77DFF] w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Fully Vetted Professionals</h3>
                <p className="text-[#E0AAFF]">
                  Every guard undergoes rigorous background checks and continuous training to meet our high standards.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#10002B]/50 p-8 rounded-xl border border-[#3C096C] hover:border-[#C77DFF] transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-[#3C096C] p-3 rounded-full">
                <ClockIcon className="text-[#C77DFF] w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rapid Response Deployment</h3>
                <p className="text-[#E0AAFF]">
                  Our teams are strategically located for quick mobilization whenever you need immediate security support.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#10002B]/50 p-8 rounded-xl border border-[#3C096C] hover:border-[#C77DFF] transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-[#3C096C] p-3 rounded-full">
                <FileTextIcon className="text-[#C77DFF] w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tailored Security Plans</h3>
                <p className="text-[#E0AAFF]">
                  We create customized security strategies that address your unique risks and operational requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#10002B]/50 p-8 rounded-xl border border-[#3C096C] hover:border-[#C77DFF] transition-all">
            <div className="flex items-start gap-4">
              <div className="bg-[#3C096C] p-3 rounded-full">
                <AwardIcon className="text-[#C77DFF] w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Proven Excellence</h3>
                <p className="text-[#E0AAFF]">
                  With years of industry experience, we maintain an impeccable record of client satisfaction and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Example icons (replace with your actual icon components)
function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <line x1="10" y1="9" x2="8" y2="9"></line>
    </svg>
  );
}

function AwardIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6"></circle>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
    </svg>
  );
}