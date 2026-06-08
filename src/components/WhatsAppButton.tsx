import { motion } from 'framer-motion'

const WA_HREF =
  'https://wa.me/5544997030397?text=Ol%C3%A1!%20Sou%20lojista%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20seu%20cat%C3%A1logo!'

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
        className="bg-white text-on-surface text-xs font-semibold px-3 py-2 rounded-xl shadow-lg pointer-events-none select-none"
      >
        Fale conosco!
      </motion.span>

      <div className="relative">
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]/40 pointer-events-none"
          animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
        />
        <motion.a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => (window as any).gtag_report_conversion?.()}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl"
          style={{ background: '#25D366' }}
          aria-label="Conversar no WhatsApp"
        >
          <svg viewBox="0 0 32 32" fill="white" width="28" height="28" aria-hidden="true">
            <path d="M16 2C8.268 2 2 8.268 2 16c0 2.482.664 4.81 1.824 6.82L2 30l7.38-1.794A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.9-1.614l-.424-.254-4.378 1.064 1.1-4.27-.277-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.594 9.594 4.4 16 4.4S27.6 9.594 27.6 16 22.406 27.6 16 27.6zm6.344-8.668c-.348-.174-2.058-1.016-2.378-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.104 1.364-.204.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.204-.348-.022-.536.154-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.028-.61-.086-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.598l-.668-.012a1.28 1.28 0 0 0-.928.436c-.32.348-1.216 1.188-1.216 2.896s1.244 3.358 1.418 3.59c.174.232 2.45 3.74 5.934 5.244.83.358 1.476.572 1.982.732.832.266 1.59.228 2.188.138.668-.1 2.058-.842 2.348-1.656.29-.814.29-1.512.204-1.656-.086-.144-.318-.232-.666-.406z" />
          </svg>
        </motion.a>
      </div>
    </div>
  )
}
