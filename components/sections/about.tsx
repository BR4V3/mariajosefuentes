"use client";

import { MessageCircle, Users, RefreshCw, Mountain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

/**
 * About Me Section (Section 2)
 * Professional description with highlighted skills:
 * Communication, Teamwork, Adaptability, Outdoor Experience
 */

const highlights = {
  es: [
    {
      icon: MessageCircle,
      title: "Comunicación",
      description: "Comunicación clara y efectiva con clientes y equipos en distintos escenarios",
    },
    {
      icon: Users,
      title: "Trabajo en equipo",
      description: "Enfoque colaborativo para la coordinación grupal y el liderazgo en actividades outdoor",
    },
    {
      icon: RefreshCw,
      title: "Adaptabilidad",
      description: "Capacidad para ajustarme rápidamente a cambios y desafíos inesperados en terreno",
    },
    {
      icon: Mountain,
      title: "Experiencia outdoor",
      description: "Experiencia práctica en distintos entornos naturales y actividades de aventura",
    },
  ],
  en: [
    {
      icon: MessageCircle,
      title: "Communication",
      description: "Clear and effective communication with clients and team members in any situation",
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Collaborative approach to group dynamics and leadership in outdoor settings",
    },
    {
      icon: RefreshCw,
      title: "Adaptability",
      description: "Quick adjustment to changing conditions and unexpected challenges in the field",
    },
    {
      icon: Mountain,
      title: "Outdoor Experience",
      description: "Extensive hands-on experience in various natural environments and activities",
    },
  ],
};

export function AboutSection() {
  const { locale } = useLanguage();
  const t = {
    es: {
      overline: "Conóceme",
      title: "Sobre mí",
      description:
        "Me caracterizo por una comunicación efectiva, organización operativa y orientación al servicio, competencias que me permiten diseñar y conducir experiencias turísticas seguras, educativas y de alto estándar. Mi proyección profesional está enfocada en el turismo aventura y subacuático, integrando guiado, sostenibilidad y calidad en la experiencia del visitante.",
    },
    en: {
      overline: "Get to Know Me",
      title: "About Me",
      description:
        "I am recognized for effective communication, operational organization, and a service-oriented approach, which allow me to design and deliver safe, educational, and high-standard tourism experiences. My professional development is focused on adventure and underwater tourism, integrating guiding, sustainability, and visitor experience quality.",
    },
  }[locale];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">
            {t.overline}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.title}
          </h2>
        </div>

        {/* Professional Description */}
        <div className="mb-16 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            {t.description}
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights[locale].map((item, index) => (
            <Card
              key={item.title}
              className="group border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
