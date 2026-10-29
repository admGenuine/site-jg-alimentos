import { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import Page from '../components/Page'
import PillButton from '../components/PillButton'
import CTABand from '../components/CTABand'
import { Reveal, TwoLineHeading } from '../components/ui'
import { categories, categoryMessage, waLink, type Category } from '../lib/site'

function Arrow({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {dir === 'left' ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  )
}

function Gallery({ c }: { c: Category }) {
  const [i, setI] = useState(0)
  const touchX = useRef<number | null>(null)
  const n = c.images.length
  const go = (d: number) => setI((v) => (v + d + n) % n)

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden rounded-inner bg-white/40 md:aspect-auto md:h-full md:min-h-[420px]"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return
        const dx = e.changedTouches[0].clientX - touchX.current
        if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1)
        touchX.current = null
      }}
      role="group"
      aria-roledescription="galeria"
      aria-label={`Fotos de ${c.name}`}
    >
      {c.images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${c.name}, foto ${idx + 1} de ${n}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
          style={{ opacity: idx === i ? 1 : 0 }}
          aria-hidden={idx !== i}
        />
      ))}

      {n > 1 && (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-[13px] font-semibold text-ink backdrop-blur" aria-live="polite">
            {i + 1} / {n}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-105"
              aria-label="Foto anterior"
            >
              <Arrow dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-105"
              aria-label="Próxima foto"
            >
              <Arrow dir="right" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function CategoryBlock({ c }: { c: Category }) {
  return (
    <article
      id={c.slug}
      className="grid scroll-mt-40 gap-8 rounded-card p-6 text-ink md:grid-cols-[1fr_1.15fr] md:p-10"
      style={{ background: c.tone }}
      aria-labelledby={`t-${c.slug}`}
    >
      <div className="flex flex-col">
        <h2 id={`t-${c.slug}`} className="text-[clamp(30px,3.4vw,44px)] font-bold leading-[1.02] tracking-heading">
          {c.name}
        </h2>
        <p className="mt-3 max-w-[440px] text-[16px] leading-[1.6] text-ink/70">{c.description}</p>

        <p className="mt-8 text-[13px] font-semibold text-ink/55">Alguns itens da linha</p>
        <ul className="mt-3 grid grid-cols-1 border-t border-ink/10 sm:grid-cols-2 sm:gap-x-6">
          {c.items.map((item) => (
            <li key={item} className="border-b border-ink/10 py-2.5 text-[15px] font-medium">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 md:mt-auto md:pt-8">
          <PillButton href={waLink(categoryMessage(c.name))} whatsapp variant="dark">
            Pedir cotação
          </PillButton>
          <span className="text-[13px] text-ink/60">Preços e disponibilidade pelo WhatsApp</span>
        </div>
      </div>
      <Gallery c={c} />
    </article>
  )
}

export default function CatalogPage() {
  const [params, setParams] = useSearchParams()
  const reduce = useReducedMotion()
  const selected = params.get('categoria')
  const valid = categories.some((c) => c.slug === selected) ? selected : null
  const visible = valid ? categories.filter((c) => c.slug === valid) : categories

  const choose = (slug: string | null) => {
    if (slug) setParams({ categoria: slug }, { replace: true })
    else setParams({}, { replace: true })
  }

  const chip = (active: boolean) =>
    `h-11 shrink-0 rounded-full px-5 text-[14px] font-semibold transition-colors duration-200 ${
      active ? 'bg-ink text-white' : 'border border-ink/15 text-ink hover:border-ink/50'
    }`

  return (
    <Page title="Catálogo">
      <section className="bg-paper pb-10 pt-[124px] md:pb-14 md:pt-[172px]">
        <div className="container-site">
          <Reveal className="flex flex-col gap-6">
            <TwoLineHeading
              as="h1"
              first="Catálogo para revenda,"
              second="mais de 300 itens no atacado."
              secondClassName="text-mute"
              className="text-[clamp(40px,5.6vw,72px)] tracking-display"
            />
            <p className="max-w-[560px] text-[17px] leading-[1.6] text-mute md:text-[18px]">
              Veja algumas das linhas que distribuímos para empresas. A tabela completa, com preços de atacado e
              disponibilidade, é enviada pelo WhatsApp para o seu CNPJ.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="sticky top-[72px] z-30 border-y border-line bg-paper/90 backdrop-blur-md md:top-[84px]">
        <div className="container-site">
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:mx-0 sm:px-0" role="toolbar" aria-label="Filtrar por linha">
            <button type="button" className={chip(!valid)} aria-pressed={!valid} onClick={() => choose(null)}>
              Todas as linhas
            </button>
            {categories.map((c) => (
              <button
                key={c.slug}
                type="button"
                className={chip(valid === c.slug)}
                aria-pressed={valid === c.slug}
                onClick={() => choose(c.slug)}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-paper pt-8 md:pt-10" aria-label="Linhas de produtos">
        <div className="container-site flex flex-col gap-4 md:gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((c) => (
              <motion.div
                key={c.slug}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <CategoryBlock c={c} />
              </motion.div>
            ))}
          </AnimatePresence>
          {valid && (
            <div className="pt-4">
              <PillButton variant="outline" onClick={() => choose(null)}>
                Ver todas as linhas
              </PillButton>
            </div>
          )}
        </div>
      </section>

      <CTABand
        image="/img/temperos.webp"
        first="Não achou o item?"
        second="A tabela completa tem mais de 300."
      />
    </Page>
  )
}
