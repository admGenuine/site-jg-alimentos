import PillButton from './PillButton'
import { Reveal, WhatsAppGlyph } from './ui'
import { waLink } from '../lib/site'

/** Faixa de foto em tela cheia com a chamada final (o "Real organic beans" da referência). */
export default function CTABand({
  image = '/img/oleaginosas.webp',
  first = 'Tabela de preços para o seu CNPJ.',
  second = 'Peça agora pelo WhatsApp.',
}: {
  image?: string
  first?: string
  second?: string
}) {
  return (
    <section className="relative isolate overflow-hidden" aria-label="Pedir tabela de preços">
      <img
        src={image}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/85 via-ink/45 to-ink/10" />
      <div className="container-site flex min-h-[560px] flex-col justify-start py-16 md:min-h-[680px] md:py-20">
        <Reveal>
          <h2 className="max-w-[920px] text-[clamp(34px,4.6vw,56px)] font-bold leading-[1.02] tracking-heading">
            <span className="block">{first}</span>
            <span className="block">{second}</span>
          </h2>
          <p className="mt-5 max-w-[460px] text-[17px] leading-[1.6] text-cream/85">
            Envie o nome da empresa e o CNPJ. A equipe comercial responde com preços e condições de atacado.
          </p>
          <div className="mt-8">
            <PillButton href={waLink()} whatsapp variant="cream" size="lg" icon={<WhatsAppGlyph size={20} />}>
              Chamar no WhatsApp
            </PillButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
