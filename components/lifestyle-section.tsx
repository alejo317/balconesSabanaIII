"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

const imageReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export function LifestyleSection() {
  return (
    <section className="relative overflow-hidden bg-[#F5F1E8] text-[#2D2D25]">
      <div className="mx-auto max-w-[1450px] px-6 py-28 md:px-10 md:py-40 lg:px-16">

        {/* ================= INTRO ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-[0.7rem] font-light uppercase tracking-[0.45em] text-[#556B2F]">
            Una nueva forma de vivir
          </span>

          <h2 className="mt-6 font-serif text-4xl font-light leading-[1.1] tracking-tight text-balance md:text-6xl">
            No es una casa.
            <br />
            Es la vida que siempre imaginaste.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-[#6B6B5E] md:text-lg">
            Espacios diseñados para disfrutar la tranquilidad, la naturaleza y
            la cercanía con Bogotá sin renunciar a la comodidad.
          </p>
        </motion.div>

        {/* ================= BLOQUE 1 ================= */}

        <div className="mt-24 lg:mt-32">

  <motion.figure
    variants={imageReveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden"
  >
    <video
      src="/planoFrenteCasa.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    />
  </motion.figure>

  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="mx-auto mt-14 max-w-4xl text-center"
  >
    <p className="font-serif text-3xl font-light leading-[1.45] text-balance md:text-5xl">
      Imagina terminar tu jornada laboral rodeado de naturaleza,
      escuchando el viento entre los árboles en lugar del tráfico.
    </p>
  </motion.div>

</div>

        {/* ================= BLOQUE 2 ================= */}

        <div className="mt-32 grid items-center gap-16 lg:mt-44 lg:grid-cols-12">

                <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="lg:col-span-5"
      >
        <span className="text-[0.65rem] font-light uppercase tracking-[0.4em] text-[#556B2F]">
          Pensado para la familia
        </span>

        <h3 className="mt-6 font-serif text-3xl font-light leading-tight md:text-5xl">
          Imagina a tu familia creciendo con más espacio.
        </h3>

        <p className="mt-8 max-w-md text-base font-light leading-relaxed text-[#6B6B5E]">
          Mañanas al aire libre, tardes sin pantallas y la libertad de la naturaleza. Aquí las exxperiencias suceden a otro ritmo,
          rodeadas de tranquilidad.
        </p>
      </motion.div>

      <motion.figure
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative aspect-[4/3] overflow-hidden lg:col-span-7"
      >
        <video
          src="/p7.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.figure>

    </div>

        {/* ================= BLOQUE 3 ================= */}

        <div className="mt-32 grid gap-20 lg:mt-48 lg:grid-cols-2 lg:gap-16">

          <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-80px" }}
  className="flex flex-col"
>
  <motion.figure
    variants={imageReveal}
    className="relative aspect-[4/3] overflow-hidden"
  >
    <video
      src="/p5.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    />
  </motion.figure>

  <div className="mt-10">
    <span className="text-[0.65rem] font-light uppercase tracking-[0.4em] text-[#556B2F]">
      Productividad
    </span>

    <h3 className="mt-5 font-serif text-3xl font-light leading-tight md:text-4xl">
      Trabaja desde casa sin dejar de sentirte conectado con la naturaleza.
    </h3>

    <p className="mt-6 max-w-md text-base font-light leading-relaxed text-[#6B6B5E]">
      Un espacio silencioso para concentrarte, reuniones sin ruido y
      pausas mirando el paisaje en lugar de edificios. La tranquilidad
      también mejora la forma de trabajar.
    </p>
  </div>
</motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col lg:pt-20"
          >
            <motion.figure
              variants={imageReveal}
              className="relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src="/p6.jpeg"
                alt="Pareja disfrutando del atardecer en una terraza"
                fill
                className="object-cover"
                sizes="(max-width:1024px)100vw,50vw"
              />
            </motion.figure>

            <div className="mt-10">
              <span className="text-[0.65rem] font-light uppercase tracking-[0.4em] text-[#556B2F]">
                Calidad de vida
              </span>

              <h3 className="mt-5 font-serif text-3xl font-light leading-tight md:text-4xl">
                Los mejores fines de semana son los que empiezan al abrir la puerta de tu casa.
              </h3>

              <p className="mt-6 max-w-md text-base font-light leading-relaxed text-[#6B6B5E]">
                Ya no necesitas escapar de la ciudad cada viernes. Vivir aquí
                significa despertar cada día con la sensación de estar de viaje,
                sin dejar de estar cerca de Bogotá.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ================= FRASE FINAL ================= */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-36 max-w-5xl text-center md:mt-52"
        >
          <span className="text-[0.65rem] font-light uppercase tracking-[0.45em] text-[#556B2F]">
            Balcones de la Sabana III
          </span>

          <p className="mt-8 font-serif text-4xl font-light leading-[1.25] tracking-tight text-balance md:text-6xl">
            Porque el verdadero lujo no es tener más.
            <br />
            Es vivir mejor cada día.
          </p>
        </motion.div>

      </div>
    </section>
  )
}