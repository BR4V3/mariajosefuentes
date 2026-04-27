"use client";

import { Mail, Phone, Instagram, Linkedin, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

/**
 * Contact Section (Section 9)
 * Clean and simple contact information with social media links
 */

const contactInfo = {
  es: [
    {
      icon: Mail,
      label: "Correo",
      value: "marjosefsep@gmail.com",
      href: "mailto:marjosefsep@gmail.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+56 9 7792 2544",
      href: "tel:+56977922544",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Santiago, Chile",
      href: null,
    },
  ],
  en: [
    {
      icon: Mail,
      label: "Email",
      value: "marjosefsep@gmail.com",
      href: "mailto:marjosefsep@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+56 9 7792 2544",
      href: "tel:+56977922544",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Santiago, Chile",
      href: null,
    },
  ],
};

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    username: "@cote.sepulvedaa",
    href: "https://www.instagram.com/cote.sepulvedaa/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "María José Fuentes",
    href: "https://www.linkedin.com/in/maria-jose-fuentes-sepulveda-451318283/",
  },
];

export function ContactSection() {
  const { locale } = useLanguage();
  const t = {
    es: {
      overline: "Hablemos",
      title: "Contacto",
      description: "Estoy abierta a nuevas oportunidades y colaboraciones. No dudes en escribirme.",
      infoTitle: "Información de contacto",
      socialTitle: "Redes sociales",
    },
    en: {
      overline: "Get in Touch",
      title: "Contact Me",
      description: "I am always open to new opportunities and collaborations. Feel free to reach out!",
      infoTitle: "Contact Information",
      socialTitle: "Social Media",
    },
  }[locale];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-teal-900 to-emerald-900 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-emerald-300 mb-2">
            {t.overline}
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-balance">
            {t.title}
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-300">
            {t.description}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Contact Information */}
          <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-white mb-4">
                {t.infoTitle}
              </h3>
              <div className="space-y-4">
                {contactInfo[locale].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300 shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white hover:text-emerald-300 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg text-white mb-4">
                {t.socialTitle}
              </h3>
              <div className="space-y-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300 group-hover:bg-emerald-500 group-hover:text-white transition-colors shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{item.label}</p>
                      <p className="text-white group-hover:text-emerald-300 transition-colors">
                        {item.username}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
