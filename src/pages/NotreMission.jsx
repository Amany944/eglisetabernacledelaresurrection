import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import { MISSION_COMMITMENT, MISSION_PILLARS } from '@/data/content'

const PILLAR_ICONS = {
  megaphone: 'megaphone',
  hands: 'heart-hands',
  users: 'users',
}

export default function NotreMission() {
  return (
    <>
      <PageHero
        title="Notre mission"
        breadcrumb="Notre mission"
        subtitle="Notre ministère se déploie à travers trois engagements, au service de la communauté de Brazzaville."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-8 sm:grid-cols-3">
          {MISSION_PILLARS.map((pillar, index) => (
            <div key={pillar.title} className="card p-7">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-700 text-white">
                <Icon name={PILLAR_ICONS[pillar.icon]} className="h-7 w-7" />
              </span>
              <p className="mt-5 font-display text-sm font-semibold text-slate-400">
                0{index + 1}
              </p>
              <h2 className="mt-1 font-display text-xl font-bold text-brand-950">
                {pillar.title}
              </h2>
              <p className="mt-3 leading-relaxed text-slate-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-950">
              Notre engagement
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              {MISSION_COMMITMENT}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
