"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import * as s from "@/lib/styles"

export default function BioSection() {
  return (
    <section id="bio" className="bg-black py-24 sm:py-32 px-6">
      <div className={s.container}>
        <motion.span className={s.label} {...s.fadeUp()}>
          About
        </motion.span>

        <div className="mt-10 grid md:grid-cols-2 gap-14 md:gap-20 items-start">
          {/* Bio text */}
          <div>
            <motion.h2
              className={`${s.headingLg} lg:text-6xl leading-[1.1] mb-8`}
              {...s.fadeUp(0.05)}
            >
              Tomi<br />Alvarez<br />Morales
            </motion.h2>

            <motion.div className={`space-y-5 ${s.bodyText}`} {...s.fadeUp(0.15)}>
              <p>
                Tomás Alvarez Morales es DJ desde 2016, con un estilo propio en constante
                evolución. Se destaca por su versatilidad musical, combinando los distintos
                matices del género urbano. En cada set fusiona los hits actuales del reggaetón,
                joyas del reggaetón retro y una selección de sorpresas que mantienen viva la
                conexión con el público.
              </p>
              <p>
                Su lectura de pista es precisa y especial, adaptándose a cada momento
                transmitiendo una energía única. Produce intros personalizadas, generando una
                atmósfera única desde el primer instante del set. A lo largo de su carrera, se ha
                presentado en cabinas íntimas hasta escenarios imponentes, con eventos que
                superaron las{" "}
                <span className="text-white font-semibold">7.000 personas</span>, tanto en
                Argentina como en el exterior.
              </p>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[4/3]"
          >
            <Image
              src="/fotos/fotoCabina.JPG"
              alt="Tomi Alvarez Morales en cabina"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
