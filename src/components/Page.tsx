import { useEffect, type ReactNode } from 'react'
import { motion } from 'framer-motion'

/** Envolve cada página: troca suave entre rotas e título da aba. */
export default function Page({ children, title }: { children: ReactNode; title?: string }) {
  useEffect(() => {
    document.title = title
      ? `${title} | JG Alimentos`
      : 'JG Alimentos | Alimentos naturais no atacado para empresas'
  }, [title])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      {children}
    </motion.main>
  )
}
