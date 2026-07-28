"use client"

import { motion } from "framer-motion"
import {
  MessageCircle,
  FileText,
  CalendarDays,
  MapPin,
  Compass,
  KeyRound,
} from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Contáctanos",
    description:
      "Escríbenos y cuéntanos qué buscas. Sin formularios largos, solo una conversación cercana.",
  },
  {
    icon: FileText,
    title: "Recibe información",
    description:
      "Te enviamos todos los detalles del proyecto, planos y opciones disponibles con total transparencia.",
  },
  {
    icon: CalendarDays,
    title: "Agenda una visita",
    description:
      "Elige el día y la hora que mejor se ajuste a ti. Nos adaptamos a tu ritmo.",
  },
  {
    icon: MapPin,
    title: "Visita el proyecto",
    description:
      "Recorre los espacios, respira el entorno y descubre en persona lo que será tu nuevo hogar.",
  },
  {
    icon: Compass,
    title: "Asesoría personalizada",
    description:
      "Un asesor dedicado resuelve cada duda y te acompaña con calma en la decisión más importante.",
  },
  {
    icon: KeyRound,
    title: "Proceso de compra",
    description:
      "Formalizamos cada paso de manera clara y segura, hasta que las llaves estén en tus manos.",
  },
]

export function BuyingProcessSection() {
  return (
    <section className="bg-background px-6 py-24 md:py-40">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-20 max-w-2xl text-center md:mb-28"
        >
          <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.4em] text-muted-foreground">
            Proceso de compra
          </p>
          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Un camino claro hacia tu nuevo hogar.
          </h2>
          <p className="mt-6 text-pretty text-lg font-light leading-relaxed text-muted-foreground">
            Cada paso pensado para que decidas con confianza y sin incertidumbre.
          </p>
        </motion.div>

        <ol className="relative mx-auto max-w-2xl">
          {/* Vertical guiding line */}
          <span
            aria-hidden="true"
            className="absolute left-[1.375rem] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />

          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mb-16 flex items-start gap-6 last:mb-0 md:mb-24 md:gap-0"
              >
                {/* Node */}
                <div className="relative z-10 flex-none md:absolute md:left-1/2 md:-translate-x-1/2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-card ring-1 ring-border shadow-[0_2px_16px_rgba(0,0,0,0.05)]">
                    <Icon
                      className="h-5 w-5 text-accent"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`flex-1 pt-1 md:w-1/2 ${
                    isEven
                      ? "md:pr-16 md:text-right"
                      : "md:ml-auto md:pl-16 md:text-left"
                  }`}
                >
                  <span className="mb-2 block font-serif text-sm font-light italic text-accent">
                    Paso {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground md:text-[1.75rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-pretty text-[0.95rem] font-light leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
