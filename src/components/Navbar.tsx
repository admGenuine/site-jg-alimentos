import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import Logo from './Logo'

const links = [
  { label: 'Início', to: '/' },
  { label: 'Catálogo', to: '/catalogo' },
  { label: 'Sobre Nós', to: '/sobre' },
]

const getActiveFromPath = (p: string) => {
  if (p === '/catalogo') return 'Catálogo'
  if (p === '/sobre') return 'Sobre Nós'
  return 'Início'
}

const navVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0 },
}

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [active, setActive] = useState(() => getActiveFromPath(location.pathname))
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setActive(getActiveFromPath(location.pathname))
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (window.scrollY > 80) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (label: string, to: string) => {
    setActive(label)
    setMenuOpen(false)
    navigate(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      } bg-surface/80 backdrop-blur-md`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 md:h-20 lg:h-24 flex items-center relative">
        {/* Logo */}
        <motion.div
          className="cursor-pointer flex-shrink-0"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleNav('Início', '/')}
        >
          <span className="md:hidden"><Logo size={56} /></span>
          <span className="hidden md:block"><Logo size={80} /></span>
        </motion.div>

        {/* Desktop nav links */}
        <motion.ul
          variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
          initial="hidden"
          animate="visible"
          className="hidden md:flex items-center gap-1 list-none m-0 p-0 absolute left-1/2 -translate-x-1/2"
        >
          {links.map((link) => {
            const isActive = active === link.label
            return (
              <motion.li
                key={link.label}
                variants={itemVariants}
                className="relative px-4 py-2 cursor-pointer"
                onClick={() => handleNav(link.label, link.to)}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 34 }}
                  />
                )}
                <span
                  className={`relative text-sm font-medium transition-colors duration-200 pointer-events-none ${
                    isActive ? 'text-primary' : 'text-on-surface/70'
                  }`}
                >
                  {link.label}
                </span>
              </motion.li>
            )
          })}
        </motion.ul>

        {/* Desktop CTA */}
        <motion.a
          href="https://wa.me/5544997030397?text=Ol%C3%A1%21%20Sou%20lojista%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20seu%20cat%C3%A1logo%21"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white no-underline ml-auto"
          style={{ background: 'linear-gradient(135deg, #4F74AD, #7A9FD4)' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>chat</span>
          Fale conosco
        </motion.a>

        {/* Mobile: ícone WhatsApp + botão hamburger */}
        <div className="flex items-center gap-2 ml-auto md:hidden">
          <motion.a
            href="https://wa.me/5544997030397?text=Ol%C3%A1%21%20Sou%20lojista%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20seu%20cat%C3%A1logo%21"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-10 h-10 rounded-full text-white"
            style={{ background: 'linear-gradient(135deg, #4F74AD, #7A9FD4)' }}
            aria-label="Fale conosco no WhatsApp"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
          </motion.a>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex items-center justify-center w-10 h-10 rounded-xl text-on-surface/70"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <motion.span
              key={menuOpen ? 'close' : 'menu'}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.18 }}
              className="material-symbols-outlined"
              style={{ fontSize: '24px' }}
            >
              {menuOpen ? 'close' : 'menu'}
            </motion.span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-surface/95 backdrop-blur-md border-t border-outline/10"
          >
            <ul className="list-none m-0 p-0 px-4 py-3 flex flex-col gap-1">
              {links.map((link) => {
                const isActive = active === link.label
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.label, link.to)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-on-surface/70 hover:bg-surface-container'
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
