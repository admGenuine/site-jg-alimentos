import { Link } from 'react-router-dom'
import PillButton from '../PillButton'
import { Reveal, TwoLineHeading } from '../ui'
import { categories, categoryMessage, waLink, type Category } from '../../lib/site'

function ProductCard({ c, wide = false }: { c: Category; wide?: boolean }) {
  return (
    <article
      className={`group/card flex h-full flex-col overflow-hidden rounded-card p-6 text-ink md:p-8 ${
        wide ? 'md:grid md:grid-cols-[1fr_1.25fr] md:items-stretch md:gap-8' : ''
      }`}
      style={{ background: c.tone }}
    >
      <div className={wide ? 'flex flex-col justify-center' : ''}>
        <h3 className="text-[24px] font-semibold leading-tight tracking-heading md:text-[28px]">{c.name}</h3>
        <p className="mt-2 max-w-[340px] text-[15px] leading-[1.55] text-ink/70">{c.short}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <PillButton href={waLink(categoryMessage(c.name))} whatsapp variant="dark">
            Pedir cotação
          </PillButton>
          <Link
            to={`/catalogo?categoria=${c.slug}`}
            className="text-[15px] font-semibold underline decoration-ink/25 underline-offset-4 transition-colors hover:decoration-ink"
          >
            Ver itens
          </Link>
        </div>
      </div>
      <div
        className={`relative mt-8 overflow-hidden rounded-inner ${
          wide ? 'aspect-[4/3] md:mt-0 md:aspect-auto md:min-h-[340px]' : 'aspect-[4/3]'
        }`}
      >
        <img
          src={c.cover}
          alt={`${c.name} da JG Alimentos`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-[1.04]"
        />
      </div>
    </article>
  )
}

export default function Products() {
  const last = categories[categories.length - 1]
  const rest = categories.slice(0, -1)
  return (
    <section id="produtos" className="scroll-mt-20 bg-ink pb-24 md:pb-32" aria-labelledby="produtos-titulo">
      <div className="container-site">
        <Reveal className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div id="produtos-titulo">
            <TwoLineHeading
              first="Linha completa,"
              second="pronta para a sua gôndola."
              className="text-[clamp(34px,4.6vw,56px)]"
            />
          </div>
          <PillButton to="/catalogo" variant="outline">
            Ver catálogo completo
          </PillButton>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {rest.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 2) * 0.08}>
              <ProductCard c={c} />
            </Reveal>
          ))}
          <Reveal className="md:col-span-2">
            <ProductCard c={last} wide />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
