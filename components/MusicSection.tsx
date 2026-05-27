"use client"

import { motion } from "framer-motion"
import * as s from "@/lib/styles"

export default function MusicSection() {
  return (
    <section id="musica" className={s.section}>
      <div className="max-w-2xl mx-auto">
        <motion.span className={s.label} {...s.fadeUp()}>
          Música
        </motion.span>

        <motion.h2 className={`mt-4 ${s.headingLg} mb-12`} {...s.fadeUp(0.06)}>
          Escuchá el set
        </motion.h2>

        <motion.div className="overflow-hidden" {...s.fadeUp(0.15)}>
          <iframe
            src="https://open.spotify.com/embed/playlist/48fwA8rprckZ46xKl1RPiB?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Playlist de Tomi Alvarez Morales en Spotify"
            className="border-0 block"
          />
        </motion.div>
      </div>
    </section>
  )
}
