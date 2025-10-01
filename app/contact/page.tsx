"use client";

import { Button } from "@/components/ui/button";

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = {
      name: (form.querySelector("#name") as HTMLInputElement).value,
      email: (form.querySelector("#email") as HTMLInputElement).value,
      phone: (form.querySelector("#phone") as HTMLInputElement).value,
      service: (form.querySelector("#service") as HTMLSelectElement).value,
      message: (form.querySelector("#message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    alert(result.message);
    form.reset();
  };

  return (
    <section className="py-28 px-6 bg-[#F9FAFB] text-[#1F2937]" id="contact">
      <div className="max-w-4xl mx-auto">
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

        <form onSubmit={handleSubmit} className="bg-white shadow-xl p-8 md:p-10 rounded-xl space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input id="name" type="text" placeholder="Full Name *" required className="input" />
            <input id="company" type="text" placeholder="Company Name" className="input" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input id="email" type="email" placeholder="Email *" required className="input" />
            <input id="phone" type="tel" placeholder="Phone *" required className="input" />
          </div>
          <select id="service" required className="input">
            <option value="">Select a service</option>
            <option value="manned">Manned Guarding</option>
            <option value="mobile">Mobile Patrols</option>
            <option value="event">Event Security</option>
            <option value="k9">K9 Dog Units</option>
            <option value="keyholding">Key Holding Service</option>
            <option value="construction">Construction Site Security</option>
          </select>
          <textarea id="message" rows={4} placeholder="Your Security Needs *" required className="input"></textarea>
          <Button type="submit" className="w-full bg-primary-color text-white py-6 text-lg">
            Request Security Consultation
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
