"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Calendar, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

/**
 * Field Experience Section (Section 3)
 * Structured by semesters with activities, descriptions, skills, and reflections
 * This section is critical for academic evaluation
 */

interface Activity {
  title: string;
  description: string;
  skills: string[];
  reflection: string;
  location?: string;
  date?: string;
}

interface Semester {
  name: string;
  period: string;
  activities: Activity[];
}

const semesters: Record<"es" | "en", Semester[]> = {
  es: [
    {
      name: "Semestre 1",
      period: "Marzo - Julio 2024",
      activities: [
        {
          title: "Introducción a la orientación outdoor",
          description:
            "Aprendizaje de técnicas base de orientación: lectura de mapas, uso de brújula y manejo inicial de GPS en entornos controlados.",
          skills: ["Lectura de mapas", "Navegación con brújula", "Uso de GPS", "Análisis de terreno"],
          reflection:
            "Esta experiencia me mostró que la orientación es una competencia crítica en turismo aventura. No es solo una habilidad técnica: es una base de seguridad para guiar grupos con confianza.",
          location: "Cajón del Maipo",
          date: "Abril 2024",
        },
        {
          title: "Primeros auxilios y seguridad en naturaleza",
          description:
            "Entrenamiento en primeros auxilios en zonas remotas, protocolos de emergencia y evaluación de riesgos para actividades al aire libre.",
          skills: ["Primeros auxilios", "Respuesta a emergencias", "Evaluación de riesgos", "Protocolos de seguridad"],
          reflection:
            "Comprendí que la seguridad de los participantes debe ser siempre la prioridad. Esta formación fortaleció mi criterio para tomar decisiones responsables en terreno.",
          location: "Campus Duoc UC",
          date: "Mayo 2024",
        },
      ],
    },
    {
      name: "Semestre 2",
      period: "Agosto - Diciembre 2024",
      activities: [
        {
          title: "Entrenamiento en liderazgo de trekking",
          description:
            "Conducción de grupos en salidas de día, practicando manejo de ritmo, coordinación de equipo e interpretación del entorno.",
          skills: ["Liderazgo de grupos", "Gestión de ritmo", "Interpretación ambiental", "Comunicación"],
          reflection:
            "Liderar grupos de trekking confirmó la importancia de la adaptabilidad. Cada grupo tiene ritmos y necesidades distintas, y el guiado debe equilibrar seguridad, experiencia y motivación.",
          location: "Parque Nacional La Campana",
          date: "Septiembre 2024",
        },
        {
          title: "Fundamentos de kayak",
          description:
            "Práctica de técnicas de paleo, seguridad en agua y maniobras de auto-rescate en condiciones controladas.",
          skills: ["Técnica de paleo", "Seguridad acuática", "Auto-rescate", "Mantenimiento de equipo"],
          reflection:
            "Las actividades acuáticas requieren lectura constante de condiciones y prevención activa. Esta experiencia reforzó mi respeto por el entorno natural y la mejora continua.",
          location: "Lago Rapel",
          date: "Octubre 2024",
        },
      ],
    },
    {
      name: "Semestre 3",
      period: "Marzo - Julio 2025",
      activities: [
        {
          title: "Planificación de expedición de varios días",
          description:
            "Planificación y ejecución colaborativa de una salida extendida con logística, alimentación y protocolos de contingencia.",
          skills: ["Logística de expedición", "Planificación de alimentación", "Coordinación de equipo", "Plan de emergencia"],
          reflection:
            "La planificación integral fue clave para entender la complejidad operativa del turismo aventura. El éxito depende de anticipación, coordinación y claridad en los roles.",
          location: "Reserva Nacional Altos de Lircay",
          date: "Abril 2025",
        },
        {
          title: "Prácticas de turismo sostenible",
          description:
            "Aplicación de principios Leave No Trace y buenas prácticas de sostenibilidad durante actividades en terreno.",
          skills: ["Leave No Trace", "Cuidado ambiental", "Prácticas sostenibles", "Educación turística"],
          reflection:
            "La sostenibilidad es parte esencial del trabajo en turismo aventura. Cuidar el entorno y educar a los visitantes garantiza experiencias responsables a largo plazo.",
          location: "Distintas ubicaciones",
          date: "Junio 2025",
        },
      ],
    },
    {
      name: "Semestre 4",
      period: "Agosto - Diciembre 2025",
      activities: [
        {
          title: "Terreno Bullileo: rescate e integración operativa",
          description:
            "Planificación y ejecución de un escenario de rescate en terreno, con asignación de roles, logística de equipo, aplicación de primeros auxilios, interpretación ambiental y travesía inicial en kayak.",
          skills: ["Gestión de rescate", "Primeros auxilios", "Coordinación de roles", "Travesía en kayak"],
          reflection:
            "Esta experiencia exigió aplicar competencias técnicas en un contexto de mayor presión operativa, fortaleciendo la toma de decisiones, la coordinación grupal y la seguridad en actividades de turismo aventura.",
          location: "Bullileo",
          date: "Septiembre 2025",
        },
        {
          title: "Integración final de competencias",
          description:
            "Salida multijornada con trekking en Enladrillado, interpretación, orientación con GPS, cartografía y aplicación de principios NDR; posteriormente, enroque y travesía en kayak por el río Maule.",
          skills: ["Orientación GPS", "Cartografía", "NDR", "Planificación operativa"],
          reflection:
            "Fue una instancia de cierre donde integré gestión, administración y ejecución técnica en terreno real, consolidando competencias clave para desempeñarme profesionalmente en turismo aventura.",
          location: "Enladrillado y río Maule",
          date: "Noviembre 2025",
        },
      ],
    },
  ],
  en: [
    {
      name: "Semester 1",
      period: "March - July 2024",
      activities: [
        {
          title: "Introduction to Outdoor Navigation",
          description:
            "Learned fundamental navigation techniques including map reading, compass use, and GPS operation in controlled outdoor environments.",
          skills: ["Map Reading", "Compass Navigation", "GPS Operation", "Terrain Analysis"],
          reflection:
            "This experience taught me the critical importance of navigation skills in adventure tourism. Being able to navigate confidently in the wilderness is a fundamental safety requirement.",
          location: "Cajon del Maipo",
          date: "April 2024",
        },
        {
          title: "Basic First Aid and Wilderness Safety",
          description:
            "Completed training in wilderness first aid, emergency response protocols, and risk assessment for outdoor activities.",
          skills: ["First Aid", "Emergency Response", "Risk Assessment", "Safety Protocols"],
          reflection:
            "Understanding first aid and safety protocols reinforced my belief that participant safety must always come first in adventure tourism operations.",
          location: "Duoc UC Campus",
          date: "May 2024",
        },
      ],
    },
    {
      name: "Semester 2",
      period: "August - December 2024",
      activities: [
        {
          title: "Trekking Leadership Training",
          description:
            "Led small groups on day hikes, practicing pace management, team coordination, and environmental interpretation.",
          skills: ["Group Leadership", "Pace Management", "Environmental Interpretation", "Communication"],
          reflection:
            "Leading trekking groups highlighted the importance of adaptability. Every group is different, and guiding must balance safety, motivation, and a positive experience.",
          location: "La Campana National Park",
          date: "September 2024",
        },
        {
          title: "Kayaking Fundamentals",
          description:
            "Participated in kayaking instruction focused on paddling technique, water safety, and basic self-rescue maneuvers.",
          skills: ["Paddling Technique", "Water Safety", "Self-Rescue", "Equipment Maintenance"],
          reflection:
            "Water-based activities require constant environmental awareness and prevention. This experience strengthened my respect for natural conditions and continuous improvement.",
          location: "Rapel Lake",
          date: "October 2024",
        },
      ],
    },
    {
      name: "Semester 3",
      period: "March - July 2025",
      activities: [
        {
          title: "Multi-day Expedition Planning",
          description:
            "Collaborated on planning and executing a multi-day trekking experience, including logistics, meals, and contingency protocols.",
          skills: ["Expedition Logistics", "Meal Planning", "Team Coordination", "Emergency Planning"],
          reflection:
            "This stage helped me understand the operational complexity of adventure tourism. Success depends on preparation, coordination, and clear responsibilities.",
          location: "Altos de Lircay National Reserve",
          date: "April 2025",
        },
        {
          title: "Sustainable Tourism Practices",
          description:
            "Applied Leave No Trace principles and sustainability practices during field activities.",
          skills: ["Leave No Trace", "Environmental Stewardship", "Sustainable Practices", "Tourism Education"],
          reflection:
            "Sustainability is essential in adventure tourism. Protecting natural areas and educating visitors supports responsible experiences in the long term.",
          location: "Various Locations",
          date: "June 2025",
        },
      ],
    },
    {
      name: "Semester 4",
      period: "August - December 2025",
      activities: [
        {
          title: "Bullileo Fieldwork: rescue and operational integration",
          description:
            "Planned and executed a field rescue scenario including role allocation, team logistics, first aid application, environmental interpretation, and an initial kayak traverse.",
          skills: ["Rescue management", "First aid", "Role coordination", "Kayak traverse"],
          reflection:
            "This experience required applying technical competencies under higher operational pressure, strengthening decision-making, team coordination, and safety in adventure tourism activities.",
          location: "Bullileo",
          date: "September 2025",
        },
        {
          title: "Final competency integration",
          description:
            "Multi-day outing including trekking in Enladrillado, interpretation, GPS orientation, cartography, and Leave No Trace practices; followed by enroque and a kayak traverse on the Maule River.",
          skills: ["GPS orientation", "Cartography", "Leave No Trace", "Operational planning"],
          reflection:
            "This final stage allowed me to integrate management, administration, and technical execution in real field conditions, consolidating key competencies for professional performance in adventure tourism.",
          location: "Enladrillado and Maule River",
          date: "November 2025",
        },
      ],
    },
  ],
};

