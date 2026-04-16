"use client";

import { useState } from "react";

export default function Reservations() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservations" className="py-32 bg-charcoal-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Info */}
          <div className="reveal-left">
            <p className="section-label mb-4">Reservations</p>
            <div className="w-16 h-px bg-gold-500 mb-6" />
            <h2 className="font-display text-5xl md:text-6xl font-light text-cream leading-tight mb-6">
              Reserve Your{" "}
              <em className="text-gold-400 font-semibold">Evening</em>
            </h2>
            <p className="font-body text-charcoal-300 leading-relaxed mb-10">
              We offer sittings Wednesday through Sunday. Lunch is served
              Friday to Sunday from 12pm. Dinner sittings begin at 6:30pm and
              9:00pm.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: "📍",
                  label: "Address",
                  value: "14 Rue de la Paix, New York, NY 10001"
                },
                {
                  icon: "📞",
                  label: "Telephone",
                  value: "+1 (555) 123-4567"
                },
                {
                  icon: "✉️",
                  label: "Email",
                  value: "reservations@maisonlaurent.com"
                },
                {
                  icon: "🕰",
                  label: "Hours",
                  value: "Wed–Sun: Lunch 12–2:30pm · Dinner 6:30pm & 9pm"
                }
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-gold-500 mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-charcoal-200 text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-gold-500 pl-6">
              <p className="font-body text-charcoal-400 text-sm leading-relaxed italic">
                For parties of 8 or more, private dining enquiries, or special
                events, please contact our events team directly.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            {submitted ? (
              <div className="border border-gold-500/40 bg-gold-500/5 p-12 text-center">
                <div className="font-display text-5xl text-gold-400 mb-4">✓</div>
                <h3 className="font-display text-3xl text-cream mb-3">
                  Reservation Requested
                </h3>
                <p className="font-body text-charcoal-300 text-sm leading-relaxed">
                  Thank you, {form.name}. We&apos;ll confirm your reservation at{" "}
                  {form.email} within 2 hours. We look forward to welcoming you.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Full Name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) ..."
                  />
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-charcoal-400 mb-2">
                      Guests
                    </label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-charcoal-900 border border-white/10 focus:border-gold-500 text-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-300"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Guest" : "Guests"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Preferred Date"
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-charcoal-400 mb-2">
                      Sitting
                    </label>
                    <select
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full bg-charcoal-900 border border-white/10 focus:border-gold-500 text-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-300"
                    >
                      <option value="">Select time</option>
                      <option>Lunch — 12:00 PM</option>
                      <option>Lunch — 1:30 PM</option>
                      <option>Dinner — 6:30 PM</option>
                      <option>Dinner — 9:00 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-charcoal-400 mb-2">
                    Occasion (Optional)
                  </label>
                  <select
                    name="occasion"
                    value={form.occasion}
                    onChange={handleChange}
                    className="w-full bg-charcoal-900 border border-white/10 focus:border-gold-500 text-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-300"
                  >
                    <option value="">Select occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Business Dinner</option>
                    <option>Proposal</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-charcoal-400 mb-2">
                    Special Requests
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Dietary requirements, allergies, special requests..."
                    className="w-full bg-charcoal-900 border border-white/10 focus:border-gold-500 text-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-300 resize-none placeholder:text-charcoal-600"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center py-4">
                  Request Reservation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

function InputField({ label, name, type, value, onChange, required, placeholder }: InputFieldProps) {
  return (
    <div>
      <label className="block font-body text-xs tracking-widest uppercase text-charcoal-400 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-charcoal-900 border border-white/10 focus:border-gold-500 text-cream font-body text-sm px-4 py-3 outline-none transition-colors duration-300 placeholder:text-charcoal-600"
      />
    </div>
  );
}
