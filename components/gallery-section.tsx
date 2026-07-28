"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

type GalleryImage = {
  src: string
  alt: string
  category: string
}

const images: GalleryImage[] = [
  {
    src: "/gallery-drone.png",
    alt: "Vista aérea del conjunto de casas campestres entre las colinas de la sabana",
    category: "Vista aérea",
  },
  {
    src: "/gallery-interior.png",
    alt: "Interior minimalista con ventanales de piso a techo hacia las colinas",
    category: "Interiores",
  },
  {
    src: "/gallery-sunset.png",
    alt: "Atardecer dorado sobre la sabana andina",
    category: "Atardeceres",
  },
  {
    src: "/gallery-garden.png",
    alt: "Jardín paisajístico con senderos de piedra y vegetación nativa",
    category: "Jardines",
  },
  {
    src: "/gallery-architecture.png",
    alt: "Fachada de arquitectura moderna integrada al paisaje",
    category: "Arquitectura",
  },
  {
    src: "/gallery-terrace.png",
    alt: "Terraza al anochecer con vista a las montañas",
    category: "Terrazas",
  },
]

export function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [],
  )
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [],
  )

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [activeIndex, close, next, prev])

  return (
    <section id="galeria" className="bg-background px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl md:mb-24"
        >
          <span className="text-[0.7rem] font-light uppercase tracking-[0.4em] text-muted-foreground">
            Galería
          </span>
          <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Recorra cada rincón antes de conocerlo en persona.
          </h2>
        </motion.div>

        {/* Masonry */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {images.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
              className="group relative block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`Ampliar imagen: ${image.alt}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={900}
                height={index % 2 === 0 ? 1200 : 700}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/20" />
              <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-light uppercase tracking-[0.35em] text-background drop-shadow">
                  {image.category}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/95 p-4 md:p-10"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de la galería"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full text-background/80 transition-colors hover:bg-background/10 hover:text-background"
              aria-label="Cerrar"
            >
              <X className="h-6 w-6" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                prev()
              }}
              className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full text-background/80 transition-colors hover:bg-background/10 hover:text-background md:left-8"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="h-7 w-7" strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                next()
              }}
              className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full text-background/80 transition-colors hover:bg-background/10 hover:text-background md:right-8"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="h-7 w-7" strokeWidth={1.5} />
            </button>

            <AnimatePresence mode="wait">
              <motion.figure
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex max-h-full max-w-6xl flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[activeIndex].src || "/placeholder.svg"}
                  alt={images[activeIndex].alt}
                  width={1600}
                  height={1200}
                  className="max-h-[80vh] w-auto rounded-lg object-contain"
                  priority
                />
                <figcaption className="mt-5 text-center">
                  <span className="text-xs font-light uppercase tracking-[0.35em] text-background/70">
                    {images[activeIndex].category}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