function ActivityCard({ activity, reflectionLabel }: { activity: Activity; reflectionLabel: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-lg text-card-foreground">
              {activity.title}
            </CardTitle>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {activity.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {activity.location}
                </span>
              )}
              {activity.date && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {activity.date}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{activity.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {activity.skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="bg-secondary text-secondary-foreground"
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="border-t border-border pt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full justify-between text-primary hover:text-primary/80"
          >
            <span className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              {reflectionLabel}
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </Button>
          {isExpanded && (
            <div className="mt-3 p-4 bg-muted rounded-lg animate-in slide-in-from-top-2">
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                &quot;{activity.reflection}&quot;
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function FieldExperienceSection() {
  const { locale } = useLanguage();
  const t = {
    es: {
      overline: "Trayectoria académica",
      title: "Experiencia en terreno",
      description:
        "Resumen de experiencias prácticas durante la formación en Turismo Aventura, organizado por semestre.",
      reflectionLabel: "Reflexión personal",
    },
    en: {
      overline: "Academic Journey",
      title: "Field Experience",
      description:
        "A comprehensive overview of my hands-on learning experiences throughout Adventure Tourism studies, organized by semester.",
      reflectionLabel: "Personal Reflection",
    },
  }[locale];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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

        <div className="space-y-12">
          {semesters[locale].map((semester) => (
            <div key={semester.name}>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-border" />
                <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full">
                  <span className="font-semibold">{semester.name}</span>
                  <span className="text-sm opacity-80">({semester.period})</span>
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {semester.activities.map((activity) => (
                  <ActivityCard key={activity.title} activity={activity} reflectionLabel={t.reflectionLabel} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
