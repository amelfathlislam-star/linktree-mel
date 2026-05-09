# Linktree Personnel — Mel

Page de liens personnalisée, déployée sur Vercel.

## Installation locale

```bash
npm install
npm run dev
```

## Personnalisation

Ouvre `src/App.jsx` et modifie :

1. **`PROFILE`** — nom, tagline, localisation, stack
2. **`LINKS`** — tes sections et liens (titre, description, URL, couleur, icône)

## Déploiement sur Vercel

### Option A — Via GitHub (recommandé)

1. Crée un repo GitHub : `linktree-mel`
2. Push le projet :
   ```bash
   git init
   git add .
   git commit -m "init: linktree"
   git remote add origin https://github.com/TON-USERNAME/linktree-mel.git
   git push -u origin main
   ```
3. Va sur [vercel.com](https://vercel.com) → **New Project** → importe le repo
4. Vercel détecte Vite automatiquement → **Deploy**
5. Ton URL sera : `linktree-mel.vercel.app` (ou personnalisé)

### Option B — Via Vercel CLI

```bash
npm install -g vercel
vercel
```

## Mettre l'URL dans Instagram

1. Va sur ton profil Instagram → **Modifier le profil**
2. Dans le champ **Site web**, colle l'URL Vercel
3. C'est tout !
