"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
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
    <main className="min-h-screen bg-white pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LEFT COLUMN: BRANDING & INFO */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between py-4"
        >
          <div>
            <h1 className="text-2xl md:text-2xl font-light tracking-tighter text-black uppercase leading-tight">
              Begin Your <br /> 
              <span className="italic">Signature</span> Journey
            </h1>
            <p className="mt-8 text-black/60 max-w-md text-lg font-light leading-relaxed">
              Whether you are looking to invest or build your dream residence, 
              our team is ready to curate your vision into reality.
            </p>
          </div>

          <div className="mt-20 space-y-12">
            {/* EMAIL SECTION - DARK & BOLD */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B38728] font-bold mb-2">Inquiries</p>
              <a 
                href="mailto:support@Lavelleventure.com" 
                className="text-2xl md:text-xl font-bold text-black hover:text-[#B38728] transition-colors duration-300 break-words"
              >
                support@Lavelleventure.com
              </a>
            </div>

            {/* PHONE SECTION */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#B38728] font-bold mb-2">Connect</p>
              <p className="text-xl font-bold text-black transition-colors">
                +91 91875 69958
              </p>
            </div>

            {/* OFFICE SECTION */}
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-2">Office</p>
              <p className="text-lg font-medium text-black leading-snug">
                Above Canara Bank 1,<br />
                1st Main 1st Cross, Atmananda Colony,<br />
                Sultanpalya, Bengaluru, Karnataka 560032.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: THE FORM */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-neutral-50 p-8 md:p-12 rounded-[30px] border border-neutral-100 shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-8">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="peer w-full border-b border-black/10 bg-transparent py-3 text-black text-sm placeholder-transparent focus:outline-none focus:border-[#B38728] transition-all"
                  placeholder="Full Name"
                />
                <label className="absolute left-0 -top-3.5 text-black/40 text-[10px] tracking-widest uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-[#B38728]">
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
                  className="peer w-full border-b border-black/10 bg-transparent py-3 text-black text-sm placeholder-transparent focus:outline-none focus:border-[#B38728] transition-all"
                  placeholder="Email"
                />
                <label className="absolute left-0 -top-3.5 text-black/40 text-[10px] tracking-widest uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-[#B38728]">
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
                  className="peer w-full border-b border-black/10 bg-transparent py-3 text-black text-sm placeholder-transparent focus:outline-none focus:border-[#B38728] transition-all"
                  placeholder="Phone"
                />
                <label className="absolute left-0 -top-3.5 text-black/40 text-[10px] tracking-widest uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-[#B38728]">
                  Phone Number
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="peer w-full border-b border-black/10 bg-transparent py-3 text-black text-sm placeholder-transparent focus:outline-none focus:border-[#B38728] transition-all resize-none"
                  placeholder="Vision"
                />
                <label className="absolute left-0 -top-3.5 text-black/40 text-[10px] tracking-widest uppercase transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-[#B38728]">
                  Tell us about your vision...
                </label>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-6">
              <div className="transform scale-90 origin-left">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  onChange={(token) => setCaptchaToken(token)}
                  ref={recaptchaRef}
                />
              </div>

              <motion.button
                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                type="submit"
                disabled={loading}
                className="w-full bg-transparent text-black py-4 text-[11px] tracking-[0.3em] uppercase 
                border border-black transition-all duration-300 disabled:opacity-50 font-black"
              >
                {loading ? "Transmitting..." : "Send Inquiry"}
              </motion.button>

              {success && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-black text-[11px] tracking-widest uppercase italic font-bold"
                >
                  Inquiry sent successfully ✨
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>
      </div>

     
    </main>
  );
}