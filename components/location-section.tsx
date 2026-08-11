"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import {
  GraduationCap,
  UtensilsCrossed,
  Trees,
  Building2,
  ShoppingBag,
  HeartPulse,
  MapPin,
  Plus,
  Minus,
} from "lucide-react"

type Place = {
  icon: typeof GraduationCap
  label: string
  name: string
  time: string
}

const places: Place[] = [
  {
    icon: GraduationCap,
    label: "Colegios",
    name: "Colegios campestres y bilingües",
    time: "± 10 min",
  },
  {
    icon: UtensilsCrossed,
    label: "Gastronomía",
    name: "Restaurantes de autor",
    time: "± 8 min",
  },
  {
    icon: Trees,
    label: "Naturaleza",
    name: "Parques, caminatas y senderos ecológicos",
    time: "± 5 min",
  },
  {
    icon: Building2,
    label: "Acceso a Bogotá",
    name: "Conexión directa por la Calle 80 y av. Suba",
    time: "± 35 min",
  },
  {
    icon: ShoppingBag,
    label: "Comercio",
    name: "Centros comerciales y locales",
    time: "± 12 min",
  },
  {
    icon: HeartPulse,
    label: "Salud",
    name: "Clínicas y centros médicos",
    time: "± 15 min",
  },
]

export function LocationSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="bg-[#F4F1E8] px-6 py-24 md:px-12 md:py-36"
    >
      <div
        id="ubicacion"
        className="mx-auto max-w-7xl scroll-mt-40"
      >
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="text-xs font-light uppercase tracking-[0.4em] text-[#556B2F]">
            Ubicación
          </span>

          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-[#2D2D25] text-balance md:text-6xl">
            La Moya, Cota. Cerca de todo, lejos del ruido.
          </h2>

          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-[#6B6B5E] md:text-lg">
            A minutos de Bogotá, pero rodeado de montañas, aire limpio y
            silencio. Un lugar pensado para vivir mejor, sin renunciar a la
            ciudad.
          </p>
        </motion.div>

        {/* Split layout */}

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left: Map */}

          {/* Left: Location visual */}

<motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  animate={inView ? { opacity: 1, scale: 1 } : {}}
  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  className="relative h-[420px] overflow-hidden rounded-3xl lg:h-full lg:min-h-[560px]"
>
  <video
    src="/drone-location.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#1F241D]/60 via-transparent to-transparent" />

  <div className="absolute bottom-6 left-6 right-6">
    <div className="rounded-2xl bg-[#FAF8F2]/95 p-6 backdrop-blur-sm">
      <span className="text-xs font-light uppercase tracking-[0.3em] text-[#556B2F]">
        Ubicación
      </span>

      <h3 className="mt-2 font-serif text-2xl font-light text-[#2D2D25]">
        La Moya, Cota
      </h3>

      <p className="mt-2 text-sm font-light leading-relaxed text-[#6B6B5E]">
        Naturaleza, tranquilidad y conexión con Bogotá.
      </p>
    </div>
  </div>
</motion.div>

          {/* Right: Benefit cards */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">            {places.map((place, i) => {
              const Icon = place.icon

              return (
                <motion.div
                  key={place.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex flex-col justify-between rounded-3xl border border-[#D8D0C2] bg-[#FAF8F2] p-7 transition-all duration-300 hover:border-[#8B6F47] hover:shadow-[0_10px_30px_rgba(85,107,47,0.08)]"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      className="h-6 w-6 text-[#556B2F]"
                      strokeWidth={1.25}
                    />

                    <span className="text-xs font-light tracking-widest text-[#8B6F47]">
                      {place.time}
                    </span>
                  </div>

                  <div className="mt-10">
                    <span className="text-xs font-light uppercase tracking-[0.3em] text-[#556B2F]">
                      {place.label}
                    </span>

                    <p className="mt-2 font-serif text-xl font-light leading-snug text-[#2D2D25] text-pretty">
                      {place.name}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}