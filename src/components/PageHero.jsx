import { Link } from 'react-router-dom'

/** Bandeau de titre utilisé en haut des pages intérieures. */
export default function PageHero({ title, subtitle, breadcrumb, children }) {
  return (
    <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 sm:py-20">
      <div className="container-page">
        {children && <div className="mb-8">{children}</div>}
        <nav aria-label="Fil d'Ariane" className="mb-4 text-sm text-brand-200">
          <Link to="/" className="transition-colors hover:text-white">
            Accueil
          </Link>
          {breadcrumb && (
            <>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span className="text-white">{breadcrumb}</span>
            </>
          )}
        </nav>
        <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-100">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
