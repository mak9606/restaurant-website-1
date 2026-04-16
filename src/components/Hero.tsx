import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=90"
          alt="Maison Laurent fine dining"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/50 to-charcoal-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/40 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-500/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-gold-500/5 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <span className="h-px w-12 bg-gold-500" />
          <p className="section-label">Est. 1998 · Paris-Inspired</p>
          <span className="h-px w-12 bg-gold-500" />
        </div>

        {/* Main Title */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-cream leading-[0.9] tracking-tight mb-6 animate-fade-up">
          The Art of
          <br />
          <em className="text-gradient-gold font-semibold">Fine Dining</em>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-charcoal-200 text-lg font-light max-w-xl mx-auto leading-relaxed mb-12 animate-fade-up animate-delay-200">
          Contemporary French cuisine crafted with seasonal ingredients,
          artisan techniques, and an unwavering pursuit of perfection.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animate-delay-400">
          <a href="#reservations" className="btn-primary">
            Reserve Your Evening
            <ArrowRight />
          </a>
          <a href="#menu" className="btn-outline">
            Explore the Menu
          </a>
        </div>

        {/* Awards */}
        <div className="mt-16 flex items-center justify-center gap-8 animate-fade-in animate-delay-700">
          {["2★ Michelin", "Forbes 5-Star", "AA Rosette"].map((award) => (
            <div key={award} className="flex flex-col items-center gap-1">
              <StarIcon />
              <span className="font-body text-charcoal-300 text-xs tracking-widest uppercase">
                {award}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animate-delay-700">
        <span className="font-body text-charcoal-400 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-gold-500/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-gold-400" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
