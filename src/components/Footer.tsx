import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { stagger, fadeUp, viewport } from '../lib/animations'

const nav = [
  { label: 'Início', to: '/' },
  { label: 'Catálogo', to: '/catalogo' },
  { label: 'Sobre Nós', to: '/sobre' },
]

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pb-8 md:pb-12 border-b border-white/10"
        >
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-1">
            <img src="/logo.svg" alt="JG Alimentos" className="h-14 md:h-20 w-auto mb-3" />
            <p className="text-sm text-inverse-on-surface/60 leading-relaxed max-w-xs">
              Distribuidor atacadista de alimentos naturais com mais de 6 anos de experiência no mercado brasileiro.
            </p>
            <div className="flex gap-3 mt-6">
              <motion.a
                href="https://www.instagram.com/jg_alimentos/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary/80 flex items-center justify-center transition-colors no-underline"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-inverse-on-surface">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-xs font-bold uppercase tracking-widest text-inverse-on-surface/40 mb-5">Navegação</p>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm text-inverse-on-surface/70 hover:text-inverse-on-surface transition-colors no-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <p className="text-xs font-bold uppercase tracking-widest text-inverse-on-surface/40 mb-5">Contato</p>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {[
                { icon: 'chat', text: 'WhatsApp: (44) 99703-0397' },
                { icon: 'mail', text: 'contato@jgalimentos.com.br' },
                { icon: 'location_on', text: 'Maringá - PR' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-2 text-sm text-inverse-on-surface/70">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontSize: '16px' }}>
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-inverse-on-surface/40">
          <p>© {new Date().getFullYear()} JG Alimentos. Todos os direitos reservados.</p>
          <p>CNPJ: 47.217.599/0001-83 — Brasil</p>
        </div>
      </div>
    </footer>
  )
}
