"use client";

import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

/**
 * Tourist Landmarks Section (Section 6)
 * Visually appealing section showcasing notable destinations
 * Organized by country: Chile and Argentina
 */

interface Country {
  name: string;
  flag: string;
  landmarks: string[];
}

const countriesByLocale: Record<"es" | "en", Country[]> = {
  es: [
    {
      name: "Chile",
      flag: "🇨🇱",
      landmarks: [
        "Torres del Paine",
        "San Pedro de Atacama",
        "Valle de la Luna",
        "Parque Nacional Lauca",
        "Cajón del Maipo",
        "Carretera Austral",
        "Isla de Chiloé",
        "Parque Nacional La Campana",
        "Zona de los Lagos",
      ],
    },
    {
      name: "Argentina",
      flag: "🇦🇷",
      landmarks: [
        "Glaciar Perito Moreno",
        "Cataratas del Iguazú",
        "Bariloche",
        "Región vitivinícola de Mendoza",
        "Ushuaia",
        "Salta y Jujuy",
        "Parque Nacional Los Glaciares",
        "Fitz Roy",
      ],
    },
  ],
  en: [
    {
      name: "Chile",
      flag: "🇨🇱",
      landmarks: [
        "Torres del Paine",
        "San Pedro de Atacama",
        "Valley of the Moon",
        "Lauca National Park",
        "Cajon del Maipo",
        "Carretera Austral",
        "Chiloe Island",
        "La Campana National Park",
        "Lake District",
      ],
    },
    {
      name: "Argentina",
      flag: "🇦🇷",
      landmarks: [
        "Perito Moreno Glacier",
        "Iguazu Falls",
        "Bariloche",
        "Mendoza Wine Region",
        "Ushuaia",
        "Salta and Jujuy",
        "Los Glaciares National Park",
        "Fitz Roy",
      ],
    },
  ],
};

export function LandmarksSection() {
  const { locale } = useLanguage();
  const t = {
    es: {
      overline: "Destinos",
      title: "Lugares turísticos",
      description:
        "Destinos relevantes que he estudiado y donde proyecto desarrollarme profesionalmente en turismo aventura.",
      note:
        "Estos destinos representan áreas clave de estudio en turismo aventura, con paisajes diversos y oportunidades turísticas en Sudamérica.",
    },
    en: {
      overline: "Destinations",
      title: "Tourist Landmarks",
      description:
        "Notable destinations I have studied and aspire to work in as an adventure tourism professional.",
      note:
        "These destinations represent key areas of study in adventure tourism, showcasing diverse landscapes and tourism opportunities in South America.",
    },
  }[locale];

  return (
    <section id="landmarks" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">
            {t.overline}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            {t.description}
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {countriesByLocale[locale].map((country) => (
            <Card
              key={country.name}
              className="border-border bg-card overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <CardHeader className="bg-primary/5 border-b border-border">
                <CardTitle className="flex items-center gap-3 text-card-foreground">
                  <span className="text-3xl">{country.flag}</span>
                  <span>{country.name}</span>
                  <MapPin className="h-5 w-5 text-primary ml-auto" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                  {country.landmarks.map((landmark) => (
                    <Badge
                      key={landmark}
                      variant="outline"
                      className="border-primary/30 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default py-1.5 px-3"
                    >
                      {landmark}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Note */}
        <p className="mt-8 text-center text-sm text-muted-foreground italic">
          {t.note}
        </p>
      </div>
    </section>
  );
}
