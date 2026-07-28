"use client"

import { MessageCircle, Mail, MapPin } from "lucide-react"

const navLinks = [
  { label: "El proyecto", href: "#proyecto" },
  { label: "Beneficios", href: "#benefits" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Preguntas frecuentes", href: "#preguntas" },
  { label: "Agenda una visita", href: "#agendar" },
]

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+57 300 000 0000",
    href: "https://wa.me/573000000000",
  },
  {
    icon: Mail,
    label: "Correo",
    value: "hola@balconesdelasabana.co",
    href: "mailto:hola@balconesdelasabana.co",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Sabana de Bogotá, Cundinamarca",
    href: "#ubicacion",
  },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer id="contacto"className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-12 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">

          {/* Brand */}
          <div className="md:col-span-4">
            <p className="font-serif text-2xl font-light leading-tight tracking-tight">
              Balcones de la Sabana III
            </p>

            <p className="mt-5 max-w-xs text-sm font-light leading-relaxed text-primary-foreground/60">
              Un lugar pensado para escribir el próximo capítulo de tu familia,
              entre el verde de la sabana.
            </p>
          </div>

          {/* Navigation */}
          <nav
            className="md:col-span-4"
            aria-label="Navegación del pie de página"
          >
            <p className="text-xs font-light uppercase tracking-[0.3em] text-primary-foreground/40">
              Navegación
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-xs font-light uppercase tracking-[0.3em] text-primary-foreground/40">
              Contacto
            </p>

            <ul className="mt-6 flex flex-col gap-6">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-primary-foreground/15 text-primary-foreground/70 transition-colors group-hover:border-primary-foreground/40 group-hover:text-primary-foreground">
                      <item.icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>

                    <span className="flex flex-col">
                      <span className="text-[0.7rem] font-light uppercase tracking-[0.2em] text-primary-foreground/40">
                        {item.label}
                      </span>

                      <span className="mt-1 text-sm font-light text-primary-foreground/80 transition-colors group-hover:text-primary-foreground">
                        {item.value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs font-light text-primary-foreground/40">
            &copy; {year} Balcones de la Sabana III. Todos los derechos
            reservados.
          </p>

          <a
            href="#privacidad"
            className="text-xs font-light text-primary-foreground/50 transition-colors hover:text-primary-foreground/80"
          >
            Política de privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}