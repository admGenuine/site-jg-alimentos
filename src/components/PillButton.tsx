import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { trackConversion } from '../lib/site'

type Variant = 'dark' | 'light' | 'outline' | 'outline-light'

const styles: Record<Variant, string> = {
  dark: 'bg-ink text-white hover:bg-black',
  light: 'bg-white text-ink hover:bg-cream',
  outline: 'border border-ink/15 text-ink hover:border-ink/50',
  'outline-light': 'border border-white/40 text-white hover:border-white/80',
}

type Props = {
  children: string
  variant?: Variant
  size?: 'md' | 'lg'
  className?: string
  icon?: ReactNode
  /** rota interna (react-router) */
  to?: string
  /** link externo */
  href?: string
  /** link de WhatsApp: abre em nova aba e registra conversão */
  whatsapp?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  ariaLabel?: string
}

export default function PillButton({
  children,
  variant = 'dark',
  size = 'md',
  className = '',
  icon,
  to,
  href,
  whatsapp,
  onClick,
  type = 'button',
  ariaLabel,
}: Props) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold whitespace-nowrap transition-colors duration-300 select-none'
  const sizing = size === 'lg' ? 'h-12 px-5 text-[15px] md:h-14 md:px-7' : 'h-12 px-6 text-[15px]'
  const cls = `${base} ${sizing} ${styles[variant]} ${className}`

  const label = (
    <>
      {icon}
      <span className="roll" aria-hidden="true">
        <span>{children}</span>
        <span>{children}</span>
      </span>
      <span className="sr-only">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} aria-label={ariaLabel}>
        {label}
      </Link>
    )
  }

  if (href) {
    const external = whatsapp || /^https?:/.test(href)
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        onClick={() => {
          if (whatsapp) trackConversion()
          onClick?.()
        }}
      >
        {label}
      </a>
    )
  }

  return (
    <button type={type} className={cls} onClick={onClick} aria-label={ariaLabel}>
      {label}
    </button>
  )
}
