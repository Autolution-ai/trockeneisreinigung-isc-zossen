"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Einsatzgebiete", href: "/einsatzgebiete" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Verkauf", href: "/verkauf" },
  { label: "Vermietung", href: "/vermietung" },
  { label: "Service", href: "/service" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-steel-100"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-navy-900 flex items-center justify-center">
                <span className="text-white text-xs font-black tracking-tight">ISC</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-navy-900 leading-tight">
                  ISC GmbH
                </div>
                <div className="text-xs text-steel-500 leading-tight">
                  Industrie-Service-Czech
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-steel-600 hover:text-navy-900 hover:bg-steel-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+493377202730"
              className="flex items-center gap-1.5 text-sm font-medium text-steel-600 hover:text-navy-900 transition-colors"
            >
              <Phone size={14} />
              03377 202730
            </a>
            <Link
              href="/kontakt"
              className="px-4 py-2 bg-navy-900 text-white text-sm font-semibold rounded-md hover:bg-navy-800 transition-colors"
            >
              Jetzt anfragen
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-steel-600 hover:bg-steel-50 transition-colors"
            aria-label="Menü öffnen"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-steel-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-steel-700 hover:text-navy-900 hover:bg-steel-50 rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-steel-100 flex flex-col gap-2">
              <a
                href="tel:+493377202730"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-steel-700"
              >
                <Phone size={14} />
                03377 202730
              </a>
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-md text-center"
              >
                Jetzt anfragen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
