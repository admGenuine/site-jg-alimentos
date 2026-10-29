import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import PillButton from '../PillButton'
import { WhatsAppGlyph } from '../ui'
import { waLink } from '../../lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  const reduce = useReducedMotion()
  const photoRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  const line = (text: string, delay: number) => (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: '105%' }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {text}
      </motion.span>
    </span>
  )

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: EASE, delay },
        }

  return (
    <section className="bg-paper pb-6 pt-[108px] md:pb-10 md:pt-[148px]" aria-label="Apresentação">
      <div className="container-site">
        <h1 className="text-[clamp(40px,7.2vw,92px)] font-bold leading-[0.98] tracking-display text-ink">
          {line('Naturais no atacado,', 0.1)}
          {line('direto para o seu CNPJ.', 0.22)}
        </h1>

        <div className="mt-6 flex flex-col gap-8 md:mt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[580px]">
            <motion.p className="text-[16px] leading-[1.6] text-mute md:text-[18px]" {...fade(0.45)}>
              Oleaginosas, frutas secas, temperos e sementes para supermercados, lojas de produtos naturais e
              distribuidores. Mais de 300 itens com preço de atacado.
            </motion.p>
            <motion.div className="mt-7 flex flex-wrap gap-2 sm:gap-3" {...fade(0.55)}>
              <PillButton href={waLink()} whatsapp variant="dark" size="lg" icon={<WhatsAppGlyph size={20} />}>
                Pedir tabela de preços
              </PillButton>
              <PillButton to="/catalogo" variant="outline" size="lg">
                Ver catálogo
              </PillButton>
            </motion.div>
          </div>

          <motion.dl className="grid grid-cols-3 gap-4 border-t border-line pt-5 text-[14px] sm:gap-8 lg:flex lg:border-0 lg:pt-0" {...fade(0.65)}>
            <div>
              <dt className="text-mute">Estoque próprio</dt>
              <dd className="mt-1 font-semibold">Maringá - PR</dd>
            </div>
            <div>
              <dt className="text-mute">Entrega</dt>
              <dd className="mt-1 font-semibold">Todo o Brasil</dd>
            </div>
            <div>
              <dt className="text-mute">Atendimento</dt>
              <dd className="mt-1 font-semibold">Somente CNPJ</dd>
            </div>
          </motion.dl>
        </div>

        <motion.div
          ref={photoRef}
          className="relative mt-10 aspect-[4/3.4] overflow-hidden rounded-card bg-tint sm:aspect-[16/9] md:mt-14 lg:aspect-[16/7.2]"
          initial={reduce ? false : { opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.5 }}
        >
          <motion.img
            src="/img/fachada-jg.webp"
            alt="Fachada do estoque da JG Alimentos em Maringá, com céu azul"
            width={1448}
            height={1086}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-x-0 top-[-7%] h-[114%] w-full object-cover object-[46%_45%]"
            style={reduce ? undefined : { y: imgY }}
          />
        </motion.div>
      </div>
    </section>
  )
}
