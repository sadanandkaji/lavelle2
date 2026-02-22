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
          // REDUCED: From 1200% to 700% for a much faster feel on mobile
          end: "+=700%", 
          // REDUCED: 1.0 makes it follow the finger more closely than 1.5
          scrub: 1, 
          pin: true,
          // ADDED: Snapping ensures cards don't get stuck halfway
          snap: {
            snapTo: "labels",
            duration: { min: 0.2, max: 0.6 },
            delay: 0.1,
            ease: "power2.inOut"
          }
        },
      });

      // Phase 1 – Collapse Video
      tl.addLabel("start");
      if (mediaInnerRef.current) {
        tl.to(mediaInnerRef.current, {
          clipPath: "circle(0% at 50% 50%)",
          ease: "power2.inOut",
        }, 0);
      }

      if (goldBgRef.current) {
        tl.to(goldBgRef.current, { opacity: 0.4, scale: 1.1 }, 0);
      }

      if (textRef.current) {
        tl.to(textRef.current, { opacity: 0, y: -50, filter: "blur(20px)" }, 0);
      }

      // Phase 2 – Cards Animation
      const cards = [
        { ref: gardenCardRef, rot: -2, label: "garden" },
        { ref: sportsCardRef, rot: 2, label: "sports" },
        { ref: poolCardRef, rot: -1, label: "pool" },
      ];

      cards.forEach((card, i) => {
        if (!card.ref.current) return;
        const innerImg = card.ref.current.querySelector<HTMLDivElement>(".card-image");

        tl.addLabel(card.label);

        // Entrance
        tl.fromTo(card.ref.current,
          { y: "100%", opacity: 0, rotate: card.rot, scale: 0.9 },
          { y: "0%", opacity: 1, rotate: 0, scale: 1, duration: 1, ease: "power2.out" },
          ">-0.2"
        );

        if (innerImg) tl.to(innerImg, { y: "-10%", duration: 1 }, "<");

        // Exit (Except for the last card if you want it to transition to final content)
        tl.to(card.ref.current, {
          y: "-100%",
          opacity: 0,
          scale: 1.05,
          filter: "blur(10px)",
          duration: 0.8,
        }, "+=0.5");
      });

      // Phase 3 – Gold Text & Final Content
      tl.addLabel("final");
      if (goldBgRef.current) {
        tl.to(goldBgRef.current, { opacity: 0.8, scale: 1 });
      }

      if (goldTextRef.current) {
        tl.fromTo(goldTextRef.current,
          { opacity: 0, y: 30, filter: "blur(15px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 },
          ">"
        ).to(goldTextRef.current, {
          opacity: 0,
          scale: 0.95,
          filter: "blur(20px)",
          duration: 0.8
        }, "+=0.5");
      }

      if (contentRef.current) {
        tl.fromTo(contentRef.current,
          { y: "100vh", opacity: 0 },
          { y: "0vh", opacity: 1, duration: 1.5 },
          ">"
        );
      }
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
        <div
          ref={mediaInnerRef}
          className="absolute inset-0 bg-black"
          style={{ clipPath: "circle(150% at 50% 50%)" }}
        >
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