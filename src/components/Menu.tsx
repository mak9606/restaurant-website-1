"use client";

import { useState } from "react";
import { menuItems, tastingMenus, type MenuItem } from "@/lib/data";
import { motion } from "framer-motion";
type Category = "starters" | "mains" | "desserts" | "tasting";

const categories: { id: Category; label: string }[] = [
  { id: "starters", label: "Starters" },
  { id: "mains", label: "Main Courses" },
  { id: "desserts", label: "Desserts" },
  { id: "tasting", label: "Tasting Menus" },
];

export default function Menu() {
  const [active, setActive] = useState<Category>("starters");
  const filtered = menuItems.filter((item) => item.category === active);
  // console.log(filtered, "filtered");
  console.log(active, "active");
  return (
    <section id="menu" className="py-32 bg-charcoal-900 relative">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transitionDelay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16 "
        >
          <p className="section-label mb-4">Seasonal Menus</p>
          <div className="divider-gold mb-6" />
          <h2 className="font-display text-5xl md:text-6xl font-light text-cream">
            A Celebration of{" "}
            <em className="text-gold-400 font-semibold">Flavour</em>
          </h2>
          <p className="font-body text-charcoal-300 mt-4 max-w-xl mx-auto leading-relaxed">
            Our menus change with the seasons, honouring the finest ingredients
            at their peak of perfection.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0, transitionDelay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-1 mb-14"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`font-body text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300 ${
                active === cat.id
                  ? "bg-gold-500 text-charcoal-950"
                  : "text-charcoal-300 hover:text-cream border border-white/10 hover:border-white/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items */}
        {active !== "tasting" ? (
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
            {filtered.map((item, i) => (
              <MenuItemCard key={item.id} item={item} index={i} />
            ))}
          </div>
        ) : (
          <TastingMenus />
        )}

        {/* Footer note */}
        <p className="text-center font-body text-charcoal-500 text-xs mt-12 tracking-wide reveal">
          All prices are per person and exclude beverages, taxes, and service
          charge. Menu subject to seasonal change.
        </p>
      </div>
    </section>
  );
}

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className=" py-7 border-b border-white/8 group"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-display text-xl font-medium text-cream group-hover:text-gold-400 transition-colors duration-300">
              {item.name}
            </h3>
            {item.tag && (
              <span className="font-body text-[10px] tracking-widest uppercase text-gold-500 border border-gold-500/40 px-2 py-0.5">
                {item.tag}
              </span>
            )}
          </div>
          <p className="font-body text-charcoal-400 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="font-display text-xl text-gold-400 font-light whitespace-nowrap">
          ${item.price}
        </div>
      </div>
    </motion.div>
  );
}

function TastingMenus() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {tastingMenus.map((menu, i) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          key={menu.name}
          className={` border p-6 lg:p-8 relative overflow-hidden group transition-all duration-500 ${
            i === 0
              ? "border-gold-500/50 bg-gold-500/5"
              : "border-white/10 hover:border-gold-500/30"
          }`}
          style={{ transitionDelay: `${i * 100}ms` }}
        >
          {i === 0 && (
            <div className="absolute top-0 right-0 bg-gold-500 px-3 py-1 font-body text-[10px] tracking-widest uppercase text-charcoal-950">
              Featured
            </div>
          )}
          <div className="mb-6">
            <p className="section-label mb-2">{menu.courses} Courses</p>
            <h3 className="font-display text-3xl font-medium text-cream mb-2">
              {menu.name}
            </h3>

            <span
              className={` ${menu.tag ? "visible border border-gold-500/40" : "invisible"} font-body text-[10px] tracking-widest uppercase text-gold-500  px-2 py-0.5`}
            >
              {menu.tag}
            </span>
          </div>
          <p className="font-body text-charcoal-400 text-xs lg:text-sm leading-relaxed mb-8">
            {menu.description}
          </p>
          <div className="border-t border-white/10 pt-6">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display text-3xl text-gold-400">
                ${menu.price}
              </span>
              <span className="font-body text-charcoal-500 text-xs">
                per person
              </span>
            </div>
            <p className="font-body text-charcoal-500 text-xs mb-6">
              Wine pairing +${menu.wines}
            </p>
            <a
              href="#reservations"
              className="btn-primary px-4 lg:px-8 w-full justify-center text-xs py-3"
            >
              Book This Menu
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
