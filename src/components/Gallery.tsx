import Image from "next/image";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-charcoal-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label mb-4">Visual Journal</p>
          <div className="divider-gold mb-6" />
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream">
            From Our{" "}
            <em className="text-gold-400 font-semibold">Kitchen & Table</em>
          </h2>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`reveal relative overflow-hidden group cursor-pointer ${
                i === 0 ? "row-span-2 col-span-1" : ""
              }`}
              style={{
                transitionDelay: `${i * 80}ms`,
                aspectRatio: i === 0 ? "auto" : "1"
              }}
            >
              <div
                className="relative w-full"
                style={{ height: i === 0 ? "100%" : "auto", aspectRatio: i === 0 ? "auto" : "1" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill={i === 0}
                  width={i !== 0 ? 600 : undefined}
                  height={i !== 0 ? 600 : undefined}
                  className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i !== 0 ? "w-full h-full" : ""
                  }`}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/40 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gold-500/60 px-4 py-2">
                  <span className="font-body text-xs tracking-widest uppercase text-gold-400">
                    {img.alt}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram link */}
        <div className="text-center mt-12 reveal">
          <a
            href="#"
            className="inline-flex items-center gap-3 font-body text-xs tracking-widest uppercase text-gold-500 hover:text-gold-400 transition-colors duration-300"
          >
            <InstagramIcon />
            Follow Our Journey — @maisonlaurent
          </a>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}
