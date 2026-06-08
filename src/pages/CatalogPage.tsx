import { useState } from 'react'
import { motion } from 'framer-motion'
import { pageTransition, stagger, fadeUp, scaleIn, viewport } from '../lib/animations'
import CTASection from '../components/CTASection'

type Category = {
  name: string
  images: string[]
  items: string[]
}

const categories: Category[] = [
  {
    name: 'Oleaginosas',
    images: [
      '/images/oleaginosas.jpg',
      '/images/oleaginosas-1.jpg',
      '/images/oleaginosas-2.jpg',
      '/images/oleaginosas-3.jpg',
      '/images/oleaginosas-4.jpg',
      '/images/oleaginosas-5.jpg',
      '/images/oleaginosas-6.jpg',
    ],
    items: ['Castanha do Pará', 'Castanha de Caju', 'Amêndoa', 'Nozes', 'Avelã', 'Macadâmia', 'Pistache', 'Amendoim'],
  },
  {
    name: 'Frutas Secas',
    images: ['/images/frutas-secas.jpg', '/images/frutas-secas-2.jpg', '/images/frutas-secas-3.jpg'],
    items: ['Damasco Seco', 'Tâmara', 'Uva Passa', 'Ameixa Seca', 'Figo Seco', 'Cranberry', 'Mirtilo Seco', 'Manga Seca'],
  },
  {
    name: 'Temperos Naturais',
    images: ['/images/temperos.jpg', '/images/temperos-2.jpg', '/images/temperos-3.jpg'],
    items: ['Açafrão', 'Canela em Pó', 'Cominho', 'Páprica Defumada', 'Cúrcuma', 'Pimenta do Reino', 'Noz-moscada', 'Cardamomo'],
  },
  {
    name: 'Sementes',
    images: ['/images/sementes.jpg'],
    items: ['Chia', 'Linhaça', 'Semente de Abóbora', 'Semente de Girassol', 'Gergelim', 'Quinoa', 'Amaranto'],
  },
  {
    name: 'Variedades',
    images: [
      '/images/variedades-1.jpg',
      '/images/variedades-2.jpg',
      '/images/variedades-3.jpg',
      '/images/variedades-4.jpg',
      '/images/variedades-5.jpg',
    ],
    items: ['Mix de Nuts', 'Granola', 'Trail Mix', 'Mix Tropical', 'Sementes de Abóbora', 'Sementes de Girassol', 'Coco Ralado', 'Goji Berry'],
  },
]

function CardImage({ cat }: { cat: Category }) {
  const [current, setCurrent] = useState(0)
  const { images } = cat
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length)
  const next = () => setCurrent((c) => (c + 1) % images.length)

  return (
    <div className="relative h-44 md:h-52 overflow-hidden group">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${cat.name} ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: i === current ? 1 : 0 }}
          loading="lazy"
          decoding="async"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <h2 className="absolute bottom-4 left-5 text-xl font-bold text-white">{cat.name}</h2>

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Anterior"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_left</span>
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Próximo"
      >
        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>chevron_right</span>
      </button>

      <div className="absolute bottom-4 right-4 flex gap-1">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-1.5 h-1.5 rounded-full transition-colors"
            style={{ background: i === current ? 'white' : 'rgba(255,255,255,0.4)' }}
            aria-label={`Imagem ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function CatalogPage() {
  return (
    <motion.main
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="pt-24 md:pt-40 lg:pt-56 pb-10 md:pb-16 bg-surface">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-10 md:mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-widest mb-4"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>menu_book</span>
              Catálogo de produtos
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight mb-4">
              Nosso catálogo completo
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base text-on-surface/60 max-w-xl mx-auto">
              Conheça nossa linha com mais de 300 produtos de alimentos naturais disponíveis para atacado. Entre em contato para tabela de preços e condições especiais.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <motion.div
                key={cat.name}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="rounded-2xl overflow-hidden bg-white shadow-sm border border-outline/10"
              >
                <CardImage cat={cat} />
                <div className="p-6">
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4 list-none m-0 p-0">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-on-surface/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <motion.a
                    href="https://wa.me/5544997030397"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white no-underline"
                    style={{ background: 'linear-gradient(135deg, #4F74AD, #7A9FD4)' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
                    Solicitar catálogo
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </motion.main>
  )
}
