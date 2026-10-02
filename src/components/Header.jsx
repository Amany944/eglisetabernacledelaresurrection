import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '@/assets/images/logo.jpg'
import { NAV_LINKS, SITE } from '@/data/site'
import Icon from '@/components/Icon'

function navLinkClass({ isActive }) {
  return [
    'text-sm font-medium transition-colors',
    isActive
      ? 'text-brand-700 underline decoration-brand-300 decoration-2 underline-offset-8'
      : 'text-slate-600 hover:text-brand-700',
  ].join(' ')
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return undefined

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logo}
            alt={`Logo ${SITE.name}`}
            width="44"
            height="44"
            className="h-11 w-11 rounded-lg object-cover"
          />
          <span className="font-display text-lg leading-tight font-bold text-brand-900">
            {SITE.name}
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.to === '/'} className={navLinkClass}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-brand-600 xl:flex"
          >
            <Icon name="phone" className="h-4 w-4" />
            {SITE.phone}
          </a>
          <Link to="/contact" className="btn-primary hidden sm:inline-flex">
            Nous contacter
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="menu-mobile"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="btn-secondary px-3 py-2 lg:hidden"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    [
                      'block rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-brand-50 text-brand-800'
                        : 'text-slate-700 hover:bg-slate-50',
                    ].join(' ')
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
