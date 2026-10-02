import { Link } from 'react-router-dom'
import heroImage from '@/assets/images/pasteur-1.jpg'
import portraitImage from '@/assets/images/pasteur-2.jpg'
import Icon from '@/components/Icon'
import { MISSION_PILLARS } from '@/data/content'
import { SITE } from '@/data/site'

const PILLAR_ICONS = {
  megaphone: 'megaphone',
  hands: 'heart-hands',
  users: 'users',
}

export default function Accueil() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900">
        <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-100">
              {SITE.tagline}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-tight font-bold text-white sm:text-5xl">
              Un lieu de prière, de guérison et de transformation
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
              {SITE.name} accueille tous les croyants qui cherchent une relation
              authentique avec Dieu, sous la conduite du {SITE.pastor}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Nous contacter
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
              <Link
                to="/qui-sommes-nous"
                className="btn border border-white/40 text-white hover:bg-white/10"
              >
                Découvrir l’église
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt={`${SITE.pastor} en prière`}
              width="640"
              height="480"
              className="aspect-4/3 w-full rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 left-6 rounded-xl bg-white px-5 py-4 shadow-xl">
              <p className="font-display text-sm font-semibold text-brand-900">
                Tous les dimanches
              </p>
              <p className="text-xs text-slate-500">Culte dominical</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold text-brand-950">
              Qui sommes-nous
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Nous croyons à la puissance de la prière, à la guérison divine et à la
              transformation spirituelle. Notre église se veut une famille où chacun
              trouve sa place, quel que soit son parcours.
            </p>
            <Link to="/qui-sommes-nous" className="btn-secondary mt-6">
              En savoir plus
            </Link>
          </div>
          <img
            src={portraitImage}
            alt="Le pasteur en chaire"
            width="640"
            height="480"
            className="aspect-4/3 w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-950">
              Notre mission
            </h2>
            <p className="mt-4 text-slate-600">
              Trois engagements qui résument le cœur de notre ministère à Brazzaville.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {MISSION_PILLARS.map((pillar) => (
              <div key={pillar.title} className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name={PILLAR_ICONS[pillar.icon]} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-950">
                  {pillar.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 px-8 py-14 text-center sm:px-14">
            <h2 className="font-display text-3xl font-bold text-white">
              Venez nous rendre visite
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-100">
              Le temple est ouvert à tous, quel que soit votre parcours. Écrivez-nous
              pour convenir de votre venue ou poser une demande de prière.
            </p>
            <Link to="/contact" className="btn mt-8 bg-white text-brand-800 hover:bg-brand-50">
              Nous contacter
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
