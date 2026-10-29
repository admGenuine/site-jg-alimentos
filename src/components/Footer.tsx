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

const inputCls =
  'h-12 min-w-0 rounded-full border border-line bg-paper px-5 text-[15px] text-ink placeholder:text-mute focus:outline-none focus-visible:ring-2 focus-visible:ring-brand'

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
      <p id="form-help" className="mb-3 text-[13px] font-medium text-mute">
        Peça a tabela de atacado
      </p>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0 sm:rounded-full sm:border sm:border-line sm:bg-paper sm:p-1.5">
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
          className={`${inputCls} sm:flex-1 sm:border-0 sm:bg-transparent`}
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
          className={`${inputCls} sm:w-32 sm:rounded-none sm:border-0 sm:border-l sm:bg-transparent`}
        />
        <PillButton type="submit" variant="dark" className="!h-12 sm:!h-11">
          Enviar
        </PillButton>
      </div>
      {error && (
        <p role="alert" className="mt-2 text-[13px] font-medium text-[#B42318]">
          {error}
        </p>
      )}
      <p className="mt-2 text-[12px] text-mute">Abre o WhatsApp com a mensagem pronta. Atendemos somente empresas.</p>
    </form>
  )
}

const linkCls = 'transition-colors hover:text-ink'

export default function Footer() {
  return (
    <footer className="bg-shell pt-20 text-ink md:pt-28">
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
              <ul className="flex flex-col gap-2.5 text-[15px] text-mute">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <Link className={linkCls} to={`/catalogo?categoria=${c.slug}`}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-4 text-[20px] font-semibold tracking-heading">Empresa</p>
              <ul className="flex flex-col gap-2.5 text-[15px] text-mute">
                <li>
                  <Link className={linkCls} to="/sobre">
                    Sobre a JG
                  </Link>
                </li>
                <li>
                  <Link className={linkCls} to="/catalogo">
                    Catálogo
                  </Link>
                </li>
                <li>
                  <Link className={linkCls} to="/#como-comprar">
                    Como comprar
                  </Link>
                </li>
                <li>
                  <a className={linkCls} href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="mb-4 text-[20px] font-semibold tracking-heading">Contato</p>
              <ul className="flex flex-col gap-2.5 text-[15px] text-mute">
                <li>
                  <a
                    className={`whitespace-nowrap ${linkCls}`}
                    href={waLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={trackConversion}
                  >
                    WhatsApp {WHATSAPP_DISPLAY}
                  </a>
                </li>
                <li>
                  <a className={linkCls} href={`mailto:${EMAIL}`}>
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
        <p className="whitespace-nowrap text-center text-[16.5vw] font-bold leading-[0.95] tracking-[-0.06em] text-ink min-[1360px]:text-[224px]">
          jg alimentos
        </p>
      </div>

      <div className="container-site flex flex-col gap-2 border-t border-line py-8 text-[13px] text-mute sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} JG Alimentos. Todos os direitos reservados.</p>
        <p>CNPJ {CNPJ}. Venda exclusiva para pessoa jurídica.</p>
      </div>
    </footer>
  )
}
