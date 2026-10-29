import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'

const EASE = [0.22, 1, 0.36, 1] as const

/** Letreiro gigante que corre na horizontal (o "ticker" da Machi). */
export function Marquee({
  items,
  className = '',
  itemClassName = '',
  duration = 60,
}: {
  items: string[]
  className?: string
  itemClassName?: string
  duration?: number
}) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <span key={i} className={`flex items-center whitespace-nowrap ${itemClassName}`}>
          {t}
          <span className="mx-[0.35em]">•</span>
        </span>
      ))}
    </div>
  )
  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee" style={{ animationDuration: `${duration}s` }}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

/** Entrada única por bloco: sobe 24px e aparece. Respeita "reduzir movimento". */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const reduce = useReducedMotion()
  const M = motion[as]
  return (
    <M
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </M>
  )
}

/** Número que conta de 0 até o valor quando entra na tela. */
export function CountUp({ value, suffix = '', className = '' }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView || reduce) return
    let raf = 0
    const start = performance.now()
    const dur = 1400
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(value * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, value])

  return (
    <span ref={ref} className={className}>
      {reduce ? value : n}
      {suffix}
    </span>
  )
}

export function Logo({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src="/img/logo-jg.png"
      alt="JG Alimentos Naturais"
      width={size}
      height={size}
      className={`block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

export function LogoLink({ size = 48, onClick }: { size?: number; onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-3" aria-label="JG Alimentos, página inicial">
      <Logo size={size} />
      <span className="hidden text-[17px] font-bold tracking-heading sm:inline">jg alimentos</span>
    </Link>
  )
}

export function WhatsAppGlyph({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.482.664 4.81 1.824 6.82L2 30l7.38-1.794A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.9-1.614l-.424-.254-4.378 1.064 1.1-4.27-.277-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.594 9.594 4.4 16 4.4S27.6 9.594 27.6 16 22.406 27.6 16 27.6zm6.344-8.668c-.348-.174-2.058-1.016-2.378-1.132-.32-.116-.552-.174-.784.174-.232.348-.9 1.132-1.104 1.364-.204.232-.406.26-.754.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.204-.348-.022-.536.154-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.028-.61-.086-.174-.784-1.89-1.074-2.588-.282-.68-.57-.588-.784-.598l-.668-.012a1.28 1.28 0 0 0-.928.436c-.32.348-1.216 1.188-1.216 2.896s1.244 3.358 1.418 3.59c.174.232 2.45 3.74 5.934 5.244.83.358 1.476.572 1.982.732.832.266 1.59.228 2.188.138.668-.1 2.058-.842 2.348-1.656.29-.814.29-1.512.204-1.656-.086-.144-.318-.232-.666-.406z" />
    </svg>
  )
}

/** Título de seção em duas linhas, no padrão da Machi ("The fan favorites, / best served cold"). */
export function TwoLineHeading({
  first,
  second,
  as = 'h2',
  className = '',
  secondClassName = 'text-current',
}: {
  first: string
  second: string
  as?: 'h1' | 'h2'
  className?: string
  secondClassName?: string
}) {
  const Tag = as
  return (
    <Tag className={`font-bold tracking-heading leading-[1.02] ${className}`}>
      <span className="block">{first}</span>
      <span className={`block ${secondClassName}`}>{second}</span>
    </Tag>
  )
}
