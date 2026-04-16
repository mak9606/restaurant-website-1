import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #d4891a 1px, transparent 0)",
        backgroundSize: "48px 48px"
      }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label mb-4">Our Story</p>
          <div className="divider-gold mb-6" />
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream max-w-3xl mx-auto leading-tight">
            A Passion for Excellence,{" "}
            <em className="text-gold-400 font-semibold">Since 1998</em>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <div className="relative reveal-left">
            <div className="relative h-[600px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=900&q=80"
                alt="Chef Laurent in the kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-gold-500 text-charcoal-950 p-8 font-display">
              <div className="text-5xl font-bold leading-none">25</div>
              <div className="text-sm font-body font-medium tracking-widest uppercase mt-1">
                Years of <br />Excellence
              </div>
            </div>
            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t border-l border-gold-500/40 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="reveal-right">
            <p className="font-display text-xl text-charcoal-200 font-light leading-relaxed mb-6 italic">
              "Great cuisine is not about ingredients — it is about emotion,
              memory, and the desire to transport a guest somewhere
              extraordinary."
            </p>
            <p className="font-body text-charcoal-300 leading-loose mb-6">
              Founded by Chef Laurent Beaumont in 1998, Maison Laurent was born
              from a singular vision: to create a space where classical French
              technique meets the vibrant produce of our modern world. Every
              menu is a story, every plate a chapter.
            </p>
            <p className="font-body text-charcoal-300 leading-loose mb-8">
              Our kitchen is guided by the seasons, sustained relationships with
              local farmers, and the relentless pursuit of balance — between
              flavour and texture, tradition and innovation, indulgence and
              precision.
            </p>
            <a href="#menu" className="btn-outline">
              Explore Our Menus
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
          {[
            { number: "800+", label: "Wine Labels" },
            { number: "12", label: "Seasonal Menus" },
            { number: "40", label: "Covers Nightly" },
            { number: "98%", label: "Guest Satisfaction" }
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center reveal"
            >
              <div className="font-display text-5xl font-light text-gold-400 mb-2">
                {stat.number}
              </div>
              <div className="font-body text-xs text-charcoal-400 tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
