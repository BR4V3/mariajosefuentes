"use client";

import { Image as ImageIcon, Video, Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/components/language-provider";

/**
 * Multimedia / Portfolio Section (Section 7)
 * Accordion by semesters with terrain cards
 * Each terrain card includes media placeholder, title, and short reflection
 */

interface TerrainMediaItem {
  type: "image" | "video";
  src?: string;
  label: string;
}

interface TerrainItem {
  id: number;
  title: string;
  reflection: string;
  mediaItems: TerrainMediaItem[];
}

interface SemesterPortfolio {
  semester: string;
  description: string;
  period: string;
  terrains: TerrainItem[];
}

const portfolioBySemester: Record<"es" | "en", SemesterPortfolio[]> = {
  es: [
    {
      semester: "Semestre 1",
      description: "Inicio de formación técnica en terreno con foco en seguridad y orientación.",
      period: "Marzo - Julio 2024",
      terrains: [
        {
          id: 1,
          title: "Terreno Santuario de la Naturaleza",
          reflection:
            "Este terreno me permitió relacionar observación del entorno, desplazamiento y toma de decisiones seguras en un contexto natural real.",
          mediaItems: [
            {
              type: "image",
              src: "/videos/semestre-1/terrero-santuario-de-la-naturaleza/IMG_1293.jpg",
              label: "Registro fotográfico del Santuario de la Naturaleza",
            },
            {
              type: "video",
              src: "/videos/semestre-1/terrero-santuario-de-la-naturaleza/santuario-de-la-naturaleza.MP4",
              label: "Video del terreno Santuario de la Naturaleza",
            },
          ],
        },
        {
          id: 2,
          title: "Terreno Técnicas de Marcha",
          reflection:
            "Aquí reforcé técnica de desplazamiento, control del esfuerzo y lectura del ritmo grupal durante el avance en terreno.",
          mediaItems: [
            {
              type: "image",
              src: "/videos/semestre-1/terrero-tecnicas-de-marcha/IMG_1620.jpg",
              label: "Registro fotográfico técnicas de marcha 1",
            },
            {
              type: "image",
              src: "/videos/semestre-1/terrero-tecnicas-de-marcha/IMG_1621.jpg",
              label: "Registro fotográfico técnicas de marcha 2",
            },
            {
              type: "image",
              src: "/videos/semestre-1/terrero-tecnicas-de-marcha/IMG_1622.jpg",
              label: "Registro fotográfico técnicas de marcha 3",
            },
            {
              type: "video",
              src: "/videos/semestre-1/terrero-tecnicas-de-marcha/tecnicas-de-marcha.mp4",
              label: "Video del terreno técnicas de marcha",
            },
          ],
        },
        {
          id: 3,
          title: "Terreno NDR",
          reflection:
            "Este terreno aportó experiencia práctica adicional y sirve como respaldo audiovisual del progreso durante el semestre.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-1/terrereno-ndr/ndr-terreno-01.mp4",
              label: "Video del terreno NDR",
            },
          ],
        },
      ],
    },
    {
      semester: "Semestre 2",
      description: "Aplicación práctica de liderazgo y control de actividades outdoor en terreno.",
      period: "Agosto - Diciembre 2024",
      terrains: [
        {
          id: 1,
          title: "Terreno El Manzano",
          reflection:
            "Este terreno inicial del semestre reforzó mi adaptación al entorno y la toma de decisiones en salidas de terreno.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terreno-el-manzano/terreno-el-manzano.mp4",
              label: "Video del terreno El Manzano",
            },
          ],
        },
        {
          id: 2,
          title: "Terreno Kayak",
          reflection:
            "Este terreno fortaleció mi control técnico en agua y la coordinación del grupo en contextos acuáticos.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terreno-kayak/terreno-kayak.mp4",
              label: "Video del terreno Kayak",
            },
          ],
        },
        {
          id: 3,
          title: "Terreno Birdwatching",
          reflection:
            "Desarrollé observación activa y lectura del entorno natural para interpretar biodiversidad y comportamiento de aves.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terrero-birdwatching/terrero-birdwatching.mp4",
              label: "Video del terreno Birdwatching",
            },
          ],
        },
        {
          id: 4,
          title: "Terreno Buceo Quintay",
          reflection:
            "Esta experiencia reforzó protocolos de seguridad, técnica subacuática y trabajo colaborativo bajo supervisión.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terrero-buceo-quintay/terrero-buceo-quintay.MOV",
              label: "Video del terreno Buceo Quintay",
            },
          ],
        },
        {
          id: 5,
          title: "Terreno Cahuil",
          reflection:
            "En Cahuil trabajé adaptación al entorno y gestión de recorrido, mejorando criterio operativo en terreno.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terreno-cahuil/terreno-cahuil.mp4",
              label: "Video del terreno Cahuil",
            },
          ],
        },
        {
          id: 6,
          title: "Terreno El Pintor",
          reflection:
            "Este terreno consolidó toma de decisiones, lectura de condiciones y seguridad aplicada durante la actividad.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terreno-el-pintor/terreno-el-pintor.mp4",
              label: "Video del terreno El Pintor",
            },
          ],
        },
      ],
    },
    {
      semester: "Semestre 3",
      description: "Consolidación de planificación avanzada y enfoque en sostenibilidad turística.",
      period: "Marzo - Julio 2025",
      terrains: [
        {
          id: 1,
          title: "Planificación de expedición",
          reflection:
            "Comprendí que una salida exitosa depende de logística clara, roles definidos y planes de contingencia realistas.",
          mediaItems: [
            {
              type: "video",
              label: "Espacio para video de planificación en terreno",
            },
          ],
        },
        {
          id: 2,
          title: "Práctica de turismo sostenible",
          reflection:
            "Reforcé el compromiso de proteger el entorno y educar a los visitantes para generar impacto positivo a largo plazo.",
          mediaItems: [
            {
              type: "image",
              label: "Espacio para foto de buenas prácticas sostenibles",
            },
          ],
        },
      ],
    },
    {
      semester: "Semestre 4",
      description: "Integración final de competencias técnicas, operativas y de gestión en terreno.",
      period: "Agosto - Diciembre 2025",
      terrains: [
        {
          id: 1,
          title: "Experiencia de buceo",
          reflection:
            "Esta etapa consolidó mi enfoque técnico y de autocuidado en actividades subacuáticas con trabajo coordinado.",
          mediaItems: [
            {
              type: "image",
              label: "Espacio para foto de inmersión",
            },
          ],
        },
        {
          id: 2,
          title: "Integración final de competencias",
          reflection:
            "Logré conectar liderazgo, seguridad y sostenibilidad en salidas integrales, fortaleciendo mi perfil profesional.",
          mediaItems: [
            {
              type: "video",
              label: "Espacio para video de cierre de semestre",
            },
          ],
        },
      ],
    },
  ],
  en: [
    {
      semester: "Semester 1",
      description: "Early technical field training focused on safety and orientation skills.",
      period: "March - July 2024",
      terrains: [
        {
          id: 1,
          title: "Santuario de la Naturaleza fieldwork",
          reflection:
            "This fieldwork helped me connect environmental observation, movement, and safe decision-making in a real natural setting.",
          mediaItems: [
            {
              type: "image",
              src: "/videos/semestre-1/terrero-santuario-de-la-naturaleza/IMG_1293.jpg",
              label: "Santuario de la Naturaleza photo record",
            },
            {
              type: "video",
              src: "/videos/semestre-1/terrero-santuario-de-la-naturaleza/santuario-de-la-naturaleza.MP4",
              label: "Santuario de la Naturaleza fieldwork video",
            },
          ],
        },
        {
          id: 2,
          title: "Marching techniques fieldwork",
          reflection:
            "This stage reinforced movement technique, effort control, and group pace reading during field progression.",
          mediaItems: [
            {
              type: "image",
              src: "/videos/semestre-1/terrero-tecnicas-de-marcha/IMG_1620.jpg",
              label: "Marching techniques photo 1",
            },
            {
              type: "image",
              src: "/videos/semestre-1/terrero-tecnicas-de-marcha/IMG_1621.jpg",
              label: "Marching techniques photo 2",
            },
            {
              type: "image",
              src: "/videos/semestre-1/terrero-tecnicas-de-marcha/IMG_1622.jpg",
              label: "Marching techniques photo 3",
            },
            {
              type: "video",
              src: "/videos/semestre-1/terrero-tecnicas-de-marcha/tecnicas-de-marcha.mp4",
              label: "Marching techniques fieldwork video",
            },
          ],
        },
        {
          id: 3,
          title: "NDR fieldwork",
          reflection:
            "This fieldwork adds practical evidence of the semester process and helps document progression through real activity records.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-1/terrereno-ndr/ndr-terreno-01.mp4",
              label: "NDR fieldwork video",
            },
          ],
        },
      ],
    },
    {
      semester: "Semester 2",
      description: "Practical application of leadership and control of outdoor activities in the field.",
      period: "August - December 2024",
      terrains: [
        {
          id: 1,
          title: "El Manzano fieldwork",
          reflection:
            "This first fieldwork of the semester strengthened my environmental adaptation and decision-making during outings.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terreno-el-manzano/terreno-el-manzano.mp4",
              label: "El Manzano fieldwork video",
            },
          ],
        },
        {
          id: 2,
          title: "Kayak fieldwork",
          reflection:
            "This fieldwork strengthened my technical control on water and group coordination in aquatic contexts.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terreno-kayak/terreno-kayak.mp4",
              label: "Kayak fieldwork video",
            },
          ],
        },
        {
          id: 3,
          title: "Birdwatching fieldwork",
          reflection:
            "I developed active observation and environmental interpretation to identify biodiversity and bird behavior.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terrero-birdwatching/terrero-birdwatching.mp4",
              label: "Birdwatching fieldwork video",
            },
          ],
        },
        {
          id: 4,
          title: "Quintay diving fieldwork",
          reflection:
            "This experience reinforced safety protocols, underwater technique, and collaborative work under guidance.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terrero-buceo-quintay/terrero-buceo-quintay.MOV",
              label: "Quintay diving fieldwork video",
            },
          ],
        },
        {
          id: 5,
          title: "Cahuil fieldwork",
          reflection:
            "In Cahuil I worked on environmental adaptation and route management, improving operational criteria in the field.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terreno-cahuil/terreno-cahuil.mp4",
              label: "Cahuil fieldwork video",
            },
          ],
        },
        {
          id: 6,
          title: "El Pintor fieldwork",
          reflection:
            "This fieldwork consolidated decision-making, condition assessment, and applied safety during activities.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-2/terreno-el-pintor/terreno-el-pintor.mp4",
              label: "El Pintor fieldwork video",
            },
          ],
        },
      ],
    },
    {
      semester: "Semester 3",
      description: "Consolidation of advanced planning and sustainable tourism practices.",
      period: "March - July 2025",
      terrains: [
        {
          id: 1,
          title: "Expedition planning",
          reflection:
            "I understood that a successful outing depends on clear logistics, defined roles, and realistic contingency plans.",
          mediaItems: [
            {
              type: "video",
              label: "Placeholder for planning video",
            },
          ],
        },
        {
          id: 2,
          title: "Sustainable tourism practice",
          reflection:
            "I reinforced my commitment to protecting natural spaces and educating visitors for long-term positive impact.",
          mediaItems: [
            {
              type: "image",
              label: "Placeholder for sustainability practice photo",
            },
          ],
        },
      ],
    },
    {
      semester: "Semester 4",
      description: "Final integration of technical, operational, and field management competencies.",
      period: "August - December 2025",
      terrains: [
        {
          id: 1,
          title: "Diving experience",
          reflection:
            "This stage consolidated my technical focus and self-care approach in underwater activities with team coordination.",
          mediaItems: [
            {
              type: "image",
              label: "Placeholder for diving photo",
            },
          ],
        },
        {
          id: 2,
          title: "Final skills integration",
          reflection:
            "I connected leadership, safety, and sustainability in integrated field activities, strengthening my professional profile.",
          mediaItems: [
            {
              type: "video",
              label: "Placeholder for semester closing video",
            },
          ],
        },
      ],
    },
  ],
};

