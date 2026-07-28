"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const timeline = [
  {
    year: "1998",
    title: "Una finca familiar",
    text: "Todo comenzó con un pedazo de tierra en la sabana y el sueño de compartirlo.",
  },
  {
    year: "2009",
    title: "Los primeros hogares",
    text: "Levantamos las primeras casas para familias cercanas que buscaban lo mismo que nosotros.",
  },
  {
    year: "2016",
    title: "Balcones de la Sabana",
    text: "Nació un proyecto pensado con calma, respetando el paisaje y a quienes lo habitan.",
  },
  {
    year: "Hoy",
    title: "Tercera generación",
    text: "Seguimos administrando cada detalle con las manos y el nombre de nuestra familia.",
  },
]

const values = [
  {
    title: "Cercanía",
    text: "Nos conocerá por nuestro nombre. Cada conversación es directa, sin intermediarios.",
  },
  {
    title: "Cuidado",
    text: "Construimos como si fuéramos a vivir allí. De hecho, muchos de nosotros lo hacemos.",
  },
  {
    title: "Palabra",
    text: "Lo que prometemos, lo cumplimos. Nuestra reputación es también nuestro apellido.",
  },
]

const trust = [
  { value: "25+", label: "Años cultivando esta tierra" },
  { value: "3", label: "Generaciones de la familia" },
  { value: "120+", label: "Familias que hoy son vecinas" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function AboutSection() {
  return (
    <section id="nosotros" className="bg-background py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Intro + Portrait */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <motion.div
            className="relative order-1 lg:order-none"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src="/about-portrait.png"
                alt="La familia detrás de Balcones de la Sabana, en su tierra al atardecer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <span className="mt-4 block text-[0.65rem] font-light uppercase tracking-[0.4em] text-muted-foreground">
              La familia · Sabana de Bogotá
            </span>
          </motion.div>

          <div>
            <motion.span
              className="block text-[0.7rem] font-light uppercase tracking-[0.45em] text-accent"
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Quiénes somos
            </motion.span>
            <motion.h2
              className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground text-balance md:text-6xl"
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              No somos una constructora. Somos una familia.
            </motion.h2>
            <motion.div
              className="mt-8 space-y-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg"
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-pretty">
                Durante más de dos décadas hemos vivido, sembrado y crecido en esta sabana. Balcones de la Sabana no
                nació en una oficina, sino en las tardes en familia mirando estas montañas y pensando en quién más
                merecía disfrutarlas.
              </p>
              <p className="text-pretty">
                Administramos cada casa con nuestras propias manos y nuestro propio apellido. Aquí no encontrará un
                vendedor, sino a alguien de la familia dispuesto a caminar el terreno con usted y contarle su historia.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-28 md:mt-40">
          <motion.h3
            className="font-serif text-3xl font-light tracking-tight text-foreground md:text-4xl"
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Nuestra historia
          </motion.h3>
          <div className="mt-14 grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                className="relative border-t border-border pt-6"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <span className="font-serif text-2xl font-light text-accent md:text-3xl">{item.year}</span>
                <h4 className="mt-3 text-lg font-normal text-foreground">{item.title}</h4>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground text-pretty">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mt-28 grid grid-cols-1 gap-12 md:mt-40 md:grid-cols-3 md:gap-16">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <h4 className="font-serif text-2xl font-light tracking-tight text-foreground md:text-3xl">
                {value.title}
              </h4>
              <p className="mt-4 text-base font-light leading-relaxed text-muted-foreground text-pretty">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-28 grid grid-cols-1 gap-y-12 border-t border-border pt-16 sm:grid-cols-3 md:mt-40"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {trust.map((item, i) => (
            <motion.div key={item.label} className="text-center" variants={fadeUp} custom={i}>
              <span className="block font-serif text-5xl font-light tracking-tight text-foreground md:text-6xl">
                {item.value}
              </span>
              <span className="mt-3 block text-[0.7rem] font-light uppercase tracking-[0.35em] text-muted-foreground">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
