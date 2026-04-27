"use client";

import { Image as ImageIcon, Video } from "lucide-react";
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

interface PracticePortfolio {
  title: string;
  subtitle: string;
  item: TerrainItem;
}

const portfolioBySemester: Record<"es" | "en", SemesterPortfolio[]> = {
  es: [
    {
      semester: "Semestre 1",
      description: "Base técnica inicial en montaña: equipamiento personal, marcha segura, interpretación y principios de no dejar rastro.",
      period: "Marzo - Julio 2024",
      terrains: [
        {
          id: 1,
          title: "Acercamiento a la montaña",
          reflection:
            "Este terreno marcó el inicio de la formación en montaña, con foco en técnicas base de progresión: uso correcto de bastones, ajuste técnico del calzado y selección adecuada de vestimenta para condiciones outdoor.",
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
            "Se fortalecieron competencias de desplazamiento seguro mediante técnicas de marcha, detención de gato e interpretación del entorno, incorporando además maniobras de descenso con y sin implementos.",
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
          title: "No dejar rastro y campamento",
          reflection:
            "La jornada se orientó a la aplicación de principios No Dejar Rastro y al montaje técnico de campamento, consolidando estándares de mínimo impacto y buenas prácticas ambientales.",
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
      description: "Consolidación operativa en actividades de aventura: agua, rescate, primeros auxilios, interpretación y gestión de equipo.",
      period: "Agosto - Diciembre 2024",
      terrains: [
        {
          id: 1,
          title: "Terreno El Manzano",
          reflection:
            "Se abordaron técnicas de rafting y rapel, procedimientos básicos de RCP, progresión en mountainbike e interpretación del entorno, reforzando de forma transversal la coordinación y gestión de equipos.",
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
            "La experiencia permitió consolidar fundamentos técnicos de kayak: tipos de remada y apoyo, salidas húmedas, reingreso tipo cowboy, reconocimiento del equipo y lectura funcional de la embarcación.",
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
            "Se desarrollaron competencias de observación e interpretación ambiental aplicadas a la identificación de avifauna, fortaleciendo el enfoque de guiado en naturaleza.",
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
            "Se implementó la progresión formativa de buceo desde piscina a mar abierto, finalizando con inmersión guiada bajo estándares de seguridad; complementariamente, se incorporó contexto patrimonial mediante visita al museo local de historia ballenera.",
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
            "Se reforzaron técnicas de rafting, primeros auxilios y mecánica básica de bicicletas, junto con maniobras avanzadas de kayak, incluyendo el uso de flotador de remo y procedimientos complementarios de seguridad.",
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
          title: "Evaluación MAM",
          reflection:
            "Corresponde a una instancia evaluativa integral (MAM), orientada a verificar el dominio técnico, la toma de decisiones operativas y la ejecución segura de procedimientos en terreno.",
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
      description: "Profundización técnica con certificación de buceo, trabajo en montaña y diseño de experiencias guiadas por el equipo.",
      period: "Marzo - Julio 2025",
      terrains: [
        {
          id: 1,
          title: "Certificaciones de buceo",
          reflection:
            "Este primer terreno se enfocó en la obtención de certificaciones de buceo, priorizando el cumplimiento de protocolos técnicos y estándares formales de seguridad.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-3/terreno-quintay-2/terreno-quintay-2.MP4",
              label: "Video del terreno Quintay (segunda salida)",
            },
          ],
        },
        {
          id: 2,
          title: "Vilches, equitación y cumbres",
          reflection:
            "La salida integró progresión ecuestre y ascenso a cumbres, complementada con aplicación de cartografía, interpretación ambiental y observación de aves en contexto de terreno mixto.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-3/terreno-vilches/terreno-vilches.MP4",
              label: "Video del terreno Vilches",
            },
          ],
        },
        {
          id: 3,
          title: "Terreno Rapel",
          reflection:
            "Se reforzaron contenidos de mecánica de bicicletas y atención prehospitalaria, incluyendo movilización de pacientes, vendajes e inmovilizaciones, junto con la actualización de maniobras técnicas de kayak.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-3/terreno-rapel/terreno-rapel.mp4",
              label: "Video del terreno Rapel",
            },
          ],
        },
        {
          id: 4,
          title: "City Tour de interpretación",
          reflection:
            "Terreno autogestionado orientado al diseño y ejecución de un city tour interpretativo, con énfasis en planificación de ruta, gestión de tiempos y conducción de grupos.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-3/terreno-citytour/terreno-citytour.MP4",
              label: "Video del terreno City Tour",
            },
          ],
        },
      ],
    },
    {
      semester: "Semestre 4",
      description: "Cierre integral con escenarios exigentes de rescate, travesía y orientación, aplicando de forma real todo lo aprendido.",
      period: "Agosto - Diciembre 2025",
      terrains: [
        {
          id: 1,
          title: "Terreno Bullileo",
          reflection:
            "Se planificó y ejecutó un escenario de rescate con distribución de funciones y logística operativa, incorporando primeros auxilios e interpretación en cascadas y museo del agua. Además, se realizó una primera travesía en kayak aplicando competencias previamente adquiridas.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-4/terreno-bullileo/terreno-bullielo.mp4",
              label: "Video del terreno Bullileo",
            },
          ],
        },
        {
          id: 2,
          title: "Integración final de competencias",
          reflection:
            "Instancia final de integración en formato multijornada: trekking en el Enladrillado con interpretación, orientación GPS, cartografía y aplicación de NDR; posteriormente, enroque y travesía en kayak por el río Maule, evaluando gestión, administración y planificación operativa en terreno.",
          mediaItems: [
            {
              type: "image",
              src: "/videos/semestre-4/terreno-final/IMG_3419.JPG",
              label: "Registro fotográfico del terreno final",
            },
            {
              type: "video",
              src: "/videos/semestre-4/terreno-final/terreno-final-01.mp4",
              label: "Video del terreno final 1",
            },
            {
              type: "video",
              src: "/videos/semestre-4/terreno-final/terreno-final-02.mp4",
              label: "Video del terreno final 2",
            },
          ],
        },
      ],
    },
  ],
  en: [
    {
      semester: "Semester 1",
      description: "Foundational mountain training focused on personal gear, safe movement, environmental interpretation, and Leave No Trace principles.",
      period: "March - July 2024",
      terrains: [
        {
          id: 1,
          title: "Mountain approach fieldwork",
          reflection:
            "This first mountain fieldwork focused on proper pole use, boot fitting and lacing, and technical clothing selection for upcoming activities.",
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
            "We worked on marching techniques, cat arrest, natural interpretation, and descent techniques with and without gear.",
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
          title: "Leave No Trace and camping fieldwork",
          reflection:
            "We practiced Leave No Trace techniques and learned how to set up a tent correctly in natural environments.",
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
      description: "Operational consolidation through adventure activities: water skills, rescue basics, first aid, interpretation, and team management.",
      period: "August - December 2024",
      terrains: [
        {
          id: 1,
          title: "El Manzano fieldwork",
          reflection:
            "We practiced rafting and rapel techniques, CPR, mountain biking, interpretation, and teamwork management in group settings.",
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
            "We learned kayak techniques, paddle strokes, support types, wet exits, cowboy re-entry, kayak parts, and required equipment.",
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
            "This fieldwork focused on identifying different bird species and improving environmental observation skills.",
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
            "We applied theoretical diving knowledge in pool sessions and then in the sea through a guided dive. We also visited the local museum related to the region's whaling history.",
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
            "We reinforced rafting techniques, first aid, and bike workshop skills, while continuing kayak practice including paddle-float use.",
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
          title: "MAM assessment fieldwork",
          reflection:
            "This fieldwork corresponded to the MAM assessment, where we had to demonstrate integrated technical and operational competencies.",
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
      description: "Advanced semester focused on diving certification, mountain progression, and team-designed guided experiences.",
      period: "March - July 2025",
      terrains: [
        {
          id: 1,
          title: "Diving certifications fieldwork",
          reflection:
            "The first fieldwork of the semester focused on completing diving certifications and reinforcing technical and safety standards.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-3/terreno-quintay-2/terreno-quintay-2.MP4",
              label: "Quintay fieldwork video (second visit)",
            },
          ],
        },
        {
          id: 2,
          title: "Vilches, horseback riding, and summits",
          reflection:
            "We learned horseback riding and summit progression with horses, while also practicing cartography, interpretation, and birdwatching.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-3/terreno-vilches/terreno-vilches.MP4",
              label: "Vilches fieldwork video",
            },
          ],
        },
        {
          id: 3,
          title: "Rapel fieldwork",
          reflection:
            "We repeated bike workshop and mechanics, first aid, patient mobilization, bandaging, immobilization, and reinforced kayak techniques.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-3/terreno-rapel/terreno-rapel.mp4",
              label: "Rapel fieldwork video",
            },
          ],
        },
        {
          id: 4,
          title: "Interpretive City Tour fieldwork",
          reflection:
            "This was a self-managed fieldwork where we designed and led an interpretive city tour, organizing timing and group guidance.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-3/terreno-citytour/terreno-citytour.MP4",
              label: "City Tour fieldwork video",
            },
          ],
        },
      ],
    },
    {
      semester: "Semester 4",
      description: "Comprehensive closing stage with rescue scenarios, long traverses, and real-world application of all prior competencies.",
      period: "August - December 2025",
      terrains: [
        {
          id: 1,
          title: "Bullileo fieldwork",
          reflection:
            "We planned a rescue operation, split logistics and roles, applied first aid, and completed interpretation activities at waterfalls and the water museum. We also faced our first kayak traverse, applying previously learned techniques.",
          mediaItems: [
            {
              type: "video",
              src: "/videos/semestre-4/terreno-bullileo/terreno-bullielo.mp4",
              label: "Bullileo fieldwork video",
            },
          ],
        },
        {
          id: 2,
          title: "Final skills integration",
          reflection:
            "In this multi-day final fieldwork we completed trekking at Ladrillado with interpretation, GPS orientation, cartography, and Leave No Trace. We later performed an enroque and a kayak traverse across the Maule River, testing management, administration, and planning. We closed the process with a group dinner.",
          mediaItems: [
            {
              type: "image",
              src: "/videos/semestre-4/terreno-final/IMG_3419.JPG",
              label: "Final fieldwork photo record",
            },
            {
              type: "video",
              src: "/videos/semestre-4/terreno-final/terreno-final-01.mp4",
              label: "Final fieldwork video 1",
            },
            {
              type: "video",
              src: "/videos/semestre-4/terreno-final/terreno-final-02.mp4",
              label: "Final fieldwork video 2",
            },
          ],
        },
      ],
    },
  ],
};

