"use client"

import { motion } from "framer-motion"
import * as s from "@/lib/styles"

const venues = [
  "BNN Costanera",
  "Tequila",
  "Palacio Alsina",
  "JET BA",
  "GEBA",
  "Sonnora Park MDQ",
  "Open Park PDE",
  "El Calamar Loco",
  "The Bow",
  "Mata Club",
  "Oldskull Park",
  "Estadio Malvinas Argentinas",
  "Magna Club",
]

export default function ClubsSection() {
  return (
    <section id="clubs" className={s.section}>
      <div className={s.container}>
        <motion.span className={s.label} {...s.fadeUp()}>
          Venues & Clubs
        </motion.span>

        <motion.h2 className={`mt-4 ${s.headingLg}`} {...s.fadeUp(0.06)}>
          Escenarios
        </motion.h2>

        <ul className="mt-14 divide-y divide-white/[0.06]" aria-label="Lista de venues">
          {venues.map((venue, index) => (
            <motion.li
              key={venue}
              className="py-4 sm:py-5 flex items-center gap-5 group"
              {...s.slideLeft(index * 0.035)}
            >
              <span className={`${s.label} tabular-nums w-7 shrink-0 mt-1`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={`${s.headingSm} group-hover:text-amber transition-colors duration-300`}>
                {venue}
              </span>
            </motion.li>
          ))}

          <motion.li
            className="py-4 sm:py-5 flex items-center gap-5"
            {...s.fadeIn(venues.length * 0.035)}
          >
            <span className={`${s.footerText} w-7 shrink-0`}>+</span>
            <span className={`${s.headingSm} text-white/20`}>y más...</span>
          </motion.li>
        </ul>
      </div>
    </section>
  )
}
