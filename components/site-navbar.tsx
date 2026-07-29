"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const links = [
  { label: "Proyecto", href: "proyecto" },
  { label: "Galería", href: "galeria" },
  { label: "Ubicación", href: "ubicacion" },
  { label: "FAQ", href: "preguntas" },
  { label: "Contacto", href: "contacto" },
]

function scrollToSection(id: string) {
  const element = document.getElementById(id)

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

export function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      }}
      className={`
        fixed
        inset-x-0
        top-0
        z-30
        transition-all
        duration-500

        ${
          scrolled
            ? `
              bg-[#4F6740]/95
              backdrop-blur-md
              shadow-[0_10px_40px_rgba(0,0,0,0.12)]
            `
            : `
              bg-transparent
            `
        }
      `}
    >
      <nav
        className="
        mx-auto
        flex
        max-w-7xl
        items-center
        justify-between
        px-6
        py-6
        md:px-10
        md:py-8
      "
      >
        {/* LOGO */}

        <a
          href="#"
          className={`
            flex
            flex-col
            leading-none
            transition-colors
            duration-500

            ${
              scrolled
                ? "text-[#FAF8F2]"
                : "text-[#FAF8F2] drop-shadow-md"
            }
          `}
        >
          <span
            className="
              font-serif
              text-xl
              font-medium
              tracking-tight
              md:text-2xl
            "
          >
            Balcones de la Sabana III
          </span>

          <span
            className={`
              mt-1
              text-[0.6rem]
              font-light
              uppercase
              tracking-[0.4em]

              ${
                scrolled
                  ? "text-[#FAF8F2]/70"
                  : "text-[#FAF8F2]/70 drop-shadow-md"
              }
            `}
          >
            · La Moya, Cota
          </span>
        </a>

        {/* LINKS */}

        <ul
          className="
          hidden
          items-center
          gap-10
          lg:flex
        "
        >
          {links.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollToSection(link.href)}
                className={`
                  group
                  relative
                  text-xs
                  font-light
                  uppercase
                  tracking-[0.2em]
                  transition-colors
                  duration-500

                  ${
                    scrolled
                      ? "text-[#FAF8F2]/85 hover:text-[#D8C3A5]"
                      : "text-[#FAF8F2]/85 hover:text-[#FAF8F2] drop-shadow-md"
                  }
                `}
              >
                {link.label}

                <span
                  className={`
                    absolute
                    -bottom-1.5
                    left-0
                    h-px
                    w-0
                    transition-all
                    duration-300
                    group-hover:w-full

                    ${
                      scrolled
                        ? "bg-[#D8C3A5]"
                        : "bg-[#FAF8F2]"
                    }
                  `}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* BOTÓN */}

        <button
          onClick={() => scrollToSection("agendar")}
          className={`
            hidden
            rounded-full
            border
            px-6
            py-2.5
            text-xs
            font-light
            uppercase
            tracking-[0.2em]
            transition-all
            duration-500
            md:inline-block

            ${
              scrolled
                ? `
                  bg-[#FAF8F2]
                  border-[#FAF8F2]
                  text-[#4F6740]
                  hover:bg-[#EDE6D6]
                  hover:border-[#EDE6D6]
                `
                : `
                  border-[#FAF8F2]/60
                  text-[#FAF8F2]
                  drop-shadow-md
                  hover:bg-[#FAF8F2]
                  hover:text-[#556B2F]
                `
            }
          `}
        >
          Solicitar información
        </button>
      </nav>
    </motion.header>
  )
}