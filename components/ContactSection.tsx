"use client"

import { motion } from "framer-motion"
import * as s from "@/lib/styles"

export default function ContactSection() {
  const year = new Date().getFullYear()

  return (
    <section id="booking" className="bg-black pt-24 sm:pt-32 px-6 border-t border-white/5" >
      <div className={s.container}>

        {/* Label */}
        <motion.span className={s.label} {...s.fadeUp()}>
          Booking
        </motion.span>

        {/* Big heading */}
        <motion.h2 className={`mt-4 ${s.headingHero}`} {...s.fadeUp(0.06)}>
          Reservá<br />tu fecha.
        </motion.h2>

        {/* Info strip */}
        <motion.div
          className="mt-14 pt-8 border-t border-white/8 grid grid-cols-2 sm:grid-cols-3 gap-8"
          {...s.fadeUp(0.15)}
        >
          <div>
            <p className={s.infoLabel}>Disponible para</p>
            <p className={s.infoValue}>
              Boliches · Eventos privados<br />Festivales · Corporativos
            </p>
          </div>
          <div>
            <p className={s.infoLabel}>Zona</p>
            <p className={s.infoValue}>
              Buenos Aires · Argentina<br />Internacional
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className={s.infoLabel}>Press Kit</p>
            <a
              href="/Presskit%20-%20Tomi%20Alvarez%20M.pdf"
              download
              className={s.presskitLink}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Descargar PDF
            </a>
          </div>
        </motion.div>

        {/* Two-column CTA layout */}
        <motion.div
          className="mt-14 pb-24 sm:pb-32 grid md:grid-cols-2 gap-12 md:gap-20 items-end"
          {...s.fadeUp(0.22)}
        >
          {/* Left: description + contact details */}
          <div className="space-y-6">
            <p className={`${s.bodyText} text-white/50 max-w-sm`}>
              Escribí por cualquiera de los siguientes canales para coordinar disponibilidad, rider técnico o cualquier consulta.
            </p>
            <div className="space-y-1">
              <p className={s.contactDetail}>+54 9 11 3586-6415</p>
              <p className={s.contactDetail}>tomialvarezmorales@gmail.com</p>
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/5491135866415"
              target="_blank"
              rel="noopener noreferrer"
              className={`${s.btnPrimary} w-full group`}
            >
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribir por WhatsApp
              </span>
              <span className="text-lg leading-none">↗</span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="mailto:tomialvarezmorales@gmail.com"
                className={s.btnSecondary}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email
              </a>
              <a
                href="https://instagram.com/tomialvarezm"
                target="_blank"
                rel="noopener noreferrer"
                className={s.btnSecondary}
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto py-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div className="flex flex-col gap-1">
          <p className={s.footerText}>
            © {year} Tomi Alvarez Morales — Buenos Aires, Argentina
          </p>
          <p className={s.footerCredit}>
            Diseñada por{" "}
            <a
              href="https://www.linkedin.com/in/bautista-alvarez-poli-84b4891b6/"
              target="_blank"
              rel="noopener noreferrer"
              className={s.footerCreditLink}
            >
              Bautista Alvarez Poli
            </a>
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/tomialvarezm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/20 hover:text-white/50 transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://tiktok.com/@tomialvarezm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-white/20 hover:text-white/50 transition-colors duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.67a8.26 8.26 0 004.83 1.54V6.75a4.84 4.84 0 01-1.06-.06z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
