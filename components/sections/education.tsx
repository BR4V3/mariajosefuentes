"use client";

import { GraduationCap, Award, Shield, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

/**
 * Education & Certifications Section (Section 5)
 * Academic credentials and professional certifications
 * Includes: Adventure Tourism at Duoc UC, Massage Diploma, Diving certifications
 */

const education = {
  es: [
    {
      icon: GraduationCap,
      title: "Técnico en Turismo Aventura",
      institution: "Duoc UC",
      period: "2024 - Presente",
      description: "Programa orientado a actividades outdoor, guiado turístico, seguridad operacional y turismo sostenible.",
      status: "En curso",
    },
    {
      icon: Heart,
      title: "Diplomado en Masoterapia Clínica",
      institution: "Instituto de Terapias",
      period: "2020 - 2022",
      description: "Formación en técnicas de masaje terapéutico y de relajación con enfoque en bienestar integral.",
      status: "Finalizado",
    },
    {
      icon: Award,
      title: "Enseñanza Media",
      institution: "Educación secundaria",
      period: "Completada",
      description: "Base académica para el desarrollo de competencias profesionales y continuidad de estudios.",
      status: "Finalizado",
    },
  ],
  en: [
    {
      icon: GraduationCap,
      title: "Adventure Tourism Technician",
      institution: "Duoc UC",
      period: "2024 - Present",
      description: "Program focused on outdoor activities, guiding, operational safety, and sustainable tourism.",
      status: "In Progress",
    },
    {
      icon: Heart,
      title: "Diploma in Clinical Massage Therapy",
      institution: "Instituto de Terapias",
      period: "2020 - 2022",
      description: "Training in therapeutic and relaxation massage techniques with a holistic wellness approach.",
      status: "Completed",
    },
    {
      icon: Award,
      title: "High School Diploma",
      institution: "Secondary Education",
      period: "Completed",
      description: "Academic foundation for professional development and continuing studies.",
      status: "Completed",
    },
  ],
};

const certifications = {
  es: [
    {
      icon: Shield,
      title: "Open Water Diver",
      issuer: "PADI",
      year: "2025",
      description: "Certificación inicial de buceo recreativo hasta 18 metros.",
    },
    {
      icon: Shield,
      title: "Advanced Open Water",
      issuer: "PADI",
      year: "2026",
      description: "Desarrollo de habilidades avanzadas de buceo, navegación y control en profundidad.",
    },
    {
      icon: Shield,
      title: "Rescue Diver",
      issuer: "PADI",
      year: "2026",
      description: "Entrenamiento en prevención y respuesta ante emergencias en contexto de buceo.",
    },
  ],
  en: [
    {
      icon: Shield,
      title: "Open Water Diver",
      issuer: "PADI",
      year: "2025",
      description: "Entry-level recreational diving certification up to 18 meters.",
    },
    {
      icon: Shield,
      title: "Advanced Open Water",
      issuer: "PADI",
      year: "2026",
      description: "Advanced diving development focused on navigation, depth control, and specialty skills.",
    },
    {
      icon: Shield,
      title: "Rescue Diver",
      issuer: "PADI",
      year: "2026",
      description: "Training in emergency prevention and response within diving environments.",
    },
  ],
};

export function EducationSection() {
  const { locale } = useLanguage();
  const t = {
    es: {
      overline: "Formación académica",
      title: "Educación y certificaciones",
      educationTitle: "Educación",
      certificationsTitle: "Certificaciones",
    },
    en: {
      overline: "Academic Background",
      title: "Education & Certifications",
      educationTitle: "Education",
      certificationsTitle: "Certifications",
    },
  }[locale];

  return (
    <section id="education" className="py-20 bg-muted">
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

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            {t.educationTitle}
          </h3>
          <div className="grid gap-6">
            {education[locale].map((item) => (
              <Card
                key={item.title}
                className="border-border bg-card hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shrink-0">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-lg font-semibold text-card-foreground">
                          {item.title}
                        </h4>
                        <span className="px-2 py-0.5 text-xs font-medium bg-accent text-accent-foreground rounded-full">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-primary font-medium">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mb-2">{item.period}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            {t.certificationsTitle}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {certifications[locale].map((cert, index) => (
              <Card
                key={cert.title}
                className="group border-border bg-card hover:shadow-md transition-all hover:-translate-y-0.5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <cert.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-primary">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground mb-2">{cert.year}</p>
                      <p className="text-sm text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
