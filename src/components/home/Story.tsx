import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import PillButton from '../PillButton'
import { CountUp, Reveal, TwoLineHeading } from '../ui'
import { stats } from '../../lib/site'

/** Seção azul profunda: foto do estoque que "abre" com a rolagem + história e números. */
export default function Story() {
  const cardRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'center center'] })
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1])
  const textY = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <section className="bg-tint py-16 md:py-24" aria-labelledby="historia">
      <div className="container-site">
        <motion.div
          ref={cardRef}
          style={reduce ? undefined : { scale }}
          className="relative aspect-[4/5] origin-center overflow-hidden rounded-card sm:aspect-[16/10] lg:aspect-[16/8]"
        >
          <img
            src="/img/estoque-jg.webp"
            alt="Estoque da JG Alimentos por dentro, com pallets e prateleiras cheias"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[50%_62%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
          <motion.p
            style={reduce ? undefined : { y: textY }}
            aria-hidden="true"
            className="absolute inset-x-0 bottom-[5%] px-4 text-center whitespace-nowrap text-[clamp(40px,10.5vw,160px)] font-bold leading-none tracking-[-0.055em] text-white"
          >
            estoque próprio
          </motion.p>
        </motion.div>

        <div className="mt-20 grid gap-10 md:mt-28 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-brand">Sobre a JG</p>
            <div id="historia">
              <TwoLineHeading
                first="Mais de 6 anos,"
                second="abastecendo quem vende."
                className="text-[clamp(34px,4.6vw,56px)]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-end gap-4 text-[17px] leading-[1.65] text-ink/75">
            <p>
              A JG Alimentos nasceu da vontade de levar alimentos naturais de qualidade para comerciantes de todo o
              Brasil. Somos especializados na distribuição atacadista de oleaginosas, frutas secas, temperos e
              sementes.
            </p>
            <p>
              Trabalhamos com estoque próprio em Maringá, de onde os pedidos seguem para supermercados, lojas de
              produtos naturais, distribuidoras e redes de varejo em todo o país.
            </p>
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-1 border-t border-ink/10 sm:grid-cols-3 md:mt-20">
          {stats.map((s) => (
            <div key={s.label} className="border-b border-ink/10 py-8 sm:border-b-0 sm:pr-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <CountUp
                  value={s.value}
                  suffix={s.suffix}
                  className="block text-[clamp(44px,5vw,64px)] font-bold leading-none tracking-display"
                />
                <span className="mt-3 block text-[15px] text-mute">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 md:mt-10">
          <PillButton to="/sobre" variant="dark">
            Conhecer a JG
          </PillButton>
        </div>
      </div>
    </section>
  )
}
