// Dados centrais do site da JG Alimentos.
// Tudo que aparece em mais de um lugar (WhatsApp, categorias, números) mora aqui.

export const WHATSAPP_NUMBER = '5544997030397'
export const WHATSAPP_DISPLAY = '(44) 99703-0397'
export const EMAIL = 'contato@jgalimentos.com.br'
export const CITY = 'Maringá - PR'
export const CNPJ = '47.217.599/0001-83'
export const INSTAGRAM = 'https://www.instagram.com/jg_alimentos/'

export const DEFAULT_WA_MESSAGE =
  'Olá! Sou lojista e tenho interesse em saber mais sobre seu catálogo!'

export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Dispara a conversão do Google Ads (definida no index.html) sem bloquear o clique. */
export function trackConversion() {
  const w = window as unknown as { gtag_report_conversion?: () => void }
  try {
    w.gtag_report_conversion?.()
  } catch {
    /* rastreamento nunca pode quebrar o botão */
  }
}

export type Category = {
  slug: string
  name: string
  short: string
  description: string
  tone: string // cor pastel do card
  cover: string
  images: string[]
  items: string[]
}

export const categories: Category[] = [
  {
    slug: 'oleaginosas',
    name: 'Oleaginosas',
    short: 'Castanhas, nozes, amêndoas e muito mais.',
    description:
      'Castanha do Pará, caju, amêndoa, nozes, macadâmia e pistache, selecionadas para granel e reembalagem.',
    tone: '#F6E1D0',
    cover: '/img/oleaginosas-6.webp',
    images: [
      '/img/oleaginosas-6.webp',
      '/img/oleaginosas.webp',
      '/img/oleaginosas-1.webp',
      '/img/oleaginosas-2.webp',
      '/img/oleaginosas-3.webp',
      '/img/oleaginosas-4.webp',
      '/img/oleaginosas-5.webp',
    ],
    items: ['Castanha do Pará', 'Castanha de Caju', 'Amêndoa', 'Nozes', 'Avelã', 'Macadâmia', 'Pistache', 'Amendoim'],
  },
  {
    slug: 'frutas-secas',
    name: 'Frutas secas',
    short: 'Damascos, tâmaras, uvas passas e outras.',
    description:
      'Frutas desidratadas e cristalizadas para gôndola, confeitaria e mix: damasco, tâmara, cranberry, figo e mais.',
    tone: '#F6DCDD',
    cover: '/img/frutas-secas-2.webp',
    images: ['/img/frutas-secas-2.webp', '/img/frutas-secas-3.webp', '/img/frutas-secas.webp'],
    items: ['Damasco Seco', 'Tâmara', 'Uva Passa', 'Ameixa Seca', 'Figo Seco', 'Cranberry', 'Mirtilo Seco', 'Manga Seca'],
  },
  {
    slug: 'temperos',
    name: 'Temperos naturais',
    short: 'Especiarias selecionadas para o seu negócio.',
    description:
      'Especiarias e temperos naturais para venda a granel, cozinhas profissionais e indústria.',
    tone: '#FBEDCB',
    cover: '/img/temperos-2.webp',
    images: ['/img/temperos-2.webp', '/img/temperos.webp', '/img/temperos-3.webp'],
    items: ['Açafrão', 'Canela em Pó', 'Cominho', 'Páprica Defumada', 'Cúrcuma', 'Pimenta do Reino', 'Noz-moscada', 'Cardamomo'],
  },
  {
    slug: 'sementes',
    name: 'Sementes',
    short: 'Chia, linhaça, abóbora, girassol e outras.',
    description: 'Sementes e grãos funcionais com giro alto na gôndola de naturais.',
    tone: '#E3EAD2',
    cover: '/img/sementes.webp',
    images: ['/img/sementes.webp'],
    items: ['Chia', 'Linhaça', 'Semente de Abóbora', 'Semente de Girassol', 'Gergelim', 'Quinoa', 'Amaranto'],
  },
  {
    slug: 'variedades',
    name: 'Variedades',
    short: 'Mix, granola, chips e muito mais.',
    description: 'Mixes prontos, granolas, chips e confeitos para completar o mix da sua loja.',
    tone: '#DCE8F1',
    cover: '/img/variedades-2.webp',
    images: [
      '/img/variedades-2.webp',
      '/img/variedades-1.webp',
      '/img/variedades-3.webp',
      '/img/variedades-4.webp',
      '/img/variedades-5.webp',
    ],
    items: ['Mix de Nuts', 'Granola', 'Trail Mix', 'Mix Tropical', 'Sementes de Abóbora', 'Sementes de Girassol', 'Coco Ralado', 'Goji Berry'],
  },
]

export function categoryMessage(name: string) {
  return `Olá! Tenho uma empresa e quero a tabela de preços de ${name}.`
}

export const stats = [
  { value: 6, suffix: '+', label: 'Anos de mercado' },
  { value: 500, suffix: '+', label: 'Clientes ativos' },
  { value: 300, suffix: '+', label: 'Produtos no catálogo' },
]

export const audiences = [
  'Supermercados e redes de varejo',
  'Lojas de produtos naturais e empórios',
  'Distribuidores e atacadistas',
  'Empresas que reembalam e revendem',
]

export const steps = [
  { title: 'Chame no WhatsApp', text: 'Diga o nome da empresa e o CNPJ. É assim que liberamos a tabela de atacado.' },
  { title: 'Receba a tabela', text: 'Você recebe preços e condições especiais de atacado para o seu volume.' },
  { title: 'Feche o pedido', text: 'Separamos no nosso estoque em Maringá e enviamos para todo o Brasil.' },
]
