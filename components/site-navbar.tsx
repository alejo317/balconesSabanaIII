"use client"

import { motion } from "framer-motion"

const links = [
  { label: "Proyecto", href: "#proyecto" },
  { label: "Galería", href: "#galeria" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "FAQ", href: "#preguntas" },
  { label: "Contacto", href: "#contacto" },
]

export function SiteNavbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="absolute inset-x-0 top-0 z-30"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10 md:py-8">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none text-background">
          <span className="font-serif text-xl font-medium tracking-tight md:text-2xl">
            Balcones de la Sabana III
          </span>
          <span className="mt-1 text-[0.6rem] font-light uppercase tracking-[0.4em] text-background/70">
            · La Moya, Cota
          </span>
        </a>

        {/* Center links */}
        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="group relative text-xs font-light uppercase tracking-[0.2em] text-background/80 transition-colors hover:text-background"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-background/70 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#agendar"
          className="hidden rounded-full border border-background/40 px-6 py-2.5 text-xs font-light uppercase tracking-[0.2em] text-background transition-colors duration-300 hover:bg-background hover:text-foreground md:inline-block"
        >
          Agendar Visita
        </a>
      </nav>
    </motion.header>
  )
}
