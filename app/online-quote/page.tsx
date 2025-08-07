"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  "Manned Guarding",
  "Mobile Patrols",
  "K9 Dog Units",
  "Event Security",
  "Construction Site Security",
  "Key Holding",
];

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function QuotationForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [dailyHours, setDailyHours] = useState<{ [key: string]: string }>({});
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleDayToggle = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-xl rounded-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/crossfrontLogo.jpg"
            alt="CrossFront Logo"
            width={80}
            height={80}
            className="rounded"
          />
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center mb-2">Online Quotation</h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          For CrossFront to provide a precise quotation or a complex requirement to fit your business needs,
          please answer the questions below.
        </p>

        {/* Form */}
        <form className="space-y-5">
          <input type="email" placeholder="Email *" className="input w-full" required />
          <input type="text" placeholder="First Name *" className="input w-full" required />
          <input type="text" placeholder="Last Name *" className="input w-full" required />
          <input type="text" placeholder="Position" className="input w-full" />
          <input type="tel" placeholder="Phone Number *" className="input w-full" required />
          <input type="text" placeholder="Company Name" className="input w-full" />

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-2">Services Required</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((service) => (
                <label key={service} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="accent-primary-color"
                    checked={selectedServices.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>

          {/* Days & Hours */}
          <div>
            <h3 className="font-semibold mb-2">Days Required & Hours</h3>
            <div className="space-y-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="accent-primary-color"
                    checked={selectedDays.includes(day)}
                    onChange={() => handleDayToggle(day)}
                  />
                  <label className="w-24">{day}</label>
                  <input
                    type="number"
                    min="0"
                    placeholder={`Hours on ${day}`}
                    className="input w-40"
                    value={dailyHours[day] || ""}
                    onChange={(e) => setDailyHours({ ...dailyHours, [day]: e.target.value })}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Start Date */}
          <div>
            <h3 className="font-semibold mb-2">Start Date</h3>
            <div className="flex gap-3">
              <select className="input w-24" defaultValue="">
                <option value="" disabled>DD</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i + 1}>{i + 1}</option>
                ))}
              </select>
              <select className="input w-32" defaultValue="">
                <option value="" disabled>MM</option>
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
                  "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                  <option key={i + 1} value={i + 1}>
                    {month}
                  </option>
                ))}
              </select>
              <select className="input w-28" defaultValue="">
                <option value="" disabled>YYYY</option>
                {[...Array(10)].map((_, i) => {
                  const year = new Date().getFullYear() + i;
                  return <option key={year}>{year}</option>;
                })}
              </select>
            </div>
          </div>

          {/* Privacy Note */}
          <p className="text-xs text-gray-500 mt-4">
            CrossFront Services needs the contact information you provide to contact you about our products and services. You may unsubscribe from these communications at any time. For more information, see our{" "}
            <a href="/privacy-policy" className="text-primary-color underline font-medium">
              Privacy Policy
            </a>.
          </p>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary-color hover:bg-primary-color-hover text-white py-3 rounded font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
