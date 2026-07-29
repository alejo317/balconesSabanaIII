"use client"

import { motion } from "framer-motion"
import { Leaf, MapPin, Users, Compass } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Naturaleza",
    description:
      "Amplios espacios verdes, aire puro y el silencio de la montaña como parte de tu día a día.",
  },
  {
    icon: MapPin,
    title: "Ubicación estratégica",
    description:
      "A minutos de Bogotá, con la tranquilidad de la montaña y la cercanía de la ciudad al alcance.",
  },
  {
    icon: Users,
    title: "Comunidad exclusiva",
    description:
      "Un entorno reservado, pensado para familias que comparten un mismo estilo de vida.",
  },
  {
    icon: Compass,
    title: "Acompañamiento personalizado",
    description:
      "Un asesor dedicado te guía en cada paso, sin prisas y con total atención a tus necesidades.",
  },
]

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="bg-[#EEF3EA] px-6 py-24 md:py-40"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-2xl text-center md:mb-24"
        >
          <p className="mb-5 text-[0.7rem] font-light uppercase tracking-[0.4em] text-[#556B2F]">
            Por qué Balcones
          </p>

          <h2 className="text-balance font-serif text-4xl font-light leading-[1.1] tracking-tight text-[#2D2D25] md:text-5xl lg:text-6xl">
            Una forma distinta de vivir el campo.
          </h2>

        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit, index) => {

            const Icon = benefit.icon

            return (

              <motion.article
                key={benefit.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  flex
                  flex-col
                  rounded-3xl
                  bg-[#F8F6F1]
                  p-8
                  shadow-[0_2px_24px_rgba(45,45,37,0.05)]
                  ring-1
                  ring-[#D9D2C4]
                  transition-shadow
                  duration-500
                  hover:shadow-[0_10px_40px_rgba(45,45,37,0.10)]
                  md:p-10
                "
              >

                <Icon
                  className="h-7 w-7 text-[#556B2F]"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />

                <h3 className="mt-8 font-serif text-2xl font-medium tracking-tight text-[#2D2D25] md:text-[1.75rem]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-pretty text-[0.95rem] font-light leading-relaxed text-[#5E5A53]">
                  {benefit.description}
                </p>

              </motion.article>

            )
          })}
        </div>

      </div>
    </section>
  )
}