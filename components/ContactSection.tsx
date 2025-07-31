import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <section className="py-28 px-6 bg-[#F9FAFB] text-[#1F2937] relative overflow-hidden" id="contact">
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#EF443B] font-semibold tracking-wider uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let&apos;s Secure What <span className="text-[#EF443B]">Matters Most</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-[#6B7280]">
            Our security experts are available 24/7 to discuss your unique protection needs.
          </p>
        </div>

        <form className="bg-white shadow-xl p-8 md:p-10 rounded-xl border border-[#E5E7EB] space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Smith"
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#D1D5DB] focus:border-[#EF443B] focus:ring-2 focus:ring-[#EF443B]/50 text-[#1F2937] placeholder-[#9CA3AF] transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="block text-sm font-medium">
                Company Name
              </label>
              <input
                id="company"
                type="text"
                placeholder="Acme Corporation"
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#D1D5DB] focus:border-[#EF443B] focus:ring-2 focus:ring-[#EF443B]/50 text-[#1F2937] placeholder-[#9CA3AF] transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#D1D5DB] focus:border-[#EF443B] focus:ring-2 focus:ring-[#EF443B]/50 text-[#1F2937] placeholder-[#9CA3AF] transition-all"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+44 7700 900123"
                className="w-full px-4 py-3 rounded-lg bg-white border border-[#D1D5DB] focus:border-[#EF443B] focus:ring-2 focus:ring-[#EF443B]/50 text-[#1F2937] placeholder-[#9CA3AF] transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm font-medium">
              Service Required *
            </label>
            <select
              id="service"
              className="w-full px-4 py-3 rounded-lg bg-white border border-[#D1D5DB] focus:border-[#EF443B] focus:ring-2 focus:ring-[#EF443B]/50 text-[#1F2937] placeholder-[#9CA3AF] appearance-none transition-all"
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
            <label htmlFor="message" className="block text-sm font-medium">
              Your Security Needs *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your security requirements..."
              className="w-full px-4 py-3 rounded-lg bg-white border border-[#D1D5DB] focus:border-[#EF443B] focus:ring-2 focus:ring-[#EF443B]/50 text-[#1F2937] placeholder-[#9CA3AF] transition-all"
              required
            ></textarea>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              className="w-full bg-[#EF443B] hover:bg-[#C6362E] text-white font-semibold py-6 text-lg transition-all transform hover:scale-[1.02]"
            >
              Request Security Consultation
            </Button>
          </div>

          <p className="text-center text-sm text-[#6B7280]">
            We&apos;ll respond to your inquiry within 2 business hours.
          </p>
        </form>
      </div>
    </section>
  );
}
