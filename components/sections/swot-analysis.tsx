"use client";

import { TrendingUp, TrendingDown, Lightbulb, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

/**
 * SWOT Analysis Section (Section 9)
 * A 4-card layout showing Strengths, Weaknesses, Opportunities, and Threats
 * Important for academic evaluation and self-awareness demonstration
 */

const swotData = {
  es: [
    {
      title: "Fortalezas",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100 text-emerald-700",
      items: [
        "Experiencia previa en atención al cliente, lo que favorece la calidad en el servicio y la relación con usuarios",
        "Habilidades comunicacionales desarrolladas, destacando la sociabilidad y facilidad para interactuar con distintos perfiles de personas",
        "Alta motivación por el trabajo en terreno y actividades al aire libre, coherente con el perfil del turismo aventura",
        "Formación académica en Turismo Aventura, con adquisición progresiva de competencias técnicas en el área",
        "Experiencia práctica en actividades de buceo, lo que aporta diferenciación dentro del rubro",
        "Actitud proactiva frente al aprendizaje y mejora continua",
        "Capacidad de adaptación a distintos contextos y grupos de trabajo",
      ],
    },
    {
      title: "Debilidades",
      icon: TrendingDown,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100 text-blue-700",
      items: [
        "Necesidad de reforzar competencias en asignaturas técnicas específicas, como técnicas de guiado",
        "Experiencia laboral formal limitada dentro del rubro turístico",
        "Nivel de inglés en desarrollo, lo que puede limitar la atención a turistas extranjeros",
        "Falta de especialización definida dentro del área del turismo aventura",
        "Red de contactos profesionales aún en proceso de construcción",
      ],
    },
    {
      title: "Oportunidades",
      icon: Lightbulb,
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      iconBg: "bg-teal-100 text-teal-700",
      items: [
        "Crecimiento sostenido del turismo aventura y ecoturismo a nivel nacional e internacional",
        "Demanda por profesionales con habilidades interpersonales y enfoque en la experiencia del cliente",
        "Diversidad de espacios laborales: centros de buceo, agencias de turismo, parques naturales, entre otros",
        "Posibilidad de acceder a certificaciones complementarias (primeros auxilios, guías especializados, buceo avanzado)",
        "Uso de plataformas digitales y redes sociales para el desarrollo de marca personal y promoción de servicios",
        "Incremento de empleabilidad en temporadas altas del sector turístico",
        "Oportunidades de aprendizaje en terreno y trabajo colaborativo",
      ],
    },
    {
      title: "Amenazas",
      icon: AlertTriangle,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      iconBg: "bg-cyan-100 text-cyan-700",
      items: [
        "Alta competitividad en el mercado laboral del turismo",
        "Condiciones laborales variables, con alta presencia de empleos temporales o estacionales",
        "Exigencias físicas propias de las actividades de turismo aventura",
        "Dependencia de factores externos como condiciones climáticas",
        "Requisitos técnicos y certificaciones obligatorias en ciertas áreas del rubro",
        "Inestabilidad en los ingresos económicos según la demanda turística",
        "Preferencia del mercado por personal con mayor experiencia previa",
      ],
    },
  ],
  en: [
    {
      title: "Strengths",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100 text-emerald-700",
      items: [
        "Previous customer service experience, which promotes service quality and positive user relationships",
        "Well-developed communication skills, highlighting sociability and ability to interact with diverse profiles of people",
        "High motivation for field work and outdoor activities, consistent with adventure tourism profile",
        "Academic training in Adventure Tourism, with progressive acquisition of technical skills in the field",
        "Practical experience in diving activities, which provides differentiation within the industry",
        "Proactive attitude toward learning and continuous improvement",
        "Ability to adapt to different contexts and working groups",
      ],
    },
    {
      title: "Weaknesses",
      icon: TrendingDown,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100 text-blue-700",
      items: [
        "Need to strengthen competencies in specific technical subjects, such as guiding techniques",
        "Limited formal work experience within the tourism industry",
        "English language skills still developing, which may limit service to foreign tourists",
        "Lack of defined specialization within adventure tourism",
        "Professional network still under construction",
      ],
    },
    {
      title: "Opportunities",
      icon: Lightbulb,
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      iconBg: "bg-teal-100 text-teal-700",
      items: [
        "Sustained growth of adventure tourism and ecotourism at national and international levels",
        "Demand for professionals with interpersonal skills and customer experience focus",
        "Diversity of work environments: diving centers, tourism agencies, natural parks, among others",
        "Possibility of accessing complementary certifications (first aid, specialized guides, advanced diving)",
        "Use of digital platforms and social media for personal branding and service promotion",
        "Increased employability during peak tourism seasons",
        "Learning opportunities in field work and collaborative teamwork",
      ],
    },
    {
      title: "Threats",
      icon: AlertTriangle,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      iconBg: "bg-cyan-100 text-cyan-700",
      items: [
        "High competitiveness in the tourism job market",
        "Variable working conditions, with high presence of temporary or seasonal employment",
        "Physical demands inherent to adventure tourism activities",
        "Dependence on external factors such as weather conditions",
        "Technical requirements and mandatory certifications in certain areas of the industry",
        "Economic income instability based on tourism demand",
        "Market preference for personnel with greater prior experience",
      ],
    },
  ],
};

export function SwotAnalysisSection() {
  const { locale } = useLanguage();
  const t = {
    es: {
      overline: "Autoevaluación",
      title: "Análisis FODA",
      description:
        "Evaluación personal de fortalezas, debilidades, oportunidades y amenazas para mi desarrollo profesional en turismo aventura.",
    },
    en: {
      overline: "Self Assessment",
      title: "SWOT Analysis",
      description:
        "A personal evaluation of strengths, weaknesses, opportunities, and threats as I develop my career in adventure tourism.",
    },
  }[locale];

  return (
    <section id="swot" className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-2">
            {t.overline}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {t.description}
          </p>
        </div>

        {/* SWOT Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {swotData[locale].map((item, index) => (
            <Card
              key={item.title}
              className={`${item.bgColor} ${item.borderColor} border-2 hover:shadow-lg transition-all duration-300`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${item.iconBg}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.items.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-current flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
