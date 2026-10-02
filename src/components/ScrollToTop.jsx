import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Remet la vue en haut à chaque changement de page. */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
