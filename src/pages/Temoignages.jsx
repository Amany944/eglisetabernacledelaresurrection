import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import { TESTIMONIALS } from '@/data/content'

function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label="Note : 5 sur 5">
      {Array.from({ length: 5 }, (_, index) => (
        <Icon key={index} name="star" className="h-4 w-4 fill-current" />
      ))}
    </div>
  )
}

export default function Temoignages() {
  return (
    <>
      <PageHero
        title="Témoignages"
        breadcrumb="Témoignages"
        subtitle="Écoutez les récits authentiques de guérison et de transformation spirituelle."
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="card flex flex-col p-7 transition-shadow hover:shadow-lg"
              >
                <Stars />
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate-600">
                  « {testimonial.quote} »
                </blockquote>
                <figcaption className="mt-6 border-t border-slate-100 pt-4">
                  <p className="font-semibold text-brand-950">{testimonial.name}</p>
                  <p className="text-sm text-brand-600">{testimonial.topic}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
