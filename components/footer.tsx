"use client";

import { Mountain, Waves } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

/**
 * Footer Component
 * Simple footer with name and year
 * Combines mountain and ocean icons for the adventure/diving theme
 */

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale } = useLanguage();
  const t = {
    es: {
      rights: "Todos los derechos reservados.",
      home: "Inicio",
      about: "Sobre mí",
      contact: "Contacto",
    },
    en: {
      rights: "All rights reserved.",
      home: "Home",
      about: "About",
      contact: "Contact",
    },
  }[locale];

  return (
    <footer className="py-8 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo and Name */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Mountain className="h-5 w-5 text-emerald-400" />
              <Waves className="h-5 w-5 text-blue-400 -ml-1" />
            </div>
            <span className="font-medium">María José Fuentes</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">
            © {currentYear} {t.rights}
          </p>

          {/* Quick Links */}
          <nav className="flex items-center gap-4 text-sm">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">
              {t.home}
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">
              {t.about}
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
              {t.contact}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
