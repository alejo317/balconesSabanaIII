"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { GraduationCap, UtensilsCrossed, Trees, Building2, ShoppingBag, HeartPulse, MapPin, Plus, Minus } from "lucide-react"

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
    name: "Colegios internacionales y bilingües",
    time: "± 10 min",
  },
  {
    icon: UtensilsCrossed,
    label: "Gastronomía",
    name: "Restaurantes de autor y cafés de campo",
    time: "± 8 min",
  },
  {
    icon: Trees,
    label: "Naturaleza",
    name: "Senderos, humedales y reservas",
    time: "± 5 min",
  },
  {
    icon: Building2,
    label: "Acceso a Bogotá",
    name: "Conexión directa por la Calle 80",
    time: "± 25 min",
  },
  {
    icon: ShoppingBag,
    label: "Comercio",
    name: "Centros comerciales y plazas de mercado",
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
    <section id="ubicacion" ref={ref} className="bg-background px-6 py-24 md:px-12 md:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="text-xs font-light uppercase tracking-[0.4em] text-muted-foreground">Ubicación</span>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground text-balance md:text-6xl">
            La Moya, Cota. Cerca de todo, lejos del ruido.
          </h2>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            A minutos de Bogotá, pero rodeado de montañas, aire limpio y silencio. Un lugar pensado para vivir mejor, sin
            renunciar a la ciudad.
          </p>
        </motion.div>

        {/* Split layout */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[420px] overflow-hidden rounded-3xl border border-border lg:h-full lg:min-h-[560px]"
          >
            <Image
              src="/map-cota.png"
              alt="Mapa de la ubicación del proyecto en La Moya, Cota"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Center pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex flex-col items-center">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background shadow-xl ring-8 ring-foreground/10"
                >
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </motion.span>
                <span className="mt-3 rounded-full bg-background/90 px-4 py-1.5 text-xs font-light uppercase tracking-[0.25em] text-foreground backdrop-blur-sm">
                  Balcones de la Sabana III
                </span>
              </div>
            </div>
            {/* Zoom controls (decorative placeholder) */}
            <div className="absolute right-5 top-5 flex flex-col overflow-hidden rounded-xl border border-border bg-background/90 backdrop-blur-sm">
              <button
                type="button"
                aria-label="Acercar mapa"
                className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-secondary"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="h-px w-full bg-border" />
              <button
                type="button"
                aria-label="Alejar mapa"
                className="flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:bg-secondary"
              >
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </motion.div>

          {/* Right: Benefit cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {places.map((place, i) => {
              const Icon = place.icon
              return (
                <motion.div
                  key={place.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-7 transition-colors hover:border-accent/40"
                >
                  <div className="flex items-start justify-between">
                    <Icon className="h-6 w-6 text-foreground" strokeWidth={1.25} />
                    <span className="text-xs font-light tracking-widest text-muted-foreground">{place.time}</span>
                  </div>
                  <div className="mt-10">
                    <span className="text-xs font-light uppercase tracking-[0.3em] text-muted-foreground">
                      {place.label}
                    </span>
                    <p className="mt-2 font-serif text-xl font-light leading-snug text-foreground text-pretty">
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
