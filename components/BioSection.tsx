"use client"

import { useLayoutEffect, useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import * as s from "@/lib/styles"

gsap.registerPlugin(ScrollTrigger)

const TOTAL_FRAMES = 80

export default function BioSection() {
  const sectionRef   = useRef<HTMLElement>(null)
  const photoColRef  = useRef<HTMLDivElement>(null)
  const tomiPoseRef  = useRef<HTMLDivElement>(null)
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const fotoFinalRef = useRef<HTMLDivElement>(null)
  const framesRef    = useRef<HTMLImageElement[]>([])

  // Precargar todos los frames al montar
  useEffect(() => {
    framesRef.current = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      const img = new window.Image()
      img.src = `/efecto/frames_png/ezgif-frame-${String(i + 1).padStart(3, "0")}.png`
      return img
    })
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section   = sectionRef.current
      const photoCol  = photoColRef.current
      const tomiPose  = tomiPoseRef.current
      const canvas    = canvasRef.current
      const fotoFinal = fotoFinalRef.current
      if (!section || !photoCol || !tomiPose || !canvas || !fotoFinal) return

      const canvasCtx = canvas.getContext("2d")
      if (!canvasCtx) return

      const drawFrame = (progress: number) => {
        const frames = framesRef.current
        if (!frames.length) return
        const idx = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * TOTAL_FRAMES))
        const img = frames[idx]
        if (!img.complete || !img.naturalWidth) return
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height)
        canvasCtx.drawImage(img, 0, 0, canvas.width, canvas.height)
      }

      // Columna derecha: fade-in al entrar a la sección
      gsap.fromTo(
        photoCol,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 40%",
            scrub: 1.5,
          },
        }
      )

      // Animación de frames + posición + crossfade guiados por scroll
      ScrollTrigger.create({
        trigger: section,
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress

          drawFrame(progress)

          // top: -20% → 28% durante el primer 60% del scroll
          const posProgress = Math.min(1, progress / 0.6)
          canvas.style.top = `${-20 + posProgress * 48}%`

          // Crossfade lineal entre 80% y 95%
          const fade = Math.max(0, Math.min(1, (progress - 0.8) / 0.15))
          canvas.style.opacity    = String(1 - fade)
          tomiPose.style.opacity  = String(1 - fade)
          fotoFinal.style.opacity = String(fade)
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="bio"
      className="bg-black"
      style={{ height: "200vh" }}
    >
      <div
        className="sticky top-0 overflow-hidden border-t border-white/5"
        style={{ height: "100vh" }}
      >
        <div className="flex h-full">
          {/* Columna izquierda: texto */}
          <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 w-full md:w-5/12 shrink-0">
            <span className={s.label}>About</span>

            <h2 className={`${s.headingLg} lg:text-6xl leading-[1.1] mt-6 mb-8`}>
              Tomi<br />Alvarez<br />Morales
            </h2>

            <div className={`space-y-5 ${s.bodyText} max-w-sm`}>
              <p>
                Tomás Alvarez Morales es DJ desde 2016, con un estilo propio en constante
                evolución. Se destaca por su versatilidad musical, combinando los distintos
                matices del género urbano. En cada set fusiona los hits actuales del reggaetón,
                joyas del reggaetón retro y una selección de sorpresas que mantienen viva la
                conexión con el público.
              </p>
            </div>
          </div>

          {/* Columna derecha: composición animada */}
          <div
            ref={photoColRef}
            className="relative hidden md:block md:w-7/12 grow h-full"
            style={{ opacity: 0 }}
          >
            {/* Tomi sin auriculares — se desvanece en el crossfade */}
            <div ref={tomiPoseRef} className="absolute inset-0">
              <Image
                src="/efecto/tomi-pose.png"
                alt="Tomi Alvarez Morales"
                fill
                sizes="58vw"
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Foto real sosteniendo auriculares — aparece en el crossfade */}
            <div
              ref={fotoFinalRef}
              className="absolute inset-0"
              style={{ opacity: 0 }}
            >
              <Image
                src="/efecto/foto-original.jpg"
                alt="Tomi Alvarez Morales con auriculares"
                fill
                sizes="58vw"
                className="object-cover object-top"
              />
            </div>

            {/* Canvas Apple-style: dibuja los 80 frames según el scroll */}
            <canvas
              ref={canvasRef}
              width={520}
              height={520}
              className="absolute pointer-events-none select-none"
              style={{
                top: "-20%",
                left: "50%",
                transform: "translateX(-50%)",
                width: "520px",
                height: "520px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
