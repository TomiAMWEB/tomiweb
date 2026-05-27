// ─────────────────────────────────────────────
//  ESTILOS GLOBALES — editá desde acá
//  Para cambiar colores, tipografías, tamaños,
//  botones o espaciados de toda la página.
// ─────────────────────────────────────────────

// ── TIPOGRAFÍA ────────────────────────────────

export const label =
  "text-amber text-[11px] font-sans tracking-[0.3em] uppercase"

export const headingHero =
  "font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-white leading-[0.92] tracking-tight"

export const headingLg =
  "font-serif text-4xl sm:text-5xl font-bold text-white"

export const headingMd =
  "font-serif text-3xl sm:text-4xl font-bold text-white leading-tight"

export const headingSm =
  "font-serif text-2xl sm:text-3xl md:text-[2.2rem] text-white leading-tight"

export const bodyText =
  "text-white/65 text-base sm:text-[17px] leading-relaxed font-sans"

export const caption =
  "text-white/30 text-[11px] font-sans uppercase tracking-[0.2em]"

export const footerText =
  "text-white/20 text-xs font-sans"

export const placeholderText =
  "text-white/12 text-[10px] font-sans uppercase tracking-[0.15em] text-center px-2"

// ── LAYOUT ────────────────────────────────────

export const section =
  "bg-black py-24 sm:py-32 px-6 border-t border-white/5"

export const container =
  "max-w-7xl mx-auto"

export const divider =
  "border-b border-white/[0.06]"

export const dividerTop =
  "border-t border-white/[0.06]"

// ── BOTONES ───────────────────────────────────

export const btnPrimary =
  "inline-flex items-center justify-between gap-3 px-7 py-5 bg-white text-black font-sans font-semibold text-sm tracking-wide hover:bg-amber hover:text-white transition-colors duration-300"

export const btnSecondary =
  "inline-flex items-center justify-center gap-2 px-5 py-4 border border-white/15 text-white/70 font-sans text-sm tracking-wide hover:border-amber hover:text-amber transition-colors duration-300"

// ── CELDAS DE MEDIA (grilla de eventos) ───────

export const mediaCell =
  "relative aspect-[9/16] bg-black overflow-hidden shrink-0 w-[calc(25%-12px)]"

export const photoCell =
  "relative aspect-[9/16] overflow-hidden bg-white/[0.03] shrink-0 w-[calc(25%-12px)]"

export const placeholderCell =
  "aspect-[9/16] border border-white/6 bg-white/[0.015] flex items-center justify-center shrink-0 w-[calc(25%-12px)]"

// ── CONTACTO / FOOTER ─────────────────────────

export const infoLabel =
  "text-white/25 text-[10px] font-sans uppercase tracking-[0.3em] mb-2"

export const infoValue =
  "text-white text-sm font-sans leading-relaxed"

export const contactDetail =
  "text-white/30 text-sm font-sans"

export const footerCredit =
  "text-white/15 text-xs font-sans"

export const footerCreditLink =
  "hover:text-white/40 transition-colors duration-200 underline underline-offset-2"

export const presskitLink =
  "inline-flex items-center gap-2 text-white/60 hover:text-amber transition-colors duration-200 text-sm font-sans"

// ── ANIMACIONES (Framer Motion) ───────────────

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" as const, delay },
  viewport: { once: true },
})

export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" as const, delay },
  viewport: { once: true },
})

export const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const, delay },
  viewport: { once: true },
})
