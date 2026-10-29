import { motion, useReducedMotion } from 'framer-motion'
import Page from '../components/Page'
import CTABand from '../components/CTABand'
import { CountUp, Reveal, TwoLineHeading } from '../components/ui'
import { stats } from '../lib/site'

const EASE = [0.22, 1, 0.36, 1] as const

const values = [
  {
    title: 'Qualidade',
    text: 'Selecionamos cada produto com rigor para garantir a melhor qualidade aos nossos clientes.',
    tone: '#F6E1D0',
  },
  {
    title: 'Confiança',
    text: 'Construímos relacionamentos duradouros baseados em transparência e comprometimento.',
    tone: '#E3EAD2',
  },
  {
    title: 'Parceria',
    text: 'Tratamos cada cliente como parceiro estratégico, com suporte e condições especiais.',
    tone: '#FBEDCB',
  },
]

export default function SobrePage() {
  const reduce = useReducedMotion()
  return (
    <Page title="Sobre a JG">
      <section className="relative h-[88svh] min-h-[600px] overflow-hidden bg-tide" aria-label="Sobre a JG Alimentos">
        <motion.img
          src="/img/estoque-jg.webp"
          alt="Estoque da JG Alimentos com prateleiras e pallets de produtos"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[50%_78%]"
          initial={reduce ? false : { scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
        />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-ink/90 via-ink/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-ink via-ink/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="container-site pb-12 md:pb-16">
            <motion.h1
              className="text-[clamp(42px,6.4vw,84px)] font-bold leading-[0.98] tracking-display"
              initial={reduce ? false : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            >
              <span className="block">Mais de 6 anos levando</span>
              <span className="block">qualidade ao seu negócio.</span>
            </motion.h1>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 md:py-32" aria-labelledby="quem-somos">
        <div className="container-site grid gap-12 md:grid-cols-[1fr_0.9fr] md:gap-20">
          <Reveal className="flex flex-col gap-5 text-[17px] leading-[1.7] text-cream/80 md:text-[18px]">
            <p className="mb-1 text-[13px] font-semibold uppercase tracking-[0.08em] text-sky">Quem somos</p>
            <h2 id="quem-somos" className="mb-3 text-[clamp(32px,4vw,48px)] font-bold leading-[1.05] tracking-heading text-cream">
              Distribuição atacadista de alimentos naturais.
            </h2>
            <p>
              A JG Alimentos nasceu da paixão por alimentos naturais e da vontade de democratizar o acesso a produtos
              de qualidade para distribuidores e comerciantes em todo o Brasil.
            </p>
            <p>
              Somos especializados na distribuição atacadista de oleaginosas, frutas secas e temperos naturais,
              atendendo supermercados, lojas de produtos naturais, distribuidoras e redes de varejo.
            </p>
            <p>
              Com um portfólio criteriosamente selecionado e um atendimento próximo e personalizado, nos tornamos
              referência no segmento de alimentos naturais no mercado B2B brasileiro.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card">
              <img
                src="/img/sobre.webp"
                alt="Equipe da JG Alimentos no estoque"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[50%_40%]"
              />
            </div>
          </Reveal>
        </div>

        <div className="container-site">
          <dl className="mt-20 grid grid-cols-1 border-t border-line sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="border-b border-line py-8 sm:border-b-0">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <CountUp
                    value={s.value}
                    suffix={s.suffix}
                    className="block text-[clamp(44px,5vw,64px)] font-bold leading-none tracking-display"
                  />
                  <span className="mt-3 block text-[15px] text-fog">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-ink pb-24 md:pb-32" aria-labelledby="estrutura">
        <div className="container-site">
          <Reveal className="mb-10 md:mb-14">
            <div id="estrutura">
              <TwoLineHeading
                first="Estrutura própria,"
                second="de Maringá para o Brasil."
                secondClassName="text-fog"
                className="text-[clamp(34px,4.6vw,56px)]"
              />
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-[1.35fr_1fr] md:gap-5">
            <Reveal>
              <figure className="relative aspect-[4/3] overflow-hidden rounded-card md:aspect-auto md:h-[560px]">
                <img
                  src="/img/fachada-jg.webp"
                  alt="Fachada do estoque da JG Alimentos"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-[46%_50%]"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink/75 px-4 py-2 text-[13px] font-medium backdrop-blur">
                  Nossa fachada em Maringá - PR
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.08}>
              <figure className="relative aspect-[4/5] overflow-hidden rounded-card md:aspect-auto md:h-[560px]">
                <img
                  src="/img/estoque-jg.webp"
                  alt="Pallets e prateleiras no estoque da JG Alimentos"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink/75 px-4 py-2 text-[13px] font-medium backdrop-blur">
                  Estoque por dentro
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <div className="mt-24 md:mt-32">
            <Reveal className="mb-10">
              <h2 className="text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.05] tracking-heading">Nossos valores</h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3 md:gap-5">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="flex h-full min-h-[240px] flex-col rounded-card p-7 text-ink md:p-8" style={{ background: v.tone }}>
                    <h3 className="text-[26px] font-semibold tracking-heading">{v.title}</h3>
                    <p className="mt-auto pt-10 text-[16px] leading-[1.6] text-ink/75">{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand image="/img/frutas-secas-3.webp" first="Quer a JG no seu estoque?" second="Fale com o comercial." />
    </Page>
  )
}
