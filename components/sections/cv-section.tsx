"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

/**
 * CV Section (Section 8)
 * Embed or link to CV with download option
 */

export function CVSection() {
  const { locale } = useLanguage();
  const t = {
    es: {
      overline: "Documento profesional",
      title: "Currículum Vitae",
      role: "Estudiante de Turismo Aventura",
      text:
        "Descarga tu CV en PDF. Incluye formación académica, certificaciones, experiencia laboral y competencias clave.",
      download: "Descargar CV en Español",
      downloadEn: "Download CV in English",
      updated: "Última actualización: marzo 2026",
      bilingual: "Disponible en español e inglés",
    },
    en: {
      overline: "Professional Document",
      title: "Curriculum Vitae",
      role: "Adventure Tourism Student",
      text:
        "Download your CV as PDF. It includes education, certifications, work experience, and key competencies.",
      download: "Download CV in Spanish",
      downloadEn: "Download CV in English",
      updated: "Last updated: March 2026",
      bilingual: "Available in Spanish and English",
    },
  }[locale];

  const handleDownloadCV = (lang: "es" | "en") => {
    const fileName = lang === "es" ? "CV_Maria_Jose_Fuentes_ES.pdf" : "CV_Maria_Jose_Fuentes_EN.pdf";
    const link = document.createElement("a");
    link.href = `/documents/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="cv" className="py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">
            {t.overline}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.title}
          </h2>
        </div>

        {/* CV Preview Card */}
        <Card className="border-border bg-card overflow-hidden">
          <CardContent className="p-0">
            {/* PDF Preview */}
            <div className="aspect-[8.5/11] bg-secondary overflow-hidden">
              <iframe
                src={`/documents/${locale === "es" ? "CV_Maria_Jose_Fuentes_ES.pdf" : "CV_Maria_Jose_Fuentes_EN.pdf"}#toolbar=0`}
                className="h-full w-full border-none"
                title={locale === "es" ? "Currículum Vitae María José Fuentes" : "Curriculum Vitae Maria Jose Fuentes"}
              />
            </div>

            {/* Action Buttons */}
            <div className="p-6 border-t border-border bg-card flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full sm:w-auto"
                onClick={() => handleDownloadCV("es")}
              >
                <Download className="h-4 w-4" />
                {t.download}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 w-full sm:w-auto"
                onClick={() => handleDownloadCV("en")}
              >
                <Download className="h-4 w-4" />
                {t.downloadEn}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <p className="mt-6 text-center text-sm text-muted-foreground">
          {t.updated} • {t.bilingual}
        </p>
      </div>
    </section>
  );
}
