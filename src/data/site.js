/**
 * Informations institutionnelles de l'église.
 * Source : commandes de création du site (prompt.txt).
 */
export const SITE = {
  name: 'Tabernacle de la Résurrection',
  tagline: 'Église de Brazzaville, République du Congo',
  pastor: 'Réverend Pasteur Ludovic MPASSI',
  address:
    'P13 Lot Parcelle 240 SONACO, MOUKONDO — Réf. École Privée Zola, Av. de la Poste, après l’hôpital des Palestiniens, Brazzaville',
  phone: '+242 06 984 2607',
  phoneHref: 'tel:+242069842607',
  email: 'contact@tabernacledelaresurrection.com',
}

/** Sections du site, partagées par l'en-tête et le pied de page. */
export const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/qui-sommes-nous', label: 'Qui sommes-nous' },
  { to: '/notre-mission', label: 'Notre mission' },
  { to: '/temoignages', label: 'Témoignages' },
  { to: '/contact', label: 'Nous contacter' },
]
