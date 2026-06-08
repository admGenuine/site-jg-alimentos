import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '../lib/animations'

export default function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-surface-container-low">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative rounded-3xl overflow-hidden p-6 sm:p-10 md:p-12 lg:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, #3A6B50 0%, #4F74AD 60%, #7A9FD4 100%)' }}
        >
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <motion.span
            variants={fadeUp}
            className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 text-white text-xs font-semibold uppercase tracking-widest mb-6"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>storefront</span>
            Para o seu negócio
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="relative text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4"
          >
            Pronto para fazer parte <br className="hidden lg:block" />
            da nossa rede de parceiros?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="relative text-base lg:text-lg text-white/80 max-w-xl mx-auto mb-10"
          >
            Entre em contato agora e solicite seu catálogo completo com tabela de preços e condições especiais para atacado.
          </motion.p>

          <motion.div variants={fadeUp} className="relative flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="https://wa.me/5544997030397?text=Ol%C3%A1!%20Sou%20lojista%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20seu%20cat%C3%A1logo!"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => (window as any).gtag_report_conversion?.()}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-xl bg-white text-primary font-bold text-sm no-underline shadow-lg"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>chat</span>
              Solicitar catálogo via WhatsApp
            </motion.a>
            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>phone</span>
              (44) 99703-0397
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
