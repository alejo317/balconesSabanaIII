"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "¿Dónde está ubicado Balcones de la Sabana?",
    answer:
      "Nos encontramos en Cota Cundinamarca, a pocos minutos de la ciudad pero rodeados de naturañeza. Con gusto le compartimos la ubicación exacta y coordinamos una visita cuando lo desee.",
  },
  {
    question: "¿Hay casas disponibles actualmente?",
    answer:
      "Sí, contamos con unidades disponibles en distintas etapas. Como el proyecto es reducido y familiar, la disponibilidad cambia; escríbanos y le contamos con total transparencia qué hay libre hoy.",
  },
  {
    question: "¿Ofrecen opciones de financiación?",
    answer:
      "Trabajamos con planes de pago flexibles y podemos acompañarle en el proceso con entidades financieras aliadas. Nos sentamos con usted a encontrar un esquema que se ajuste a su realidad, sin presiones.",
  },
  {
    question: "¿Puedo visitar el proyecto antes de decidir?",
    answer:
      "Siempre. De hecho, lo preferimos. Lo recibimos con gusto, caminamos el terreno juntos y resolvemos sus dudas en persona. La decisión la toma usted, a su ritmo.",
  },
  {
    question: "¿En qué estado se encuentra la construcción?",
    answer:
      "Cada casa se construye con materiales de primera y acabados cuidados hasta el último detalle. Le mostramos avances reales, fotografías y cronogramas claros en cada etapa del proceso.",
  },
  {
    question: "¿Qué documentación entregan?",
    answer:
      "Entregamos toda la documentación legal en regla: escritura, licencias, certificados de tradición y libertad, y los soportes que respaldan cada operación. Todo a la vista, sin sorpresas.",
  },
  {
    question: "¿Qué garantías tengo sobre mi inversión?",
    answer:
      "Respaldamos cada entrega con garantías por escrito sobre estructura y acabados. Nuestro apellido está detrás de este proyecto, y esa es la garantía que más cuidamos.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="preguntas" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="mb-16 md:mb-24">
          <motion.span
            className="block text-[0.7rem] font-light uppercase tracking-[0.45em] text-accent"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Preguntas frecuentes
          </motion.span>
          <motion.h2
            className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground text-balance md:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            Todo lo que quiera saber, con calma.
          </motion.h2>
        </div>

        <div className="border-t border-border">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={faq.question}
                className="border-b border-border"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-7 text-left md:py-8"
                  >
                    <span className="font-serif text-xl font-light tracking-tight text-foreground md:text-2xl">
                      {faq.question}
                    </span>
                    <span
                      className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-accent"
                      aria-hidden="true"
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 135 : 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Plus className="h-5 w-5" strokeWidth={1.25} />
                      </motion.span>
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 pr-10 text-base font-light leading-relaxed text-muted-foreground text-pretty">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
