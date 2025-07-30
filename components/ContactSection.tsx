import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section className="py-28 px-6 bg-[#240046] text-[#E0AAFF] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-[#C77DFF] blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#9D4EDD] blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#C77DFF] font-semibold tracking-wider uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let&apos;s Secure What <span className="text-[#C77DFF]">Matters Most</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-[#E0AAFF]/80">
            Our security experts are available 24/7 to discuss your unique protection needs.
          </p>
        </div>

        <form className="bg-[#10002B]/80 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-[#3C096C] space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-[#E0AAFF]">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-lg bg-[#3C096C]/30 border border-[#3C096C] focus:border-[#C77DFF] focus:ring-2 focus:ring-[#C77DFF]/50 text-white placeholder-[#E0AAFF]/50 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium text-[#E0AAFF]">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Acme Corporation"
                className="w-full px-4 py-3 rounded-lg bg-[#3C096C]/30 border border-[#3C096C] focus:border-[#C77DFF] focus:ring-2 focus:ring-[#C77DFF]/50 text-white placeholder-[#E0AAFF]/50 transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-[#E0AAFF]">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-[#3C096C]/30 border border-[#3C096C] focus:border-[#C77DFF] focus:ring-2 focus:ring-[#C77DFF]/50 text-white placeholder-[#E0AAFF]/50 transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-[#E0AAFF]">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-lg bg-[#3C096C]/30 border border-[#3C096C] focus:border-[#C77DFF] focus:ring-2 focus:ring-[#C77DFF]/50 text-white placeholder-[#E0AAFF]/50 transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm font-medium text-[#E0AAFF]">
              Service Required *
            </label>
            <select
              id="service"
              className="w-full px-4 py-3 rounded-lg bg-[#3C096C]/30 border border-[#3C096C] focus:border-[#C77DFF] focus:ring-2 focus:ring-[#C77DFF]/50 text-white placeholder-[#E0AAFF]/50 appearance-none transition-all"
              required
            >
              <option value="">Select a service</option>
              <option value="static">Static Guarding</option>
              <option value="mobile">Mobile Patrols</option>
              <option value="construction">Construction Site Security</option>
              <option value="event">Event Security</option>
              <option value="other">Other Security Needs</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-[#E0AAFF]">
              Your Security Needs *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your security requirements..."
              className="w-full px-4 py-3 rounded-lg bg-[#3C096C]/30 border border-[#3C096C] focus:border-[#C77DFF] focus:ring-2 focus:ring-[#C77DFF]/50 text-white placeholder-[#E0AAFF]/50 transition-all"
              required
            ></textarea>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-[#C77DFF] hover:bg-[#9D4EDD] text-black font-semibold py-6 text-lg transition-all transform hover:scale-[1.02]"
            >
              Request a Free Security Consultation
            </Button>
          </div>

          <p className="text-center text-sm text-[#E0AAFF]/60">
            We&apos;ll respond to your inquiry within 2 business hours.
          </p>
        </form>
      </div>
    </section>
  );
}