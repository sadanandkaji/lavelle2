"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import HeroCards from "./HeroCards";
import HeroIntro from "./HeroIntro";
import HeroGoldText from "./HeroGoldText";
import HeroFinalContent from "./HeroFinalContent";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const mediaInnerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const goldTextRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const goldBgRef = useRef<HTMLDivElement | null>(null);

  const gardenCardRef = useRef<HTMLDivElement | null>(null);
  const sportsCardRef = useRef<HTMLDivElement | null>(null);
  const poolCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(
    () => {
      if (!mounted || !heroRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          // TIGHTENED: 400% means much less thumb-swiping to get through the content
          end: "+=500%", 
          scrub: 1, // Snappy response: the animation stays glued to the finger
          pin: true,
          anticipatePin: 1,
        },
      });

      // --- PHASE 1: Quick Video Collapse ---
      tl.to(mediaInnerRef.current, { clipPath: "circle(0% at 50% 50%)", ease: "none" }, 0)
        .to(goldBgRef.current, { opacity: 0.4, scale: 1.05, ease: "none" }, 0)
        .to(textRef.current, { opacity: 0, y: -30, filter: "blur(10px)", ease: "none" }, 0);

      // --- PHASE 2: Fast Card Transitions ---
      const cardRefs = [gardenCardRef, sportsCardRef, poolCardRef];
      
      cardRefs.forEach((ref, i) => {
        if (!ref.current) return;
        
        // Entrance & Exit happen closer together to minimize "dead" scrolling
        tl.fromTo(ref.current,
          { y: "100%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, ease: "power2.out" }
        )
        // Short pause (dwell) on the card
        .to({}, { duration: 0.5 }) 
        // Exit
        .to(ref.current, {
          y: "-100%",
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.8,
          ease: "power2.in"
        });
      });

      // --- PHASE 3: Final Reveal ---
      tl.to(goldBgRef.current, { opacity: 0.8, duration: 0.5 })
        .fromTo(goldTextRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1 }
        )
        .to(goldTextRef.current, { opacity: 0, filter: "blur(15px)", duration: 0.8 }, "+=0.5")
        .fromTo(contentRef.current,
          { y: "50vh", opacity: 0 },
          { y: "0vh", opacity: 1, duration: 1.2, ease: "power3.out" }
        );
    },
    { dependencies: [mounted], scope: heroRef }
  );

  if (!mounted) return null;

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-black">
      <div
        ref={goldBgRef}
        className="absolute inset-0 z-0 opacity-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/images/goldthemeceling.png")` }}
      />
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div ref={mediaInnerRef} className="absolute inset-0 bg-black" style={{ clipPath: "circle(150% at 50% 50%)" }}>
          <video autoPlay muted loop playsInline preload="auto" poster="/images/goldthemeceling.png" className="w-full h-full object-cover">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <HeroCards gardenRef={gardenCardRef} sportsRef={sportsCardRef} poolRef={poolCardRef} />
      <HeroIntro textRef={textRef} />
      <HeroGoldText goldTextRef={goldTextRef} />
      <HeroFinalContent contentRef={contentRef} />
    </section>
  );
}