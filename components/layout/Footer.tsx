import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Firma */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                <span className="text-white text-xs font-black">ISC</span>
              </div>
              <span className="font-bold text-white">ISC GmbH</span>
            </div>
            <p className="text-sm text-steel-400 leading-relaxed mb-4">
              Ihr Spezialist für Trockeneisreinigung, Sandstrahlen und Strahltechnik
              in Zossen bei Berlin. ISO 9001 zertifiziert.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/people/ISC-Industrie-Service-Czech/100063562750036/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <ExternalLink size={14} />
              </a>
              <a
                href="https://www.instagram.com/isc_gmbh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Leistungen
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Trockeneisreinigung", href: "/leistungen" },
                { label: "Sandstrahlen", href: "/leistungen#sandstrahlen" },
                { label: "Soda-Strahlen", href: "/leistungen#soda-strahlen" },
                { label: "Sponge-Jet", href: "/leistungen#sponge-jet" },
                { label: "Maschinenverkauf", href: "/verkauf" },
                { label: "Maschinenvermietung", href: "/vermietung" },
                { label: "Service & Reparatur", href: "/service" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Unternehmen
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Referenzen", href: "/referenzen" },
                { label: "Einsatzgebiete", href: "/einsatzgebiete" },
                { label: "Impressum", href: "/impressum" },
                { label: "Datenschutz", href: "/datenschutz" },
                { label: "AGB", href: "/agb" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-steel-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+493377202730"
                  className="flex items-start gap-2.5 text-sm text-steel-400 hover:text-white transition-colors"
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0" />
                  (03377) 202730
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@i-s-c-gmbh.de"
                  className="flex items-start gap-2.5 text-sm text-steel-400 hover:text-white transition-colors"
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0" />
                  info@i-s-c-gmbh.de
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/ISC+Industrie-Service+Czech+GmbH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-sm text-steel-400 hover:text-white transition-colors"
                >
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                  <span>
                    An den Wulzen 2–6<br />
                    15806 Zossen
                  </span>
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                href="/kontakt"
                className="inline-block px-4 py-2 bg-brand-red text-white text-sm font-semibold rounded-md hover:bg-brand-red-hover transition-colors"
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-steel-500">
            © {new Date().getFullYear()} ISC Industrie-Service-Czech GmbH · Zossen
          </p>
          <p className="text-xs text-steel-500">
            ISO 9001 zertifiziert · HRB 17870P Potsdam
          </p>
        </div>
      </div>
    </footer>
  );
}
