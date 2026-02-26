"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function CTASection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the CAPTCHA");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, captchaToken }),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", phone: "", message: "" });
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
        setTimeout(() => setSuccess(false), 4000);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    // Reduced vertical padding (py-12) and max-width for a tighter look
    <section className="bg-white py-12 md:py-20 px-6 max-w-4xl mx-auto">
      
      {/* Heading - Tightened margins */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-light tracking-wide text-black uppercase">
          Begin Your Journey
        </h3>
        <p className="mt-2 text-black/60 italic text-sm md:text-base">
          Let us know what you are looking for.
        </p>
      </div>

      {/* Form - Changed to a 2-column grid for desktop to save vertical space */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="peer w-full border-b border-black/20 bg-transparent py-2 text-black text-sm placeholder-transparent focus:outline-none focus:border-black transition-all"
              placeholder="Full Name"
            />
            <label className="absolute left-0 -top-3.5 text-black/50 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="peer w-full border-b border-black/20 bg-transparent py-2 text-black text-sm placeholder-transparent focus:outline-none focus:border-black transition-all"
              placeholder="Email Address"
            />
            <label className="absolute left-0 -top-3.5 text-black/50 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black">
              Email Address
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="peer w-full border-b border-black/20 bg-transparent py-2 text-black text-sm placeholder-transparent focus:outline-none focus:border-black transition-all"
              placeholder="Phone Number"
            />
            <label className="absolute left-0 -top-3.5 text-black/50 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black">
              Phone Number
            </label>
          </div>

          {/* Message - Spans full width */}
          <div className="relative md:col-span-2">
            <input
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              className="peer w-full border-b border-black/20 bg-transparent py-2 text-black text-sm placeholder-transparent focus:outline-none focus:border-black transition-all"
              placeholder="Vision"
            />
            <label className="absolute left-0 -top-3.5 text-black/50 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-black">
              Tell us about your vision...
            </label>
          </div>
        </div>

        {/* CAPTCHA & Submit - Scaled down */}
        <div className="flex flex-col items-center space-y-4 pt-4">
          <div className="transform scale-90 origin-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(token) => setCaptchaToken(token)}
              ref={recaptchaRef}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            type="submit"
            disabled={loading}
            className="w-full max-w-xs bg-black text-white py-3 text-[11px] tracking-[0.2em] uppercase 
            border border-black hover:bg-transparent hover:text-black 
            transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </motion.button>

          {success && (
            <p className="text-green-600 text-[12px] italic">
              Inquiry sent successfully ✨
            </p>
          )}
        </div>
      </form>

      <p className="mt-12 text-black/30 text-[8px] tracking-[0.4em] uppercase text-center">
        Lavelle Venture © 2026
      </p>
    </section>
  );
}