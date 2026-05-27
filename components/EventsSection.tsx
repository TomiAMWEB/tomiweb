"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import * as s from "@/lib/styles"

type MediaItem =
  | { type: "photo"; src: string; alt: string }
  | { type: "video"; src: string }

type Event = {
  id: string
  label: string
  location: string
  date: string
  video: string
  media: MediaItem[]
}

const events: Event[] = [
  {
    id: "aura",
    label: "AURA",
    location: "Buenos Aires",
    date: "2025",
    video: "/aftermovie/TAM%20AURA.mp4",
    media: [
      { type: "photo", src: "/aura/SaveClip.App_504002105_18515113762009777_7877405234668958257_n.jpg", alt: "AURA foto 1" },
      { type: "photo", src: "/aura/SaveClip.App_510342037_18515113771009777_947525664564778388_n.jpg", alt: "AURA foto 2" },
      { type: "video", src: "/aura/SaveClip.App_AQNlOhGGxPWbXw6fptsZAFO_DxnD0uR7qFeWM6XNJDkWtC34aRcV9O3h-qMPB_D2LvcH7_lTFzlG7rtLnStVAbCMBziaMqZ02V3iueg.mp4" },
      { type: "video", src: "/aura/SaveClip.App_AQPbBubBc8POnVq8AIP9fFMB_Gr4YiEro-Uz2kgk_61SiD5A1Tizb7lr0mojZXWx8DM3elnkiF2ylR7H6J3DdBM3a5rK4IHRkjWR_Lk.mp4" },
    ],
  },
  {
    id: "bnn",
    label: "BNN",
    location: "BNN Costanera · Buenos Aires",
    date: "2025",
    video: "/aftermovie/TAM%20BNN.mp4",
    media: [
      { type: "video", src: "/bnn/BANANA_DROP_2.mp4"},
      { type: "video", src: "/bnn/BANANA_DROP_3.mp4" },
      { type: "video", src: "/bnn/BANANA_DROP_5.mp4"},
      { type: "video", src: "/bnn/BANANA_DROP_10.mp4" },
    ],
  },
  {
    id: "koko",
    label: "KOKO",
    location: "Buenos Aires",
    date: "2025",
    video: "/aftermovie/TAM%20KOKO.mp4",
    media: [],
  },
  {
    id: "montevideo",
    label: "MONTEVIDEO",
    location: "Montevideo, Uruguay",
    date: "2025",
    video: "/aftermovie/TAM%20MONTEVIDEO.MP4",
    media: [],
  },
]


function EventRow({ event, index }: { event: Event; index: number }) {
  const [open, setOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const placeholders = event.media.length === 0 ? 3 : 0
  const totalItems = 1 + event.media.length + placeholders
  const showArrows = totalItems > 4

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    const itemWidth = scrollRef.current.offsetWidth / 4
    scrollRef.current.scrollBy({ left: dir === "right" ? itemWidth : -itemWidth, behavior: "smooth" })
  }

  const toggle = () => setOpen((prev) => !prev)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (open) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [open])

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
      viewport={{ once: true }}
      className={s.divider}
    >
      {/* Row header */}
      <button
        onClick={toggle}
        className="w-full py-5 sm:py-6 flex items-center gap-5 group text-left"
        aria-expanded={open}
      >
        <span className={`${s.label} tabular-nums w-7 shrink-0 mt-1`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className={`flex-1 ${s.headingSm} group-hover:text-amber transition-colors duration-300`}>
          {event.label}
        </span>
        <span className={`${s.caption} hidden sm:block shrink-0`}>
          {event.location}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-white/40 text-xl leading-none shrink-0 ml-4"
        >
          +
        </motion.span>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10">
              <p className={`${s.caption} mb-5`}>
                {event.location} · {event.date}
              </p>

              {/* Carousel */}
              <div className="relative">
                {showArrows && (
                  <button
                    onClick={() => scroll("left")}
                    className="absolute -left-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200"
                    aria-label="Anterior"
                  >
                    ←
                  </button>
                )}

                <div ref={scrollRef} className="flex gap-4 overflow-x-hidden">
                  {/* Main video */}
                  <div className={s.mediaCell}>
                    <video
                      ref={videoRef}
                      src={event.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Media items */}
                  {event.media.length > 0
                    ? event.media.map((item, i) =>
                        item.type === "photo" ? (
                          <div key={i} className={s.photoCell}>
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="25vw"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div key={i} className={s.mediaCell}>
                            <video
                              src={item.src}
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="metadata"
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          </div>
                        )
                      )
                    : Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className={s.placeholderCell}>
                          <span className={s.placeholderText}>
                            Fotos próximamente
                          </span>
                        </div>
                      ))}
                </div>

                {showArrows && (
                  <button
                    onClick={() => scroll("right")}
                    className="absolute -right-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white transition-colors duration-200"
                    aria-label="Siguiente"
                  >
                    →
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function EventsSection() {
  return (
    <section id="fechas" className={s.section}>
      <div className={s.container}>
        <motion.span className={s.label} {...s.fadeUp()}>
          Fechas
        </motion.span>

        <motion.h2 className={`mt-4 ${s.headingLg}`} {...s.fadeUp(0.06)}>
          Eventos anteriores
        </motion.h2>

        <ul className="mt-14" aria-label="Lista de fechas">
          {events.map((event, index) => (
            <li key={event.id}>
              <EventRow event={event} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
