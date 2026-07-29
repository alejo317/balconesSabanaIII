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

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[420px] overflow-hidden rounded-3xl border border-[#D8D0C2] lg:h-full lg:min-h-[560px]"
          >            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18911.52650083096!2d-74.08943064032177!3d4.828533394229161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f87006eb02c85%3A0x3f4d347d33e0f4e3!2sO.%20Balcones%20de%20la%20sabana%203!5e0!3m2!1ses-419!2sco!4v1785280783072!5m2!1ses-419!2sco"
  className="absolute inset-0 h-full w-full border-0"
  loading="lazy"
  allowFullScreen
  referrerPolicy="strict-origin-when-cross-origin"
/>

            {/* Center pin */}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex flex-col items-center">

                <a
  href="https://maps.google.com/?q=O.+Balcones+de+la+Sabana+3,+Cota,+Cundinamarca"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Abrir ubicación en Google Maps"
>
  <motion.span
    initial={{ scale: 0 }}
    animate={inView ? { scale: 1 } : {}}
    transition={{
      duration: 0.6,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#556B2F] text-[#FAF8F2] shadow-xl ring-8 ring-[#556B2F]/20 transition-all"
  >
    <MapPin
      className="h-5 w-5"
      strokeWidth={1.5}
    />
  </motion.span>
</a>

                <span className="mt-3 rounded-full bg-[#FAF8F2]/95 px-4 py-1.5 text-xs font-light uppercase tracking-[0.25em] text-[#2D2D25] backdrop-blur-sm">
                  Balcones de la Sabana III
                </span>

              </div>
            </div>

            {/* Zoom controls */}

            <div className="absolute right-5 top-5 flex flex-col overflow-hidden rounded-xl border border-[#D8D0C2] bg-[#FAF8F2]/95 backdrop-blur-sm">

              <button
                type="button"
                aria-label="Acercar mapa"
                className="flex h-10 w-10 items-center justify-center text-[#556B2F] transition-colors hover:bg-[#ECE6D8]"
              >
                <Plus
                  className="h-4 w-4"
                  strokeWidth={1.5}
                />
              </button>

              <span className="h-px w-full bg-[#D8D0C2]" />

              <button
                type="button"
                aria-label="Alejar mapa"
                className="flex h-10 w-10 items-center justify-center text-[#556B2F] transition-colors hover:bg-[#ECE6D8]"
              >
                <Minus
                  className="h-4 w-4"
                  strokeWidth={1.5}
                />
              </button>

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