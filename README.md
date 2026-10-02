# Tabernacle de la Résurrection

Site web de l'église Tabernacle de la Résurrection (Brazzaville, République du Congo),
construit avec **React 19**, **Vite 8** et **Tailwind CSS v4**.

## Démarrage

```bash
npm install
npm run dev      # serveur de développement sur http://localhost:5173
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build de production
npm run lint     # analyse statique (oxlint)
```

## Structure

```
src/
├── components/        Composants d'interface réutilisables
│   ├── Footer.jsx           Pied de page
│   ├── Header.jsx           En-tête collant + menu mobile
│   ├── Icon.jsx             Jeu d'icônes SVG (aucune dépendance externe)
│   ├── Layout.jsx           Ossature : en-tête / contenu / pied de page
│   ├── PageHero.jsx         Bandeau de titre des pages intérieures
│   └── ScrollToTop.jsx      Remise à zéro du défilement à la navigation
├── data/
│   ├── content.js       Textes éditoriaux (mission, témoignages)
│   └── site.js          Informations de l'église et liens de navigation
├── pages/              Une page par route
├── App.jsx             Définition des routes
├── index.css           Design system Tailwind (thème, polices, composants)
└── main.jsx            Point d'entrée (Router)
```

## Routes

| Route                | Page               |
| -------------------- | ------------------ |
| `/`                  | Accueil            |
| `/qui-sommes-nous`   | Qui sommes-nous    |
| `/notre-mission`     | Notre mission      |
| `/temoignages`       | Témoignages        |
| `/contact`           | Nous contacter     |
| toute autre route    | Page 404           |

## Formulaire de contact

La page « Nous contacter » valide le nom, l'e-mail, l'objet et le message, puis ouvre
WhatsApp avec un message pré-rempli vers le numéro de l'église. Aucun backend n'est
nécessaire : pour brancher un service d'envoi, remplacer l'appel à `window.open` dans
`src/pages/Contact.jsx` par une requête HTTP.

## Personnalisation

- Couleurs et polices : bloc `@theme` de `src/index.css`.
- Coordonnées, téléphone, adresse et menu : `src/data/site.js`.
- Textes des pages : `src/data/content.js`.
- Logo, photos : `src/assets/images/`.

> La valeur de `SITE.email` est une valeur de démonstration à remplacer par
> l'adresse e-mail réelle de l'église.
