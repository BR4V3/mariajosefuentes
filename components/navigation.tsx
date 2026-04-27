"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mountain, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

/**
 * Navigation Component
 * Sticky navigation bar with smooth scroll links to all sections
 * Includes mobile hamburger menu for responsive design
 */

const navLinks = {
  es: [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Sobre mí" },
    { href: "#experience", label: "Experiencia en terreno" },
    { href: "#work", label: "Trabajo" },
    { href: "#education", label: "Educación" },
    { href: "#landmarks", label: "Destinos" },
    { href: "#portfolio", label: "Portafolio" },
    { href: "#swot", label: "FODA" },
    { href: "#cv", label: "CV" },
    { href: "#contact", label: "Contacto" },
  ],
  en: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Field Experience" },
    { href: "#work", label: "Work" },
    { href: "#education", label: "Education" },
    { href: "#landmarks", label: "Landmarks" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#swot", label: "SWOT" },
    { href: "#cv", label: "CV" },
    { href: "#contact", label: "Contact" },
  ],
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, toggleLocale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Combines mountain and wave icons for adventure + diving theme */}
          <a href="#home" className="flex items-center gap-2">
            <div className="flex items-center">
              <Mountain className={`h-5 w-5 ${scrolled ? "text-emerald-600" : "text-emerald-300"}`} />
              <Waves className={`h-5 w-5 -ml-1 ${scrolled ? "text-blue-600" : "text-blue-300"}`} />
            </div>
            <span className={`font-semibold text-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              MJ Fuentes
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks[locale].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className={`ml-2 h-8 ${
                scrolled
                  ? "border-border bg-background text-foreground hover:bg-accent"
                  : "border-white/70 bg-transparent text-primary-foreground hover:bg-white/15 hover:text-primary-foreground"
              }`}
              onClick={toggleLocale}
              aria-label="Toggle language"
            >
              {locale === "es" ? "EN" : "ES"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col py-4">
              <div className="px-4 pb-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleLocale}
                  className="w-full"
                >
                  {locale === "es" ? "Change to English" : "Cambiar a español"}
                </Button>
              </div>
              {navLinks[locale].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
