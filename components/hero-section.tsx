"use client"

import { motion } from "framer-motion"
import { SiteNavbar } from "@/components/site-navbar"

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.45 },
  },
}

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease } },
}

export function HeroSection() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#2D2D25] text-[#FAF8F2]">

      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/p1.jpeg"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>


      {/* Cinematic overlays Naturaleza Sofisticada */}
      <div className="absolute inset-0 bg-[#556B2F]/35" aria-hidden="true" />

      <div
        className="absolute inset-0 bg-gradient-to-b from-[#2D2D25]/55 via-transparent to-[#2D2D25]/75"
        aria-hidden="true"
      />


      <SiteNavbar />


      <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:px-10 md:pb-28 lg:pb-32">

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >

          <motion.span
            variants={rise}
            className="mb-6 block text-[0.65rem] font-light uppercase tracking-[0.5em] text-[#FAF8F2]/70"
          >
            Casas campestres exclusivas
          </motion.span>


          <motion.h1
            variants={rise}
            className="text-balance font-serif text-5xl font-light leading-[1.02] tracking-tight text-[#FAF8F2] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Donde la calma y la cercanía a Bogotá se encuentran.
          </motion.h1>


          <motion.p
            variants={rise}
            className="mt-8 max-w-xl text-pretty text-base font-light leading-relaxed text-[#FAF8F2]/80 md:text-lg"
          >
            Casas campestres exclusivas diseñadas para familias que buscan más
            espacio, naturaleza y calidad de vida.
          </motion.p>


          <motion.div
            variants={rise}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >

            <a
              href="#agendar"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-[#FAF8F2]
                px-9
                py-4
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#556B2F]
                transition-transform
                duration-300
                hover:scale-[1.03]
              "
            >
              Solicitar información
            </a>


            <a
              href="#proyecto"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-[#FAF8F2]/40
                px-9
                py-4
                text-xs
                font-light
                uppercase
                tracking-[0.2em]
                text-[#FAF8F2]
                transition-colors
                duration-300
                hover:bg-[#FAF8F2]/10
              "
            >
              Explorar el Proyecto
            </a>

          </motion.div>

        </motion.div>

      </div>


      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      >

        <span className="text-[0.6rem] font-light uppercase tracking-[0.35em] text-[#FAF8F2]/60">
          Descubrir
        </span>


        <div className="relative h-12 w-px overflow-hidden bg-[#FAF8F2]/25">

          <motion.span
            className="absolute left-0 top-0 h-4 w-full bg-[#FAF8F2]"
            animate={{ y: [-16, 48] }}
            transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
          />

        </div>

      </motion.div>


    </section>
  )
}