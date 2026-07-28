"use client"

import { motion } from "framer-motion"
import {
  Maximize2,
  Trees,
  BedDouble,
  Bath,
  Car,
  Compass,
  Layers,
  Droplets,
} from "lucide-react"

type Detail = {
  icon: typeof Maximize2
  label: string
  value: string
  unit?: string
  note?: string
  wide?: boolean
}

const details: Detail[] = [
  { icon: Maximize2, label: "Área construida", value: "320", unit: "m²", note: "Distribuidos en dos niveles" },
  { icon: Trees, label: "Área de lote", value: "1.000", unit: "m²", note: "Jardín privado y zonas verdes" },
  { icon: BedDouble, label: "Habitaciones", value: "4", note: "Alcoba principal con vestier" },
  { icon: Bath, label: "Baños", value: "4.5", note: "Acabados en piedra natural" },
  { icon: Car, label: "Parqueaderos", value: "3", note: "Dos cubiertos, uno de visitantes" },
  { icon: Compass, label: "Estado de obra", value: "En construcción", note: "Entregas programadas 2026" },
  {
    icon: Layers,
    label: "Acabados",
    value: "Premium",
    note: "Maderas nobles, piedra y grandes ventanales de piso a techo",
    wide: true,
  },
  {
    icon: Droplets,
    label: "Servicios",
    value: "Completos",
    note: "Acueducto, energía, gas natural y fibra óptica",
    wide: true,
  },
]

export function DetailsSection() {
  return (
    <section id="proyecto" className="bg-background px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="text-[0.7rem] font-light uppercase tracking-[0.4em] text-muted-foreground">
            El Proyecto
          </span>
          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-tight text-foreground text-balance md:text-6xl">
            Cada detalle, pensado para vivir mejor.
          </h2>
          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-muted-foreground md:text-lg">
            Espacios amplios, materiales nobles y una arquitectura que respira junto al paisaje de la sabana.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:mt-24 md:grid-cols-3">
          {details.map((detail, i) => {
            const Icon = detail.icon
            return (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group flex flex-col justify-between gap-10 bg-card p-8 transition-colors duration-500 hover:bg-secondary md:p-10 ${
                  detail.wide ? "col-span-2 md:col-span-3" : ""
                }`}
              >
                <Icon
                  className="h-6 w-6 text-muted-foreground transition-colors duration-500 group-hover:text-accent"
                  strokeWidth={1}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-[0.7rem] font-light uppercase tracking-[0.35em] text-muted-foreground">
                    {detail.label}
                  </span>
                  <p className="mt-3 font-serif text-3xl font-light leading-none tracking-tight text-foreground md:text-4xl">
                    {detail.value}
                    {detail.unit ? (
                      <span className="ml-1 text-lg font-light text-muted-foreground md:text-xl">{detail.unit}</span>
                    ) : null}
                  </p>
                  {detail.note ? (
                    <p className="mt-4 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
                      {detail.note}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