function TerrainMediaCarousel({ items, emptyLabel }: { items: TerrainMediaItem[]; emptyLabel: string }) {
  const validItems = items.filter((item) => item.src);

  if (!validItems.length) {
    const placeholder = items[0];

    return (
      <div className="flex h-72 w-full flex-col items-center justify-center gap-3 rounded-lg bg-secondary p-6 text-center">
        {placeholder?.type === "image" ? (
          <ImageIcon className="h-10 w-10 text-muted-foreground" />
        ) : (
          <Video className="h-10 w-10 text-muted-foreground" />
        )}
        <span className="text-sm text-muted-foreground">{placeholder?.label ?? emptyLabel}</span>
      </div>
    );
  }

  return (
    <Carousel opts={{ loop: validItems.length > 1 }} className="w-full px-10">
      <CarouselContent>
        {validItems.map((item) => (
          <CarouselItem key={`${item.type}-${item.src}`}>
            <div className="h-72 overflow-hidden rounded-lg bg-black">
              {item.type === "video" ? (
                <video controls preload="metadata" className="h-full w-full object-contain">
                  <source src={item.src} />
                  Tu navegador no soporta videos.
                </video>
              ) : (
                <img src={item.src} alt={item.label} className="h-full w-full object-contain" />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {validItems.length > 1 ? (
        <>
          <CarouselPrevious className="left-2 border-white/20 bg-black/60 text-white hover:bg-black/80 hover:text-white" />
          <CarouselNext className="right-2 border-white/20 bg-black/60 text-white hover:bg-black/80 hover:text-white" />
        </>
      ) : null}
    </Carousel>
  );
}

export function PortfolioSection() {
  const { locale } = useLanguage();
  const t = {
    es: {
      overline: "Bitácora visual",
      title: "Portafolio por semestres",
      description: "Cada semestre se despliega en acordeón y contiene tarjetas de terreno con evidencia multimedia y una breve reflexión.",
      terrainLabel: "Terreno",
      reflectionLabel: "Reflexión:",
      mediaEmpty: "Aún no hay archivos cargados para este terreno.",
      noteLabel: "Nota:",
      note:
        "Puedes reemplazar cada espacio multimedia por fotos o videos reales de tus terrenos en cada semestre.",
    },
    en: {
      overline: "Visual Logbook",
      title: "Portfolio by Semesters",
      description: "Each semester expands in an accordion and includes fieldwork cards with multimedia evidence and a short reflection.",
      terrainLabel: "Fieldwork",
      reflectionLabel: "Reflection:",
      mediaEmpty: "There are no uploaded files for this fieldwork yet.",
      noteLabel: "Note:",
      note:
        "You can replace each multimedia placeholder with real photos or videos from each semester fieldwork.",
    },
  }[locale];

  return (
    <section id="portfolio" className="py-20 bg-muted">
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

        {/* Semester Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {portfolioBySemester[locale].map((semester, semesterIndex) => (
            <AccordionItem
              key={semester.semester}
              value={`semester-${semesterIndex}`}
              className="rounded-xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="hover:no-underline">
                <div>
                  <p className="text-base font-semibold text-foreground">
                    {semester.semester}
                  </p>
                  <p className="mt-1 text-sm font-normal text-muted-foreground">
                    {semester.description}
                  </p>
                  <p className="text-sm font-normal text-muted-foreground">
                    {semester.period}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <div className="space-y-4">
                  {semester.terrains.map((terrain) => (
                    <Card key={`${semester.semester}-${terrain.id}`} className="group border-border bg-card overflow-hidden">
                      <CardContent className="p-0 md:grid md:grid-cols-2">
                        <div className="bg-secondary p-6 transition-colors group-hover:bg-primary/10">
                          <TerrainMediaCarousel items={terrain.mediaItems} emptyLabel={t.mediaEmpty} />
                        </div>
                        <div className="flex items-center">
                          <div className="p-6">
                            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                              {t.terrainLabel} {terrain.id}
                            </p>
                            <h3 className="text-xl font-semibold text-foreground text-balance">
                              {terrain.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              <strong className="text-foreground">{t.reflectionLabel}</strong> {terrain.reflection}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Info Note */}
        <div className="mt-8 flex items-start gap-3 p-4 bg-accent/10 border border-accent/20 rounded-lg max-w-2xl mx-auto">
          <Info className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">{t.noteLabel}</strong> {t.note}
          </p>
        </div>
      </div>
    </section>
  );
}
