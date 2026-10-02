import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-bold text-brand-200">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-brand-950">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-md text-slate-600">
        La page que vous cherchez n’existe pas ou a été déplacée. Utilisez la navigation
        pour poursuivre votre visite.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Retour à l’accueil
      </Link>
    </section>
  )
}
