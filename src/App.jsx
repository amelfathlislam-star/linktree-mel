import styles from './App.module.css'

// ── CONFIGURATION — modifie ici tes liens et infos ──────────────────────────
const PROFILE = {
  initials: 'M',
  name: 'Mel',
  role: 'Développeuse full-stack',
  bio: "Je construis des applications web complètes — de l'idée au déploiement. Éducation, santé, restauration, loisirs.",
  github: 'https://github.com/amelfathlislam-star',
  instagram: 'https://instagram.com/amal.fathl',
  instagramHandle: '@amal.fathl',
}

const LINKS = [
  {
    section: 'Mes Projets',
    items: [
      {
        title: 'Centre Éducatif Agadir',
        desc: 'Plateforme de gestion scolaire complète',
        sub: 'React · Supabase · Vercel',
        url: 'https://centre-agadir.vercel.app',
        color: '#4a52a3',
        bg: '#eceef8',
        icon: '🏫',
      },
      {
        title: 'Just Koul',
        desc: 'App de commandes de repas scolaires',
        sub: 'React · Vite · Framer Motion',
        url: 'https://just-koul.vercel.app',
        color: '#b86832',
        bg: '#f5ede4',
        icon: '🥗',
      },
      {
        title: 'Nuance Ludique',
        desc: 'Espace jeux de société & café',
        sub: 'React · Vite · Tailwind · shadcn/ui',
        url: 'https://nuance-ludique.com',
        color: '#7a45a3',
        bg: '#f0eaf8',
        icon: '🎲',
      },
      {
        title: 'Yellicare',
        desc: 'Hub de santé & bien-être',
        sub: 'React · Vite · Vercel',
        url: 'https://yellicare.vercel.app',
        color: '#2a8a7a',
        bg: '#e4f4f0',
        icon: '💚',
      },
    ],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

const HexPattern = () => (
  <svg
    className={styles.bgPattern}
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="280"
    aria-hidden="true"
  >
    <defs>
      <pattern id="hex" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
        <polygon
          points="28,2 52,14 52,34 28,46 4,34 4,14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        <polygon
          points="28,10 44,19 44,29 28,38 12,29 12,19"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
        />
      </pattern>
    </defs>
    <rect width="100%" height="280" fill="url(#hex)" />
  </svg>
)

export default function App() {
  return (
    <main className={styles.page}>
      <HexPattern />
      <div className={styles.container}>

        {/* Avatar */}
        <div className={styles.avatar}>
          {PROFILE.initials}
        </div>

        {/* Header */}
        <h1 className={styles.name}>{PROFILE.name}</h1>
        <p className={styles.role}>{PROFILE.role}</p>
        <p className={styles.bio}>{PROFILE.bio}</p>

        {/* Socials */}
        <div className={styles.socials}>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            GitHub
          </a>
          <a
            href={PROFILE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            {PROFILE.instagramHandle}
          </a>
        </div>

        {/* Link sections */}
        {LINKS.map((group) => (
          <div key={group.section} className={styles.section}>
            <p className={styles.sectionLabel}>{group.section}</p>
            {group.items.map((item) => (
              <a
                key={item.title}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.card}
              >
                <span
                  className={styles.cardIcon}
                  style={{ background: item.bg }}
                >
                  {item.icon}
                </span>
                <span className={styles.cardBody}>
                  <span className={styles.cardTitle}>{item.title}</span>
                  <span className={styles.cardDesc}>{item.desc}</span>
                  <span className={styles.cardSub}>{item.sub}</span>
                </span>
                <span className={styles.cardArrow}>→</span>
              </a>
            ))}
          </div>
        ))}

        {/* Footer */}
        <p className={styles.footer}>Fait avec beaucoup de ☕</p>
      </div>
    </main>
  )
}
