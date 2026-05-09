import styles from './App.module.css'

// ── CONFIGURATION — modifie ici tes liens et infos ──────────────────────────
const PROFILE = {
  initials: 'M',
  name: 'Mel',
  tagline: 'Dev full-stack · Éducation · Entrepreneuriat',
  stack: ['React', 'Vite', 'Supabase', 'Vercel', 'Framer Motion', 'Python / ReportLab', 'Tailwind'],
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
        url: 'https://yellicare33.vercel.app',
        color: '#2a8a7a',
        bg: '#e4f4f0',
        icon: '💚',
      },
    ],
  },
]
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>

        {/* Avatar */}
        <div className={styles.avatar}>
          {PROFILE.initials}
        </div>

        {/* Header */}
        <h1 className={styles.name}>{PROFILE.name}</h1>
        <p className={styles.tagline}>{PROFILE.tagline}</p>

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

        {/* Divider */}
        <div className={styles.divider} />

        {/* Stack */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Stack</p>
          <div className={styles.tags}>
            {PROFILE.stack.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <p className={styles.footer}>Fait maison 🛠️</p>
      </div>
    </main>
  )
}
