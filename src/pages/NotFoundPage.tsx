import Page from '../components/Page'
import PillButton from '../components/PillButton'

export default function NotFoundPage() {
  return (
    <Page title="Página não encontrada">
      <section className="bg-ink pb-24 pt-[160px] md:pt-[220px]">
        <div className="container-site">
          <h1 className="text-[clamp(40px,6vw,80px)] font-bold leading-[1] tracking-display">
            <span className="block">Esta página não existe.</span>
            <span className="block text-fog">O catálogo continua aqui.</span>
          </h1>
          <div className="mt-10 flex flex-wrap gap-3">
            <PillButton to="/" variant="cream">
              Voltar ao início
            </PillButton>
            <PillButton to="/catalogo" variant="outline">
              Ver catálogo
            </PillButton>
          </div>
        </div>
      </section>
    </Page>
  )
}
