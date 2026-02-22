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
          end: "+=900%", // Slightly longer to allow for manual "dwelling" on cards
          scrub: 2,      // High scrub value creates that "smooth glide" without jumping
          pin: true,
          anticipatePin: 1,
        },
      });

      // --- PHASE 1: Video Collapse ---
      if (mediaInnerRef.current) {
        tl.to(mediaInnerRef.current, {
          clipPath: "circle(0% at 50% 50%)",
          ease: "none",
        }, 0);
      }

      if (goldBgRef.current) {
        tl.to(goldBgRef.current, { opacity: 0.4, scale: 1.1, ease: "none" }, 0);
      }

      if (textRef.current) {
        tl.to(textRef.current, { opacity: 0, y: -50, filter: "blur(20px)", ease: "none" }, 0);
      }

      // --- PHASE 2: Cards Sequence ---
      const cardRefs = [gardenCardRef, sportsCardRef, poolCardRef];
      const rotations = [-3, 3, -1.5];

      cardRefs.forEach((ref, i) => {
        if (!ref.current) return;
        const innerImg = ref.current.querySelector<HTMLDivElement>(".card-image");

        // Entrance
        tl.fromTo(ref.current,
          { y: "120%", opacity: 0, rotate: rotations[i], scale: 0.8 },
          { y: "0%", opacity: 1, rotate: 0, scale: 1, duration: 2, ease: "power2.out" },
          "-=0.5" // Overlap slightly with previous animation
        );

        if (innerImg) {
          tl.to(innerImg, { y: "-15%", duration: 2, ease: "none" }, "<");
        }

        // Exit (Last card stays a bit longer)
        tl.to(ref.current, {
          y: "-120%",
          opacity: 0,
          scale: 1.1,
          filter: "blur(15px)",
          duration: 1.5,
          ease: "power2.in"
        }, "+=1"); // The "1" here is the pause time where the card is still
      });

      // --- PHASE 3: Gold Text & Final Fade ---
      if (goldBgRef.current) {
        tl.to(goldBgRef.current, { opacity: 0.8, scale: 1, duration: 1 });
      }

      if (goldTextRef.current) {
        tl.fromTo(goldTextRef.current,
          { opacity: 0, y: 50, filter: "blur(15px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 2 },
          ">"
        ).to(goldTextRef.current, {
          opacity: 0,
          scale: 0.9,
          filter: "blur(20px)",
          duration: 1.5
        }, "+=1");
      }

      if (contentRef.current) {
        tl.fromTo(contentRef.current,
          { y: "100vh", opacity: 0 },
          { y: "0vh", opacity: 1, duration: 2, ease: "power3.out" },
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