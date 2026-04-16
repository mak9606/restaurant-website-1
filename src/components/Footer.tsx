export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal-950 border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <span className="font-display text-2xl font-light tracking-widest text-cream block leading-none">
                Maison
              </span>
              <span className="font-display text-2xl font-semibold italic tracking-wider text-gold-400 block leading-none -mt-1">
                Laurent
              </span>
            </div>
            <p className="font-body text-charcoal-500 text-xs leading-relaxed mb-6">
              Contemporary French fine dining. Est. 1998.
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-body text-charcoal-600 hover:text-gold-500 text-xs tracking-wide transition-colors duration-300"
                >
                  {social.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="section-label mb-4">Navigate</h4>
            <ul className="space-y-2">
              {["About", "Menu", "Experience", "Gallery", "Reservations"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="font-body text-charcoal-500 hover:text-gold-400 text-sm transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="section-label mb-4">Hours</h4>
            <ul className="space-y-2 font-body text-charcoal-500 text-sm">
              <li>Mon–Tue: Closed</li>
              <li>Wed–Thu: Dinner only</li>
              <li>Fri–Sun: Lunch & Dinner</li>
              <li className="pt-2 text-charcoal-600 text-xs">
                Last orders 30 min before close
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-4">Contact</h4>
            <ul className="space-y-3 font-body text-charcoal-500 text-sm">
              <li>
                <a
                  href="tel:+15551234567"
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@maisonlaurent.com"
                  className="hover:text-gold-400 transition-colors duration-300"
                >
                  hello@maisonlaurent.com
                </a>
              </li>
              <li className="text-charcoal-600">
                14 Rue de la Paix
                <br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-charcoal-700 text-xs">
            © {new Date().getFullYear()} Maison Laurent. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Accessibility"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="font-body text-charcoal-700 hover:text-charcoal-400 text-xs transition-colors duration-300"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
