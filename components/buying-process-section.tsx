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
    <section className="bg-[#F5F1E8] px-6 py-28 md:py-40">
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-24 max-w-2xl text-center"
        >
          <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.45em] text-[#556B2F]">
            Proceso de compra
          </p>

          <h2 className="text-balance font-serif text-4xl font-light leading-[1.08] tracking-tight text-[#2D2D25] md:text-5xl lg:text-6xl">
            Un camino claro hacia tu nuevo hogar.
          </h2>

          <p className="mt-7 text-lg font-light leading-relaxed text-[#6B6B5E]">
            Cada paso está pensado para que vivas una experiencia sencilla,
            transparente y completamente personalizada.
          </p>
        </motion.div>

        <ol className="mx-auto max-w-3xl">
                    {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-20 flex items-start gap-8 last:mb-0"
              >
                {/* Ícono */}

                <div className="flex-none">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F1EEE6]
                      ring-1
                      ring-[#DDD4C4]
                      shadow-[0_8px_24px_rgba(45,45,37,0.06)]
                    "
                  >
                    <Icon
                      className="h-6 w-6 text-[#556B2F]"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Contenido */}

                <div className="flex-1 pt-1">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-[#F1EEE6]
                      px-4
                      py-1.5
                      text-[0.65rem]
                      font-medium
                      uppercase
                      tracking-[0.25em]
                      text-[#556B2F]
                    "
                  >
                    Paso {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="mt-4 font-serif text-2xl font-light tracking-tight text-[#2D2D25] md:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-[#6B6B5E]">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            )
          })}        </ol>
      </div>
    </section>
  )
}