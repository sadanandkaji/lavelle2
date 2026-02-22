import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-100 pt-24 pb-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <img src="/images/iconlogo.png" alt="Logo" className="w-12 h-12 object-contain" />
              <div className="w-[1px] h-8 bg-stone-200" />
              <div className="flex flex-col -space-y-1">
                <img src="/images/lavelle.png" alt="Lavelle" className="h-6 object-contain" />
                <img src="/images/ventures.png" alt="Ventures" className="h-6 object-contain opacity-70" />
              </div>
            </div>
            
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm font-light">
              Introducing a unique and transformative development— 227 acres of pristine farmland surrounding the sacred abode of Devi Sri Tripuraeshwari.
            </p>

            <div className="flex gap-6">
               <div className="w-8 h-[1px] bg-[#B38728] self-center" />
               <p className="text-[#B38728] text-[10px] tracking-[0.4em] uppercase font-bold">
                 Legacy in Living
               </p>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[11px] tracking-[0.3em] uppercase font-black text-stone-900">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-stone-500 hover:text-black text-sm transition transition-all duration-300">Home</Link></li>
              <li><Link href="/gallery" className="text-stone-500 hover:text-black text-sm transition transition-all duration-300">Gallery</Link></li>
              <li><Link href="/contact" className="text-stone-500 hover:text-black text-sm transition transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-[11px] tracking-[0.3em] uppercase font-black text-stone-900">Contact</h4>
            <div className="space-y-4 text-sm text-stone-500 font-light leading-relaxed">
              <p>
                Above Canara Bank 1,<br />
                1st Main 1st Cross, Atmananda Colony,<br />
                Sultanpalya, Bengaluru, Karnataka 560032.
              </p>
              <div className="space-y-1">
                <p className="block hover:text-black transition-colors">
                  <span className="text-stone-400 mr-2">E:</span> support@Lavelleventure.com
                </p>
                <p className="block hover:text-black transition-colors">
                  <span className="text-stone-400 mr-2">P:</span> +91 91875 69958
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-400 text-[10px] tracking-widest uppercase">
            © 2026 Lavelle Ventures. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-stone-400 hover:text-[#B38728] text-[10px] tracking-widest uppercase transition-colors">Privacy</Link>
            <Link href="#" className="text-stone-400 hover:text-[#B38728] text-[10px] tracking-widest uppercase transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}