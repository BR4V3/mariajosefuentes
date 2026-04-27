"use client";

import { useState } from "react";
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

/**
 * Hero Section (Section 1)
 * Full-width background image with name, title, and professional summary
 * Includes CTA buttons for viewing experience and downloading CV
 */

export function HeroSection() {
  const [imageError, setImageError] = useState(false);
  const { locale } = useLanguage();
  const t = {
    es: {
      subtitle: "Estudiante de Turismo Aventura",
      profileAlt: "Foto de perfil de María José Fuentes",
      description:
        "Estudiante de Técnico en Turismo Aventura con formación práctica en montaña, medios acuáticos y guiado interpretativo. Cuento con experiencia en atención al cliente y participación activa en operaciones de terreno, aplicando protocolos de seguridad, trabajo colaborativo y adaptación a distintos contextos operativos.",
      viewExperience: "Ver experiencia",
      downloadCV: "Descargar CV",
    },
    en: {
      subtitle: "Adventure Tourism Student",
      profileAlt: "Profile photo of Maria Jose Fuentes",
      description:
        "Adventure Tourism Technician student with practical training in mountain environments, aquatic activities, and interpretive guiding. I have customer service experience and active participation in field operations, applying safety protocols, collaborative teamwork, and adaptability across diverse operational contexts.",
      viewExperience: "View Experience",
      downloadCV: "Download CV",
    },
  }[locale];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-adventure.jpg')" }}
      >
        {/* Gradient overlay combining ocean blue and emerald green */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/70 via-teal-900/60 to-blue-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary-foreground/80 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {t.subtitle}
        </p>
        
        <div className="mb-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-2 md:gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
          <div className="flex aspect-square h-48 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary-foreground/70 bg-primary-foreground/10 shadow-lg sm:h-56 md:h-72">
            {!imageError ? (
              <img
                src="/images/profile-photo.jpg"
                alt={t.profileAlt}
                className="h-full w-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
                <span className="text-6xl font-bold">MJF</span>
              </div>
            )}
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl text-balance">
            María José Fuentes
          </h1>
        </div>
        
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 text-pretty">
          {t.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
          >
            <a href="#experience">
              {t.viewExperience}
              <ArrowDown className="h-4 w-4" />
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground gap-2"
          >
            <a href="#cv">
              <Download className="h-4 w-4" />
              {t.downloadCV}
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary-foreground/70" />
      </div>
    </section>
  );
}
