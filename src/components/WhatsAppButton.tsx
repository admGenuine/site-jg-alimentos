import { motion, useReducedMotion } from 'framer-motion'
import { waLink, trackConversion } from '../lib/site'
import { WhatsAppGlyph } from './ui'

/** Ícone flutuante de WhatsApp no canto inferior direito. */
export default function WhatsAppButton() {
  const reduce = useReducedMotion()
  return (
    <motion.a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackConversion}
      initial={reduce ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] md:bottom-7 md:right-7 md:h-16 md:w-16"
      aria-label="Falar com a JG no WhatsApp"
    >
      <WhatsAppGlyph size={30} />
    </motion.a>
  )
}
