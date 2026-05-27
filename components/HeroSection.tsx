"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRef, useState } from "react"

export default function HeroSection() {
  const [activeVideo, setActiveVideo] = useState<0 | 1 | 2>(0)
  const p1Ref = useRef<HTMLVideoElement>(null)
  const p2Ref = useRef<HTMLVideoElement>(null)
  const logoRef = useRef<HTMLVideoElement>(null)

  const playVideo = (ref: React.RefObject<HTMLVideoElement | null>) => {
    if (ref.current) {
      ref.current.currentTime = 0
      ref.current.play()
    }
  }

  const handleP1End = () => { setActiveVideo(1); playVideo(p2Ref) }
  const handleP2End = () => { setActiveVideo(2); playVideo(logoRef) }
  const handleLogoEnd = () => { setActiveVideo(0); playVideo(p1Ref) }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Superestrella MultiCam p1 */}
      <video
        ref={p1Ref}
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={handleP1End}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeVideo === 0 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <source src="https://res.cloudinary.com/drmhejyjf/video/upload/q_auto,f_auto/v1779862855/Superestrella_MultiCam_p1_a4ixcy.mp4" type="video/mp4" />
      </video>

      {/* Superestrella MultiCam p2 */}
      <video
        ref={p2Ref}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={handleP2End}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeVideo === 1 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <source src="https://res.cloudinary.com/drmhejyjf/video/upload/q_auto,f_auto/v1779862855/Superestrella_MultiCam_p2_isklyf.mp4" type="video/mp4" />
      </video>

      {/* Logo video */}
      <video
        ref={logoRef}
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
        onEnded={handleLogoEnd}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${activeVideo === 2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <source src="https://res.cloudinary.com/drmhejyjf/video/upload/q_auto,f_auto/v1779862889/TAM_-_VISUAL_gvi11q.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Bottom fade to black */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Hero content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 gap-7"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <div className="relative w-64 sm:w-80 md:w-[440px] h-20 sm:h-28 md:h-32">
          <Image
            src="/logo/TAM%20-%20LOGO%20BLANCO.png"
            alt="Tomi Alvarez Morales"
            fill
            sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 440px"
            className="object-contain"
            priority
          />
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-white/60 text-xs sm:text-sm tracking-[0.35em] uppercase font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          DJ · Buenos Aires · Argentina
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-8 mt-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          <a
            href="https://instagram.com/tomialvarezm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-200 cursor-pointer group"
            aria-label="Instagram @tomialvarezm"
          >
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span className="text-[11px] tracking-[0.2em] uppercase">@tomialvarezm</span>
          </a>

          <span className="text-white/15 text-xs">|</span>

          <a
            href="https://tiktok.com/@tomialvarezm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
            aria-label="TikTok @tomialvarezm"
          >
            <svg
              className="w-4 h-4 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.26 8.26 0 004.83 1.54V6.75a4.84 4.84 0 01-1.06-.06z" />
            </svg>
            <span className="text-[11px] tracking-[0.2em] uppercase">@tomialvarezm</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        aria-hidden="true"
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  )
}