const professionalPracticeByLocale: Record<"es" | "en", PracticePortfolio> = {
  es: {
    title: "Práctica profesional",
    subtitle: "Experiencia formativa en contexto real de operación turística subacuática.",
    item: {
      id: 1,
      title: "Práctica en Los Molles",
      reflection:
        "Desarrollé mi práctica profesional en Los Molles, desempeñándome en un centro de buceo con residencia en terreno y participación activa en la operación diaria. Esta experiencia fortaleció mis competencias técnicas, de servicio y de seguridad, y me permitió obtener certificaciones clave para iniciar mi trayectoria profesional en buceo turístico.",
      mediaItems: [
        {
          type: "video",
          src: "/videos/practica/los-molles/practica-los-molles.mp4",
          label: "Sube aquí el video de la práctica en Los Molles",
        },
      ],
    },
  },
  en: {
    title: "Professional internship",
    subtitle: "Field-based training experience in a real underwater tourism operation.",
    item: {
      id: 1,
      title: "Los Molles diving internship",
      reflection:
        "I completed my professional internship in Los Molles, living and working at a diving center while actively supporting daily operations. This experience strengthened my technical, safety, and service competencies, and allowed me to obtain key certifications to begin my professional path in tourism diving.",
      mediaItems: [
        {
          type: "video",
          src: "/videos/practica/los-molles/practica-los-molles.mp4",
          label: "Upload the Los Molles internship video here",
        },
      ],
    },
  },
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
  const practice = professionalPracticeByLocale[locale];
  const t = {
    es: {
      overline: "Bitácora visual",
      title: "Portafolio por semestres",
      description: "Cada semestre se despliega en acordeón y contiene tarjetas de terreno con evidencia multimedia y una breve reflexión.",
      terrainLabel: "Terreno",
      reflectionLabel: "Reflexión:",
      mediaEmpty: "Aún no hay archivos cargados para este terreno.",
    },
    en: {
      overline: "Visual Logbook",
      title: "Portfolio by Semesters",
      description: "Each semester expands in an accordion and includes fieldwork cards with multimedia evidence and a short reflection.",
      terrainLabel: "Fieldwork",
      reflectionLabel: "Reflection:",
      mediaEmpty: "There are no uploaded files for this fieldwork yet.",
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


        {/* Professional Practice */}
        <div className="mt-12">
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
              {practice.title}
            </h3>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              {practice.subtitle}
            </p>
          </div>

          <Card className="group border-border bg-card overflow-hidden">
            <CardContent className="p-0 md:grid md:grid-cols-2">
              <div className="bg-secondary p-6 transition-colors group-hover:bg-primary/10">
                <TerrainMediaCarousel items={practice.item.mediaItems} emptyLabel={t.mediaEmpty} />
              </div>
              <div className="flex items-center">
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                    {t.terrainLabel} {practice.item.id}
                  </p>
                  <h4 className="text-xl font-semibold text-foreground text-balance">
                    {practice.item.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">{t.reflectionLabel}</strong> {practice.item.reflection}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
