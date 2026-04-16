import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Seasonal Provenance",
    description:
      "Every ingredient is sourced within 150 miles. We collaborate directly with farmers, fishers, and foragers to ensure peak quality."
  },
  {
    number: "02",
    title: "Classical Technique",
    description:
      "Our kitchen honours centuries of French culinary tradition — stocks simmered for 36 hours, pastry made fresh each morning."
  },
  {
    number: "03",
    title: "Curated Cellar",
    description:
      "Over 800 labels, including rare Burgundies and natural wines from small-production domaines handpicked by our sommelier."
  },
  {
    number: "04",
    title: "Intimate Setting",
    description:
      "With only 40 covers each evening, every guest receives the complete attention of our entire team throughout the meal."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative">
      {/* Parallax Banner */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80"
            alt="Restaurant ambiance"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal-950/75" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="section-label mb-4 reveal">The Experience</p>
          <div className="divider-gold mb-6 reveal" />
          <blockquote className="font-display text-3xl md:text-5xl font-light text-cream italic leading-tight reveal">
            "We do not simply serve meals. <br />
            <span className="text-gold-400 font-semibold not-italic">
              We orchestrate evenings.
            </span>
            "
          </blockquote>
          <p className="font-body text-charcoal-300 mt-4 reveal">
            — Chef Laurent Beaumont
          </p>
        </div>
      </div>

      {/* Pillars */}
      <div className="bg-charcoal-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {pillars.map((p, i) => (
              <div
                key={p.number}
                className="reveal group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="font-display text-6xl font-light text-gold-500/20 mb-4 group-hover:text-gold-500/40 transition-colors duration-500">
                  {p.number}
                </div>
                <div className="w-8 h-px bg-gold-500 mb-5" />
                <h3 className="font-display text-xl font-medium text-cream mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-charcoal-400 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
