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
          end: "+=1200%",
          scrub: 1.5,
          pin: true,
        },
      });

      // Phase 1 – Collapse Video
      if (mediaInnerRef.current) {
        tl.to(mediaInnerRef.current, {
          clipPath: "circle(0% at 50% 50%)",
          ease: "power3.inOut",
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
        { ref: gardenCardRef, rot: -2 },
        { ref: sportsCardRef, rot: 2 },
        { ref: poolCardRef, rot: -1 },
      ];

      cards.forEach((card) => {
        if (!card.ref.current) return;
        const innerImg = card.ref.current.querySelector<HTMLDivElement>(".card-image");

        tl.fromTo(card.ref.current,
          { y: "100%", opacity: 0, rotate: card.rot, scale: 0.85 },
          { y: "0%", opacity: 1, rotate: 0, scale: 1, duration: 1.5 },
          ">-0.4"
        );

        if (innerImg) tl.to(innerImg, { y: "-10%" }, "<");

        tl.to(card.ref.current, {
          y: "-100%",
          opacity: 0,
          scale: 1.05,
          filter: "blur(10px)",
          duration: 1.2,
        }, "+=0.6");
      });

      // Phase 3 – Gold Text & Final Content
      if (goldBgRef.current) {
        tl.to(goldBgRef.current, { opacity: 0.8, scale: 1 });
      }

      if (goldTextRef.current) {
        tl.fromTo(goldTextRef.current,
          { opacity: 0, y: 30, filter: "blur(15px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.5 },
          ">"
        ).to(goldTextRef.current, {
          opacity: 0,
          scale: 0.95,
          filter: "blur(20px)",
        }, "+=1");
      }

      if (contentRef.current) {
        tl.fromTo(contentRef.current,
          { y: "100vh", opacity: 0 },
          { y: "0vh", opacity: 1, duration: 2 },
          ">"
        );
      }
    },
    { dependencies: [mounted], scope: heroRef }
  );

  if (!mounted) return null;

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* GOLD BACKGROUND - Used as the ultimate fallback */}
      <div
        ref={goldBgRef}
        className="absolute inset-0 z-0 opacity-0 bg-cover bg-center"
        style={{ backgroundImage: `url("/images/goldthemeceling.png")` }}
      />

      {/* VIDEO CONTAINER */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div
          ref={mediaInnerRef}
          className="absolute inset-0 bg-black"
          style={{ clipPath: "circle(150% at 50% 50%)" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            // Tip: Use your existing ceiling image as the poster 
            // so there is no 404 and the user sees something immediately.
            poster="/images/goldthemeceling.png" 
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <HeroCards
        gardenRef={gardenCardRef}
        sportsRef={sportsCardRef}
        poolRef={poolCardRef}
      />

      <HeroIntro textRef={textRef} />
      <HeroGoldText goldTextRef={goldTextRef} />
      <HeroFinalContent contentRef={contentRef} />
    </section>
  );
}