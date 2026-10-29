import PillButton from '../PillButton'
import { Reveal, WhatsAppGlyph } from '../ui'
import { audiences, steps, waLink } from '../../lib/site'

export default function Audience() {
  return (
    <section className="bg-paper py-24 md:py-32" aria-labelledby="para-quem">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-[1.15fr_1fr] md:gap-20">
          <Reveal>
            <h2 id="para-quem" className="text-[clamp(34px,4.6vw,56px)] font-bold leading-[1.02] tracking-heading">
              A JG vende somente para empresas.
            </h2>
            <p className="mt-6 max-w-[520px] text-[17px] leading-[1.6] text-mute md:text-[18px]">
              Não atendemos pessoa física. Se a sua empresa revende, reembala ou trabalha com alimentos naturais, a
              gente abastece com preço de atacado e condições para o seu volume.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-2 text-[14px] font-medium text-mute">Quem compra com a gente</p>
            <ul className="border-t border-line">
              {audiences.map((a) => (
                <li
                  key={a}
                  className="border-b border-line py-5 text-[20px] font-semibold leading-snug tracking-heading md:text-[24px]"
                >
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div id="como-comprar" className="mt-24 scroll-mt-24 md:mt-32">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="text-[clamp(30px,3.6vw,44px)] font-bold leading-[1.05] tracking-heading">
              <span className="block">Comprar é simples,</span>
              <span className="block text-mute">em três passos.</span>
            </h2>
            <PillButton href={waLink()} whatsapp variant="dark" icon={<WhatsAppGlyph size={18} />}>
              Começar pelo WhatsApp
            </PillButton>
          </Reveal>

          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.08} className="rounded-card bg-shell p-7 md:p-8">
                <span className="text-[44px] font-bold leading-none tracking-display text-brand">{i + 1}</span>
                <h3 className="mt-10 text-[22px] font-semibold tracking-heading">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-mute">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
