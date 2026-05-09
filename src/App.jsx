import styles from './App.module.css'

// ── CONFIGURATION — modifie ici tes liens et infos ──────────────────────────
const PROFILE = {
  initials: 'M',
  name: 'Mel',
  tagline: 'Dev full-stack · Éducation · Entrepreneuriat',
  location: 'Agadir, Maroc 🇲🇦',
  stack: ['React', 'Vite', 'Supabase', 'Vercel', 'Framer Motion', 'Python / ReportLab', 'Tailwind'],
}

const LINKS = [
  {
    section: 'Projets Dev',
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
        url: 'https://just-koul.vercel.app', // ← remplace par ton URL réel
        color: '#b86832',
        bg: '#f5ede4',
        icon: '🥗',
      },
      {
        title: 'Dar Chwiter',
        desc: "Business plan & visualisation d'espace",
        sub: 'React · ReportLab',
        url: '#', // ← remplace par ton URL
        color: '#4a7a45',
        bg: '#e8f0e6',
        icon: '🌿',
      },
    ],
  },
  {
    section: 'Autres Créations',
    items: [
      {
        title: 'Argane & Bouleau',
        desc: 'Collection mode modeste',
        sub: 'Amazigh × Folk russe · Lookbook React',
        url: '#',
        color: '#b05070',
        bg: '#f5e8ee',
        icon: '🧵',
      },
      {
        title: 'Modules Pédagogiques',
        desc: 'Ressources CE2 → Terminale',
        sub: 'PDFs éducatifs · Contexte marocain',
        url: '#',
        color: '#7a6a50',
        bg: '#f0ece4',
        icon: '📚',
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
        <p className={styles.location}>{PROFILE.location}</p>

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
        <p className={styles.footer}>Fait maison à Agadir</p>
      </div>
    </main>
  )
}
