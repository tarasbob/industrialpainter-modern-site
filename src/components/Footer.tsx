import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

const serviceLinks = [
  { href: "/services#surface-prep", label: "Surface Preparation" },
  { href: "/services#lead-paint", label: "Lead Paint Services" },
  { href: "/services#paint-application", label: "Paint Application" },
  { href: "/services#specialty", label: "Specialty Services" },
  { href: "/services#restoration", label: "Restoration Services" },
  { href: "/services#coatings", label: "Protective Coatings" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Projects" },
  { href: "/industries", label: "Industries" },
  { href: "/safety", label: "Safety" },
  { href: "/coverage", label: "Coverage" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-orange-500 flex items-center justify-center">
                <span className="text-white font-black text-lg">IP</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg block">
                  Industrial Painter
                </span>
                <span className="text-slate-400 text-xs block">Since 1972</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Nationwide industrial and commercial painting contractor. Surface
              preparation specialists and experienced protective coating
              applicators.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:18003549165"
                className="flex items-center gap-2 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-orange-500" />
                1 (800) 354-9165
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5" />
                <span>6302 Illinois Rd #112, Fort Wayne, IN 46804</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                Mon-Fri 8:00am - 5:00pm
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage & CTA */}
          <div>
            <h3 className="text-white font-semibold mb-4">Coverage</h3>
            <p className="text-sm text-slate-400 mb-4">
              Serving all 50 states including Alaska, Hawaii, Puerto Rico, and
              the Virgin Islands.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded text-sm transition-colors"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} IndustrialPainter.com. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <Link href="/safety" className="hover:text-slate-300 transition-colors">
              Safety Policy
            </Link>
            <Link href="/coverage" className="hover:text-slate-300 transition-colors">
              Service Areas
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
