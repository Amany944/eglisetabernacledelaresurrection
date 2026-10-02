import { Link } from 'react-router-dom'
import logo from '@/assets/images/logo.jpg'
import { NAV_LINKS, SITE } from '@/data/site'
import Icon from '@/components/Icon'

// Calculé une seule fois au chargement du module : l'année ne change pas
// pendant la durée de vie de la page.
const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              width="44"
              height="44"
              className="h-11 w-11 rounded-lg bg-white object-cover"
            />
            <span className="font-display text-lg font-bold text-white">
              {SITE.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-200">{SITE.tagline}</p>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-white">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-brand-200 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-white">Nous joindre</h2>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li className="flex gap-3">
              <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="h-4 w-4 shrink-0" />
              <a href={SITE.phoneHref} className="hover:text-white">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="h-4 w-4 shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base font-semibold text-white">
            Nous rendre visite
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            Le temple est ouvert à tous. Venez comme vous êtes, nous sommes en famille.
          </p>
          <Link to="/contact" className="btn-primary mt-5">
            Planifier votre visite
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="container-page py-6 text-center text-sm text-brand-300">
          © {CURRENT_YEAR} {SITE.name}. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
