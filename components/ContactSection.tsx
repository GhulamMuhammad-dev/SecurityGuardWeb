'use client';

import { useState } from "react";
import { Button } from "./ui/button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "",
    message: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Email sent successfully!");
        setFormData({
          name: "",
          company: "",
          service: "",
          message: "",
          email: "",
          phone: "",
        });
      } else {
        setStatus("❌ Failed to send email.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="py-28 px-6 bg-[#F9FAFB] text-[#1F2937] relative overflow-hidden"
      id="contact"
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary-color font-semibold tracking-wider uppercase text-sm">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let&apos;s Secure What <span className="text-primary-color">Matters Most</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-[#6B7280]">
            Our security experts are available 24/7 to discuss your unique protection needs.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl p-8 md:p-10 rounded-xl border border-[#E5E7EB] space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] focus:border-primary-color focus:ring-2 focus:ring-[color:var(--primary-color)/0.5]"
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
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] focus:border-primary-color focus:ring-2 focus:ring-[color:var(--primary-color)/0.5]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone *
              </label>
              <input
                id="phone"
                type="text"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="service" className="block text-sm font-medium">
              Service Required *
            </label>
            <select
              id="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB]"
            >
              <option value="">Select a service</option>
              <option value="Manned Guarding">Manned Guarding</option>
              <option value="Mobile Patrols">Mobile Patrols</option>
              <option value="Construction Site Security">Construction Site Security</option>
              <option value="K9 Dog Units">K9 Dog Units</option>
              <option value="Key Holding Service">Key Holding Service</option>
              <option value="Event Security">Event Security</option>
              <option value="Other">Other Security Needs</option>
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
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB]"
            ></textarea>
          </div>

          <div className="pt-4">
            <Button
              type="submit"
              disabled={loading}
              className="cursor-pointer w-full bg-primary-color hover:bg-primary-color-hover text-white font-semibold py-6 text-lg transition-all transform hover:scale-[1.02]"
            >
              {loading ? "Sending..." : "Request Security Consultation"}
            </Button>
          </div>

          {status && (
            <p className="text-center text-sm mt-4 text-[#6B7280]">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
