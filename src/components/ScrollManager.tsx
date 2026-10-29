import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Vai para o topo ao trocar de página e rola até a âncora quando a URL tem #. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      let tries = 0
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72
          window.scrollTo({ top, behavior: 'smooth' })
        } else if (tries++ < 20) {
          window.setTimeout(tryScroll, 60)
        }
      }
      window.setTimeout(tryScroll, 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [pathname, hash])

  return null
}
