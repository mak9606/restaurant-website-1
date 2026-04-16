import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="py-24 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="font-display text-[20vw] font-bold text-white/[0.015] select-none whitespace-nowrap">
          MAISON LAURENT
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">Accolades</p>
          <div className="divider-gold mb-6" />
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream">
            What They{" "}
            <em className="text-gold-400 font-semibold">Say About Us</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal border border-white/8 p-8 hover:border-gold-500/30 transition-colors duration-500 relative"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Quote mark */}
              <div className="font-display text-7xl text-gold-500/20 leading-none mb-4 -mt-2">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-body text-charcoal-200 text-sm leading-relaxed mb-8 italic">
                {t.quote}
              </blockquote>

              <div className="border-t border-white/10 pt-6">
                <p className="font-display text-lg font-medium text-cream">
                  {t.name}
                </p>
                <p className="font-body text-xs text-gold-500 tracking-wide mt-1">
                  {t.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Award logos area */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 reveal">
          {["Michelin Guide 2024", "Forbes Travel", "The Times", "AA Hospitality", "Good Food Guide"].map(
            (award) => (
              <span
                key={award}
                className="font-body text-xs tracking-widest uppercase text-charcoal-500 hover:text-charcoal-300 transition-colors duration-300"
              >
                {award}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
