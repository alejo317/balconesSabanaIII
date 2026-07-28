"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const imageReveal = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function LifestyleSection() {
  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40 lg:px-16">
        {/* Intro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl"
        >
          <span className="text-[0.7rem] font-light uppercase tracking-[0.4em] text-muted-foreground">
            Una nueva forma de vivir
          </span>
          <h2 className="mt-6 font-serif text-3xl font-light leading-[1.15] tracking-tight text-balance md:text-5xl lg:text-6xl">
            No es una casa. Es la vida que siempre imaginaste.
          </h2>
        </motion.div>

        {/* Dominant image + first story */}
        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-28 lg:grid-cols-12">
          <motion.figure
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative aspect-[4/5] overflow-hidden lg:col-span-8 lg:aspect-[16/11]"
          >
            <Image
              src="/lifestyle-main.png"
              alt="Interior campestre moderno abierto a una terraza con vista a las colinas de la sabana"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </motion.figure>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-end lg:col-span-4"
          >
            <p className="font-serif text-2xl font-light leading-relaxed text-pretty md:text-3xl">
              Imagina terminar tu jornada laboral rodeado de naturaleza en lugar de tráfico.
            </p>
          </motion.div>
        </div>

        {/* Second story — text left, image right */}
        <div className="mt-24 grid grid-cols-1 items-center gap-x-12 gap-y-12 md:mt-40 lg:grid-cols-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="order-2 lg:order-1 lg:col-span-5 lg:pr-8"
          >
            <p className="font-serif text-2xl font-light leading-relaxed text-pretty md:text-4xl">
              Imagina a tus hijos creciendo con más espacio.
            </p>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-muted-foreground">
              Mañanas al aire libre, tardes sin pantallas y la libertad de correr descalzos sobre el pasto. Aquí la infancia sucede a otro ritmo.
            </p>
          </motion.div>

          <motion.figure
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative order-1 aspect-[3/4] overflow-hidden lg:order-2 lg:col-span-7 lg:aspect-[4/3]"
          >
            <Image
              src="/lifestyle-children.png"
              alt="Niños jugando libremente en un amplio prado verde frente a una casa campestre"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </motion.figure>
        </div>

        {/* Supporting pair — offset editorial composition */}
        <div className="mt-24 grid grid-cols-1 gap-x-12 gap-y-16 md:mt-40 lg:grid-cols-12">
          <motion.figure
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative aspect-[4/3] overflow-hidden lg:col-span-6 lg:mt-24"
          >
            <Image
              src="/lifestyle-work.png"
              alt="Rincón de trabajo minimalista junto a una ventana con vista a las colinas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.figure>

          <motion.figure
            variants={imageReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative aspect-[3/4] overflow-hidden lg:col-span-6"
          >
            <Image
              src="/lifestyle-weekend.png"
              alt="Pareja disfrutando del atardecer en una terraza con vista a la sabana"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.figure>
        </div>

        {/* Closing story */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-28 max-w-3xl text-center md:mt-40"
        >
          <p className="font-serif text-3xl font-light leading-[1.25] tracking-tight text-balance md:text-5xl">
            Imagina fines de semana que no exigen salir de la ciudad, porque ya estás donde siempre quisiste estar.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
