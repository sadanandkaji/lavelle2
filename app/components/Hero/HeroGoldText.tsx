export default function HeroGoldText({ goldTextRef, goldBgRef }: any) {
  return (
    <div
      ref={goldTextRef}
      className="absolute inset-0 z-20 flex items-center justify-center text-center opacity-0 px-6"
    >
      {/* Background Image */}
      <div
        ref={goldBgRef}
        className="absolute inset-0 bg-cover bg-center opacity-0"
        style={{
          backgroundImage: `url("/images/upperviewof layout.jpg")`,
          filter: "brightness(0.85)", // subtle darken instead of white wash
        }}
      />

      {/* Optional Dark Overlay (Better Than White) */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="max-w-4xl relative z-10">
        <h2 className="text-white text-4xl md:text-7xl font-extralight tracking-[0.3em] uppercase leading-tight">
          Curating Signature <br />
          <span className="italic font-light text-[#C6A45A]">
            Residences
          </span>
        </h2>

        <div className="w-16 h-[1px] bg-[#C6A45A] mx-auto my-8"></div>

        <p className="text-white/80 text-sm md:text-lg font-light italic leading-relaxed">
          “Where architecture embraces the peace of nature,
          and every residence becomes a sanctuary of harmony.”
        </p>
      </div>
    </div>
  );
}