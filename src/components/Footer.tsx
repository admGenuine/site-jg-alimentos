import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import PillButton from './PillButton'
import {
  categories,
  CITY,
  CNPJ,
  EMAIL,
  INSTAGRAM,
  WHATSAPP_DISPLAY,
  waLink,
  trackConversion,
} from '../lib/site'

function QuoteForm() {
  const [empresa, setEmpresa] = useState('')
  const [cidade, setCidade] = useState('')
  const [error, setError] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    if (empresa.trim().length < 2) {
      setError('Informe o nome da empresa para liberarmos a tabela de atacado.')
      return
    }
    setError('')
    const msg = `Olá! Sou da empresa ${empresa.trim()}${cidade.trim() ? `, de ${cidade.trim()}` : ''}, e quero receber a tabela de preços de atacado da JG.`
    trackConversion()
    window.open(waLink(msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={submit} noValidate className="w-full max-w-md" aria-describedby="form-help">
      <p id="form-help" className="mb-3 text-[13px] font-medium text-fog">
        Peça a tabela de atacado
      </p>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:bg-graphite sm:p-1.5">
        <label className="sr-only" htmlFor="f-empresa">
          Nome da empresa
        </label>
        <input
          id="f-empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          placeholder="Nome da empresa"
          autoComplete="organization"
          aria-invalid={!!error}
          className="h-12 min-w-0 rounded-full bg-graphite px-5 sm:flex-1 text-[15px] text-cream placeholder:text-fog/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky sm:bg-transparent"
        />
        <label className="sr-only" htmlFor="f-cidade">
          Cidade
        </label>
        <input
          id="f-cidade"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          placeholder="Cidade"
          autoComplete="address-level2"
          className="h-12 min-w-0 rounded-full bg-graphite px-5 text-[15px] text-cream placeholder:text-fog/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky sm:w-32 sm:bg-transparent"
        />
        <PillButton type="submit" variant="cream" className="!h-12 sm:!h-11">
          Enviar
        </PillButton>
      </div>
      {error && (
        <p role="alert" className="mt-2 text-[13px] text-rose">
          {error}
        </p>
      )}
      <p className="mt-2 text-[12px] text-fog/80">Abre o WhatsApp com a mensagem pronta. Atendemos somente empresas.</p>
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink pt-20 md:pt-28">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <h3 className="mb-8 max-w-sm text-[26px] font-semibold leading-[1.15] tracking-heading md:text-[30px]">
              Alimentos naturais no atacado, de Maringá para todo o Brasil.
            </h3>
            <QuoteForm />
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-[auto_auto_1fr] sm:gap-14">
            <div>
              <p className="mb-4 text-[20px] font-semibold tracking-heading">Produtos</p>
              <ul className="flex flex-col gap-2.5 text-[15px] text-cream/80">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link className="hover:text-cream" to={`/catalogo?categoria=${c.slug}`}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[20px] font-semibold tracking-heading">Empresa</p>
              <ul className="flex flex-col gap-2.5 text-[15px] text-cream/80">
                <li>
                  <Link className="hover:text-cream" to="/sobre">
                    Sobre a JG
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-cream" to="/catalogo">
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-cream" to="/#como-comprar">
                    Como comprar
                  </Link>
                </li>
                <li>
                  <a className="hover:text-cream" href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 text-[20px] font-semibold tracking-heading">Contato</p>
              <ul className="flex flex-col gap-2.5 text-[15px] text-cream/80">
                <li>
                  <a className="whitespace-nowrap hover:text-cream" href={waLink()} target="_blank" rel="noopener noreferrer" onClick={trackConversion}>
                    WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li>
                  <a className="hover:text-cream" href={`mailto:${EMAIL}`}>
                    {EMAIL}
                  </a>
                </li>
                <li>{CITY}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Marca gigante, como o "machi" no rodapé de referência */}
      <div className="container-site mt-16 pb-[2vw] md:mt-24" aria-hidden="true">
        <p className="whitespace-nowrap text-center text-[16.5vw] font-bold leading-[0.95] tracking-[-0.06em] text-cream min-[1360px]:text-[224px]">
          jg alimentos
        </p>
      </div>

      <div className="container-site flex flex-col gap-2 py-8 text-[13px] text-fog sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} JG Alimentos. Todos os direitos reservados.</p>
        <p>CNPJ {CNPJ}. Venda exclusiva para pessoa jurídica.</p>
      </div>
    </footer>
  )
}
