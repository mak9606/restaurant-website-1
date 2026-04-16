import Image from "next/image";
import { teamMembers } from "@/lib/data";

export default function Team() {
  return (
    <section className="py-32 bg-charcoal-950 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="section-label mb-4">The Artists</p>
          <div className="divider-gold mb-6" />
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream">
            Hands Behind{" "}
            <em className="text-gold-400 font-semibold">Every Plate</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <div
              key={member.name}
              className="reveal group text-center"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Image */}
              <div className="relative mb-6 overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent" />
                </div>
                {/* Corner decoration */}
                <div className="absolute top-3 left-3 w-8 h-8 border-t border-l border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-500" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-b border-r border-gold-500/0 group-hover:border-gold-500/60 transition-all duration-500" />
              </div>

              <h3 className="font-display text-2xl font-medium text-cream mb-1">
                {member.name}
              </h3>
              <p className="section-label mb-4">{member.role}</p>
              <p className="font-body text-charcoal-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
