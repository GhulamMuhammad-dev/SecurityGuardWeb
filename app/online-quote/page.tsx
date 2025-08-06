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
    <div className="bg-gray-50 py-16 px-4 md:px-0">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/LogocrossService.png"
            width={80}
            height={80}
            alt="CrossFront Logo"
            className="rounded-lg"
          />
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" placeholder="Email" className="input" required />
            <input type="text" placeholder="First Name" className="input" required />
            <input type="text" placeholder="Last Name" className="input" required />
            <input type="text" placeholder="Position" className="input" />
            <input type="tel" placeholder="Phone Number" className="input" required />
            <input type="text" placeholder="Company Name" className="input" />
          </div>

          {/* Services Checkboxes */}
          <div>
            <h3 className="text-xl font-semibold text-primary-color mb-2">Services Required</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {services.map((service) => (
                <label key={service} className="flex items-center gap-2 text-sm cursor-pointer">
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

          {/* Days and Hours */}
          <div>
            <h3 className="text-xl font-semibold text-primary-color mb-2">Days & Hours</h3>
            <p className="text-gray-600 text-sm mb-4">
              Please select the days and enter the total number of hours required for each.
            </p>
            <div className="space-y-3">
              {daysOfWeek.map((day) => (
                <div key={day} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="accent-primary-color"
                    checked={selectedDays.includes(day)}
                    onChange={() => handleDayToggle(day)}
                  />
                  <label className="w-28">{day}</label>
                  <input
                    type="number"
                    min="0"
                    placeholder="Hours"
                    className="input w-32"
                    value={dailyHours[day] || ""}
                    onChange={(e) => setDailyHours({ ...dailyHours, [day]: e.target.value })}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Start Date */}
          <div>
            <h3 className="text-xl font-semibold text-primary-color mb-2">Preferred Start Date</h3>
            <input type="date" className="input" />
          </div>

          {/* Privacy Policy */}
          <div className="text-gray-600 text-sm">
            By submitting this form, you agree to our{" "}
            <a href="/privacy-policy" className="text-primary-color font-medium underline">
              Privacy Policy
            </a>
            .
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-primary-color hover:bg-primary-color-hover text-white py-3 rounded-lg font-semibold transition"
          >
            Submit Quotation Request
          </button>
        </form>
      </div>
    </div>
  );
}
