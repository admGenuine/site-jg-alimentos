import PillButton from './PillButton'
import { Reveal, WhatsAppGlyph } from './ui'
import { waLink } from '../lib/site'

/** Chamada final: card grande com foto e o convite para pedir a tabela. */
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
    <section className="bg-paper py-20 md:py-28" aria-label="Pedir tabela de preços">
      <div className="container-site">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-card">
            <img
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/75 via-ink/40 to-ink/0" />
            <div className="flex min-h-[480px] flex-col justify-end p-7 text-white md:min-h-[560px] md:justify-center md:p-14">
              <h2 className="max-w-[760px] text-[clamp(32px,4.4vw,56px)] font-bold leading-[1.02] tracking-heading">
                <span className="block">{first}</span>
                <span className="block">{second}</span>
              </h2>
              <p className="mt-5 max-w-[460px] text-[16px] leading-[1.6] text-white/85 md:text-[17px]">
                Envie o nome da empresa e o CNPJ. A equipe comercial responde com preços e condições de atacado.
              </p>
              <div className="mt-8">
                <PillButton href={waLink()} whatsapp variant="light" size="lg" icon={<WhatsAppGlyph size={20} />}>
                  Chamar no WhatsApp
                </PillButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
