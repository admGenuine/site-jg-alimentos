import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import PillButton from '../PillButton'
import { Marquee, WhatsAppGlyph } from '../ui'
import { waLink } from '../../lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

const ticker = ['Atacado para empresas', 'Oleaginosas', 'Frutas secas', 'Temperos', 'Sementes', 'Venda só para CNPJ']

export default function Hero() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const imgY = useTransform(scrollY, [0, 900], [0, 140])

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

  return (
    <section className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink md:min-h-[660px] md:bg-[#3f86d8]" aria-label="Apresentação">
      <motion.img
        src="/img/fachada-jg.webp"
        alt="Fachada do estoque da JG Alimentos em Maringá, com céu azul"
        width={1448}
        height={1086}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-x-0 top-0 h-[64%] w-full object-cover object-[46%_38%] [mask-image:linear-gradient(to_bottom,black_62%,transparent)] md:h-[112%] md:[mask-image:none]"
        style={reduce ? undefined : { y: imgY }}
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: EASE }}
      />

      {/* legibilidade do menu e do título */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/45 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-ink from-30% via-ink/60 to-transparent md:from-0%" />

      {/* letreiro gigante no céu */}
      <Marquee
        items={ticker}
        duration={70}
        className="absolute inset-x-0 top-[17%] opacity-[0.22] md:top-[15%]"
        itemClassName="text-[clamp(64px,10vw,150px)] font-bold uppercase leading-none tracking-display text-cream"
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="container-site pb-10 md:pb-16">
            <h1 className="text-[clamp(40px,7.2vw,88px)] font-bold leading-[0.98] tracking-display">
              {line('Naturais no atacado,', 0.25)}
              {line('direto para o seu CNPJ.', 0.37)}
            </h1>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <motion.p
              className="mt-5 max-w-[520px] text-[15px] leading-[1.6] text-cream/85 sm:text-[16px] md:mt-6 md:text-[18px]"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
            >
              Oleaginosas, frutas secas, temperos e sementes para supermercados, lojas de produtos naturais e
              distribuidores. Mais de 300 itens com preço de atacado.
            </motion.p>
            <motion.div
              className="mt-7 flex flex-wrap gap-2 sm:gap-3 md:mt-8"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.75 }}
            >
              <PillButton href={waLink()} whatsapp variant="cream" size="lg" icon={<WhatsAppGlyph size={20} />}>
                Pedir tabela de preços
              </PillButton>
              <PillButton to="/catalogo" variant="outline" size="lg">
                Ver catálogo
              </PillButton>
            </motion.div>
          </div>

          <motion.dl
            className="hidden shrink-0 gap-8 text-[14px] lg:mr-24 lg:flex"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div>
              <dt className="text-fog">Estoque próprio</dt>
              <dd className="mt-1 font-semibold">Maringá - PR</dd>
            </div>
            <div>
              <dt className="text-fog">Entrega</dt>
              <dd className="mt-1 font-semibold">Todo o Brasil</dd>
            </div>
            <div>
              <dt className="text-fog">Atendimento</dt>
              <dd className="mt-1 font-semibold">Somente CNPJ</dd>
            </div>
          </motion.dl>
          </div>
        </div>
      </div>
    </section>
  )
}
