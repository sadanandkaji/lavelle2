export default function HeroGoldText({ goldTextRef }: any) {
  return (
    <div
      ref={goldTextRef}
      className="absolute inset-0 z-20 flex items-center justify-center text-center opacity-0 px-6"
    >
      <div className="max-w-4xl">

        {/* Main Heading */}
        <h2 className="text-white text-4xl md:text-7xl font-extralight tracking-[0.3em] uppercase leading-tight">
          Curating Signature <br />
          <span className="italic font-light opacity-80">
            Residences
          </span>
        </h2>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-[#C6A45A] mx-auto my-8 opacity-70"></div>

        {/* Quote */}
        <p className="text-white/70 text-sm md:text-lg font-light italic leading-relaxed">
          “Where architecture embraces the peace of nature,
          and every residence becomes a sanctuary of harmony.”
        </p>

      </div>
    </div>
  );
}