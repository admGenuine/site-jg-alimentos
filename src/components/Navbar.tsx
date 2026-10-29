import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import PillButton from './PillButton'
import { LogoLink, WhatsAppGlyph } from './ui'
import { WHATSAPP_DISPLAY, waLink, trackConversion } from '../lib/site'

const links = [
  { label: 'Início', to: '/' },
  { label: 'Catálogo', to: '/catalogo' },
  { label: 'Como comprar', to: '/#como-comprar' },
  { label: 'Sobre a JG', to: '/sobre' },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  // o menu fica aberto só na página em que foi aberto: trocar de rota fecha sozinho
  const here = location.pathname + location.hash
  const [openAt, setOpenAt] = useState<string | null>(null)
  const open = openAt === here
  const setOpen = (v: boolean | ((o: boolean) => boolean)) => {
    const next = typeof v === 'function' ? v(open) : v
    setOpenAt(next ? here : null)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // trava a rolagem e permite fechar com Esc
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenAt(null)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const isActive = (to: string) => (to.includes('#') ? false : to === '/' ? location.pathname === '/' : location.pathname.startsWith(to))

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open ? 'border-b border-line bg-paper/90 backdrop-blur-md' : 'border-b border-transparent bg-paper'
        }`}
      >
        <nav className="container-site flex h-[72px] items-center justify-between md:h-[84px]" aria-label="Principal">
          <LogoLink size={44} onClick={() => setOpen(false)} />

          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {links.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  className={`text-[14px] font-medium text-ink transition-opacity duration-200 hover:opacity-100 ${
                    isActive(l.to) ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <PillButton href={waLink()} whatsapp variant="dark" className="hidden !h-11 md:inline-flex">
              Pedir tabela de preços
            </PillButton>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 md:hidden"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              aria-controls="menu-mobile"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 rounded bg-ink transition-transform duration-300 ${
                    open ? 'translate-y-[5px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-5 rounded bg-ink transition-transform duration-300 ${
                    open ? '-translate-y-[5px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className="fixed inset-0 z-40 flex flex-col bg-paper px-5 pb-8 pt-[96px] text-ink md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-[40px] font-bold leading-tight tracking-heading"
                  >
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-4">
              <p className="text-[15px] leading-relaxed text-mute">
                Vendemos somente para empresas com CNPJ. Fale com a equipe comercial pelo WhatsApp {WHATSAPP_DISPLAY}.
              </p>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackConversion}
                className="flex h-14 items-center justify-center gap-2.5 rounded-full bg-ink text-[15px] font-semibold text-white"
              >
                <WhatsAppGlyph size={20} />
                Pedir tabela de preços
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
