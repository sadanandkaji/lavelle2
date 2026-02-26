"use client";

import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContact() {
  const contactLinks = [
    {
      icon: <Phone size={20} />,
      href: "tel:+911234567890",
    
    },
    {
      icon: <MessageCircle size={20} />,
      href: "https://wa.me/911234567890",
     
    },
    {
      icon: <Mail size={20} />,
      href: "mailto:info@lavelle.com",
    
    },
  ];

  return (
    <>
      {/* --- DESKTOP: Left Middle (Slides out to the right) --- */}
      <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-[200] flex-col gap-2 items-start">
        {contactLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            initial={{ x: -45 }} // Hidden to the left
            whileHover={{ x: 0 }} // Slides fully into view
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#B38728] text-white pr-4 pl-14 py-4 flex items-center gap-4 shadow-xl cursor-pointer"
            style={{ borderRadius: "0 30px 30px 0" }} // Curved on the right side
          >
            <div className="shrink-0">{link.icon}</div>
           
          </motion.a>
        ))}
      </div>

      {/* --- MOBILE: Rounded Floating Pill (Bottom Left) --- */}
      <div className="md:hidden fixed bottom-6 left-6 z-[200] flex flex-col gap-3">
        {contactLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            initial={{ opacity: 0, scale: 0.5, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="w-12 h-12 bg-[#B38728] text-white rounded-full flex items-center justify-center shadow-2xl border border-white/20 active:scale-90 transition-transform"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </>
  );
}