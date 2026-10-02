import { useState } from 'react'
import logo from '@/assets/images/logo.jpg'
import Icon from '@/components/Icon'
import PageHero from '@/components/PageHero'
import { SITE } from '@/data/site'

const INITIAL_VALUES = { name: '', email: '', subject: '', message: '' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) {
    errors.name = 'Veuillez indiquer votre nom.'
  }
  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Veuillez saisir une adresse e-mail valide.'
  }
  if (values.subject.trim().length === 0) {
    errors.subject = 'Veuillez préciser l’objet de votre message.'
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Votre message doit contenir au moins 10 caractères.'
  }
  return errors
}

/** Numéro au format international, sans séparateur, requis par wa.me. */
const WHATSAPP_NUMBER = SITE.phone.replace(/\D/g, '')

export default function Contact() {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    if (hasBeenSubmitted) {
      const nextErrors = validate(nextValues)
      setErrors((previous) => ({ ...previous, [name]: nextErrors[name] }))
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    setHasBeenSubmitted(true)

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const text = [
      `Nom : ${values.name.trim()}`,
      `E-mail : ${values.email.trim()}`,
      `Objet : ${values.subject.trim()}`,
      '',
      values.message.trim(),
    ].join('\n')

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )

    setValues(INITIAL_VALUES)
    setHasBeenSubmitted(false)
    setErrors({})
  }

  const contactItems = [
    {
      icon: 'map-pin',
      title: 'Adresse',
      content: SITE.address,
    },
    {
      icon: 'phone',
      title: 'Téléphone',
      content: SITE.phone,
      href: SITE.phoneHref,
    },
    {
      icon: 'mail',
      title: 'E-mail',
      content: SITE.email,
      href: `mailto:${SITE.email}`,
    },
  ]

  return (
    <>
      <PageHero
        title="Nous contacter"
        breadcrumb="Nous contacter"
        subtitle="Une question, une demande de prière ou un projet ? Écrivez-nous, nous vous répondrons rapidement."
      >
        <img
          src={logo}
          alt={`Logo ${SITE.name}`}
          width="120"
          height="120"
          className="mx-auto h-28 w-28 rounded-full bg-white p-2 object-contain shadow-lg"
        />
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-5 lg:items-start">
          <div className="space-y-4 lg:col-span-2">
            {contactItems.map((item) => (
              <div key={item.title} className="card flex gap-4 p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-sm font-semibold text-brand-950">{item.title}</h2>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 block text-sm text-slate-600 transition-colors hover:text-brand-700"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      {item.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-xl bg-brand-950 p-6 text-brand-100">
              <h2 className="font-display text-lg font-semibold text-white">
                Nous rendre visite
              </h2>
              <p className="mt-2 text-sm leading-relaxed">
                Le temple est ouvert à tous. Venez comme vous êtes, nous sommes en famille.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 lg:col-span-3">
            <h2 className="font-display text-2xl font-bold text-brand-950">
              Envoyez-nous un message
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Le formulaire prépare un message WhatsApp pré-rempli à notre numéro.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="contact-name" className="field-label">
                  Nom complet
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={errors.name ? 'true' : undefined}
                  className={`field-input ${errors.name ? 'field-input-error' : ''}`}
                />
                {errors.name && <p className="field-error">{errors.name}</p>}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="contact-email" className="field-label">
                  Adresse e-mail
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={errors.email ? 'true' : undefined}
                  className={`field-input ${errors.email ? 'field-input-error' : ''}`}
                />
                {errors.email && <p className="field-error">{errors.email}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-subject" className="field-label">
                  Objet
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={values.subject}
                  onChange={handleChange}
                  aria-invalid={errors.subject ? 'true' : undefined}
                  className={`field-input ${errors.subject ? 'field-input-error' : ''}`}
                />
                {errors.subject && <p className="field-error">{errors.subject}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="field-label">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={errors.message ? 'true' : undefined}
                  className={`field-input resize-y ${errors.message ? 'field-input-error' : ''}`}
                />
                {errors.message && <p className="field-error">{errors.message}</p>}
              </div>
            </div>

            <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
              Envoyer via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
