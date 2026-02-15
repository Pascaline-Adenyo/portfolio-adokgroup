# Portfolio AdokGroup - ADENYO Komi David

Portfolio d'architecte moderne avec espace administrateur pour gérer les projets.

## 🚀 Fonctionnalités

### Site Public
- ✅ Design moderne et responsive
- ✅ Section Hero avec call-to-action
- ✅ À propos de l'architecte
- ✅ Galerie de projets (chargés depuis la base de données)
- ✅ Services proposés
- ✅ Contact avec WhatsApp
- ✅ Page détail de projet avec galerie d'images

### Espace Admin
- ✅ Authentification sécurisée
- ✅ Dashboard pour gérer les projets
- ✅ Ajout de projets avec :
  - Titre, description, catégorie
  - Upload d'image principale
  - Upload de galerie d'images
- ✅ Suppression de projets
- ✅ Preview des projets

## 🛠️ Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Base de données** : Vercel Postgres
- **Authentification** : NextAuth.js
- **Stockage images** : Vercel Blob
- **Déploiement** : Vercel (gratuit)

## 📦 Installation

```bash
# Cloner le projet
git clone https://github.com/votre-username/portfolio-adokgroup.git

# Installer les dépendances
cd portfolio-adokgroup
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Éditer .env.local avec vos valeurs

# Lancer en développement
npm run dev
```

Visitez http://localhost:3000

## 🌐 Déploiement

Consultez le fichier [GUIDE-DEPLOIEMENT.md](./GUIDE-DEPLOIEMENT.md) pour le guide complet de déploiement sur Vercel.

## 🔐 Accès Admin

- URL : `/admin/login`
- Email : Configuré dans `ADMIN_EMAIL`
- Mot de passe : Configuré dans `ADMIN_PASSWORD` (hashé avec bcrypt)

## 📁 Structure du projet

```
portfolio-adokgroup/
├── app/
│   ├── admin/              # Pages admin
│   │   ├── login/          # Page de connexion
│   │   └── page.tsx        # Dashboard admin
│   ├── api/                # API Routes
│   │   ├── auth/           # NextAuth
│   │   ├── projects/       # CRUD projets
│   │   └── upload/         # Upload images
│   ├── projet/[id]/        # Page détail projet
│   └── page.tsx            # Page d'accueil
├── components/             # Composants React
├── lib/                    # Utilitaires
│   ├── db.ts              # Fonctions base de données
│   ├── auth.ts            # Configuration NextAuth
│   └── types.ts           # Types TypeScript
└── scripts/               # Scripts utilitaires
    └── init-db.js         # Initialisation DB
```

## 🎨 Personnalisation

### Couleurs
Modifiez les couleurs dans `app/globals.css` :

```css
:root {
  --primary: #111827;
  --secondary: #1f2937;
  --accent: #3b82f6;
}
```

### Contact
Modifiez les informations dans `components/Contact.tsx`

### Services
Modifiez les services dans `components/Services.tsx`

## 📝 Licence

© 2025 ADENYO Komi David - Tous droits réservés

## 👨‍💻 Développeur

Créé avec ❤️ pour AdokGroup
