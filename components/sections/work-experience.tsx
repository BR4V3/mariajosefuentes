"use client";

import { Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

/**
 * Work Experience Section (Section 4)
 * Professional experience displayed as cards
 * Includes: Scuba Adventure, Retail experience, Valshopper
 */

const workExperience = {
  es: [
    {
      title: "Asistente de centro de buceo",
      company: "Scuba Adventure Diving Center",
      period: "Enero 2025",
      description:
        "Apoyo en la ejecución de actividades en terreno, preparación y organización de equipos, atención y orientación de clientes, y soporte logístico en salidas recreativas.",
      skills: ["Atención al cliente", "Organización de equipos", "Protocolos de seguridad", "Logística"],
    },
    {
      title: "Atención y apoyo en retail",
      company: "Ripley / Paris",
      period: "2019 - 2024",
      description:
        "Experiencia en atención directa al cliente, organización y reposición de productos, apoyo en ventas y control de inventario, trabajando en equipo en entornos dinámicos.",
      skills: ["Atención al cliente", "Ventas", "Trabajo en equipo", "Control de inventario"],
    },
    {
      title: "Personal shopper",
      company: "Valshopper",
      period: "2024",
      description:
        "Gestión eficiente del tiempo y coordinación de compras con enfoque en calidad de servicio y cumplimiento oportuno de entregas.",
      skills: ["Gestión del tiempo", "Comunicación", "Resolución de problemas", "Servicio al cliente"],
    },
  ],
  en: [
    {
      title: "Diving Center Assistant",
      company: "Scuba Adventure Diving Center",
      period: "January 2025",
      description:
        "Assisted in field activities execution, equipment preparation and organization, customer service and guidance, and logistic support in recreational outings.",
      skills: ["Customer Service", "Equipment Organization", "Safety Protocols", "Logistics"],
    },
    {
      title: "Retail Customer Service and Support",
      company: "Ripley / Paris",
      period: "2019 - 2024",
      description:
        "Direct customer service, product organization and restocking, sales support, and inventory control while collaborating in dynamic teams.",
      skills: ["Customer Service", "Sales", "Teamwork", "Inventory Control"],
    },
    {
      title: "Personal Shopper",
      company: "Valshopper",
      period: "2024",
      description:
        "Efficient time management and shopping coordination with a strong focus on service quality and on-time delivery.",
      skills: ["Time Management", "Communication", "Problem Solving", "Customer Satisfaction"],
    },
  ],
};

export function WorkExperienceSection() {
  const { locale } = useLanguage();
  const t = {
    es: {
      overline: "Trayectoria profesional",
      title: "Experiencia laboral",
    },
    en: {
      overline: "Professional Background",
      title: "Work Experience",
    },
  }[locale];

  return (
    <section id="work" className="py-20 bg-background">
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

        {/* Experience Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workExperience[locale].map((job, index) => (
            <Card
              key={job.company}
              className="group border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-card-foreground">
                      {job.title}
                    </CardTitle>
                    <p className="text-sm text-primary font-medium">
                      {job.company}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {job.period}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
