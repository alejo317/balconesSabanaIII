"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CalendarDays, MessageCircle } from "lucide-react"

export function CtaSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
  id="agendar"
  ref={ref}
  className="relative h-screen w-full overflow-hidden"
>

      {/* Background photography */}
      <Image
        src="/cta-visit.png"
        alt="Casa de campo al atardecer en la sabana de Bogotá"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />


      {/* Minimal overlay - Naturaleza Sofisticada */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D25]/80 via-[#556B2F]/45 to-[#556B2F]/25" />



      {/* Content */}
      <div
  className="relative mx-auto flex h-screen max-w-4xl flex-col items-center justify-center px-6 text-center md:px-12"
>


        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-light uppercase tracking-[0.45em] text-[#FAF8F2]/70"
        >
          Tu próxima historia
        </motion.span>



        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-3xl font-serif text-4xl font-light leading-[1.12] tracking-tight text-[#FAF8F2] text-balance md:text-6xl"
        >
          Descubre si Balcones de la Sabana III es el lugar para tu próximo capítulo.
        </motion.h2>



        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-base font-light leading-relaxed text-[#FAF8F2]/80 md:text-lg"
        >
          La mejor forma de entender el proyecto es vivirlo en persona.
        </motion.p>




        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >



          <a
            href="https://wa.me/573102028270"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#D8C3A5]/60
              px-9
              py-4
              text-sm
              font-light
              uppercase
              tracking-[0.2em]
              text-[#FAF8F2]
              backdrop-blur-sm
              transition-all
              hover:border-[#FAF8F2]
              hover:bg-[#FAF8F2]/10
            "
          >
            <MessageCircle className="h-4 w-4" strokeWidth={1.5} />
            Escríbenos por WhatsApp
          </a>



        </motion.div>

      </div>

    </section>
  )
}