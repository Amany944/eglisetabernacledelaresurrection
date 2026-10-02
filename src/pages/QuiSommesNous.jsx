import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import Icon from '@/components/Icon'
import image1 from '@/assets/images/pasteur-1.jpg'
import image2 from '@/assets/images/pasteur-2.jpg'
import { INTRO } from '@/data/content'
import { SITE } from '@/data/site'

const VALUES = [
  {
    title: 'Une famille spirituelle',
    description:
      'Vous êtes attendu, sans distinction. Chaque parcours est unique et mérite une place.',
  },
  {
    title: 'La parole au centre',
    description:
      "L'enseignement biblique est au cœur de notre vie d'église, pour une foi comprise et vécue.",
  },
  {
    title: 'La prière qui transforme',
    description:
      'Nous croyons aux miracles et à la transformation que seul Dieu peut apporter.',
  },
]

export default function QuiSommesNous() {
  return (
    <>
      <PageHero
        title="Qui sommes-nous"
        breadcrumb="Qui sommes-nous"
        subtitle={INTRO}
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <img
            src={image1}
            alt={`${SITE.pastor} devant la chaire`}
            width="640"
            height="480"
            className="mx-auto aspect-4/3 w-full max-w-4xl rounded-2xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-950">
              Nos valeurs
            </h2>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="card p-7">
                <h3 className="font-display text-xl font-bold text-brand-950">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <img
                src={image2}
                alt={`${SITE.pastor} en chaire`}
                className="aspect-4/3 w-full object-cover lg:aspect-auto lg:h-full"
              />
              <div className="p-8 sm:p-10 lg:p-12">
                <p className="text-sm font-semibold tracking-wide text-slate-400 uppercase">
                  Ministère pastoral
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-brand-950 sm:text-3xl">
                  Notre pasteur
                </h2>
                <p className="mt-2 font-medium text-brand-800">{SITE.pastor}</p>
                <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
                  <p>
                    Il conduit notre assemblée et anime l’enseignement biblique, la
                    prière et l’accompagnement spirituel de chaque membre, quel que
                    soit son parcours.
                  </p>
                  <p>
                    Il organise des réunions de prière pour la guérison divine, la
                    délivrance spirituelle et la transformation personnelle selon la
                    volonté de Dieu.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/contact" className="btn-primary">
                    Nous contacter
                    <Icon name="arrow-right" className="h-4 w-4" />
                  </Link>
                  <a href={SITE.phoneHref} className="btn-secondary">
                    <Icon name="phone" className="h-4 w-4" />
                    {SITE.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
