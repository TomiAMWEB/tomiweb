"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const navLinks = [
  { label: "Bio", href: "#bio" },
  { label: "Clubs", href: "#clubs" },
  { label: "Fechas", href: "#fechas" },
  { label: "Música", href: "#musica" },
  { label: "Booking", href: "#booking" },
]

export default function NavHeader() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastYRef = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastYRef.current && currentY > 120)
      setScrolled(currentY > 60)
      lastYRef.current = currentY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-sm border-b border-white/5"
          : "bg-transparent"
      }`}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" aria-label="Inicio" className="cursor-pointer shrink-0">
          <div className="relative w-28 h-9">
            <Image
              src="/logo/TAM%20-%20LOGO%20BLANCO.png"
              alt="Tomi Alvarez Morales"
              fill
              sizes="112px"
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        <nav aria-label="Navegación principal" className="flex items-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] sm:text-xs font-sans tracking-[0.2em] uppercase text-white/55 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
