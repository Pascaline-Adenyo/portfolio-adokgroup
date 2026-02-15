# 🚀 Guide Complet : Portfolio AdokGroup avec Admin

Ce guide te montre comment déployer le portfolio avec espace admin sur Vercel **gratuitement**.

## 📋 Prérequis

- Un compte GitHub (gratuit)
- Un compte Vercel (gratuit)
- Node.js installé sur ton ordinateur

---

## 🎯 ÉTAPE 1 : Installer le projet localement

### 1.1 Télécharger les fichiers
Tous les fichiers sont dans le dossier `/home/claude/portfolio-adokgroup`

### 1.2 Installer les dépendances
```bash
cd portfolio-adokgroup
npm install
```

### 1.3 Configurer les variables d'environnement
Crée un fichier `.env.local` à la racine du projet :

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=ton-secret-genere-avec-openssl

# Admin (change ces valeurs !)
ADMIN_EMAIL=david@adokgroup.com
ADMIN_PASSWORD=MotDePasseSecurise123
```

Pour générer un NEXTAUTH_SECRET :
```bash
openssl rand -base64 32
```

---

## 🧪 ÉTAPE 2 : Tester en local

```bash
npm run dev
```

Visite :
- Site public : http://localhost:3000
- Admin login : http://localhost:3000/admin/login

---

## 🐙 ÉTAPE 3 : Pousser sur GitHub

### 3.1 Initialiser Git
```bash
git init
git add .
git commit -m "Initial commit - Portfolio AdokGroup"
```

### 3.2 Créer un repo sur GitHub
1. Va sur https://github.com/new
2. Nom : `portfolio-adokgroup`
3. Crée le repo (public ou privé)

### 3.3 Pousser le code
```bash
git remote add origin https://github.com/TON-USERNAME/portfolio-adokgroup.git
git branch -M main
git push -u origin main
```

---

## ☁️ ÉTAPE 4 : Déployer sur Vercel

### 4.1 Connecter GitHub à Vercel
1. Va sur https://vercel.com
2. Clique sur "Add New" → "Project"
3. Importe ton repo GitHub `portfolio-adokgroup`

### 4.2 Configurer le projet
- Framework Preset : **Next.js**
- Root Directory : `./`
- Build Command : `npm run build`
- Output Directory : `.next`

---

## 🗄️ ÉTAPE 5 : Créer la base de données Postgres

### 5.1 Dans Vercel Dashboard
1. Va dans ton projet → onglet **Storage**
2. Clique sur **Create Database**
3. Sélectionne **Postgres**
4. Nom : `portfolio-db`
5. Région : Choisis la plus proche (ex: Frankfurt)
6. Clique sur **Create**

### 5.2 Connecter la DB au projet
1. Dans Storage → Postgres → **Connect**
2. Sélectionne ton projet
3. Vercel va automatiquement ajouter les variables :
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - etc.

---

## 🔐 ÉTAPE 6 : Configurer les variables d'environnement

### 6.1 Dans Vercel Dashboard
Va dans **Settings** → **Environment Variables** et ajoute :

#### NextAuth
```
NEXTAUTH_URL = https://ton-site.vercel.app
NEXTAUTH_SECRET = [génère avec: openssl rand -base64 32]
```

#### Admin (IMPORTANT : Hash ton mot de passe)
Tu dois hasher ton mot de passe avant ! Utilise ce script :

```javascript
// Crée un fichier hash-password.js
const bcrypt = require('bcryptjs');
const password = 'TonMotDePasse123';
bcrypt.hash(password, 10).then(hash => console.log(hash));
```

Exécute :
```bash
node hash-password.js
```

Ensuite dans Vercel :
```
ADMIN_EMAIL = david@adokgroup.com
ADMIN_PASSWORD = [le hash généré]
```

### 6.2 Sauvegarder
Clique sur **Save** pour chaque variable.

---

## 📦 ÉTAPE 7 : Initialiser la base de données

### 7.1 Installer Vercel CLI localement
```bash
npm install -g vercel
vercel login
```

### 7.2 Lier ton projet
```bash
vercel link
```

### 7.3 Télécharger les variables d'env
```bash
vercel env pull .env.local
```

### 7.4 Exécuter le script d'initialisation
```bash
node scripts/init-db.js
```

✅ Ta base de données est maintenant prête !

---

## 🖼️ ÉTAPE 8 : Configurer Vercel Blob (pour les images)

### 8.1 Créer un Blob Store
1. Dans Vercel Dashboard → **Storage**
2. Clique sur **Create Database**
3. Sélectionne **Blob**
4. Nom : `portfolio-images`
5. Clique sur **Create**

### 8.2 Connecter au projet
1. Dans Blob Storage → **Connect**
2. Sélectionne ton projet
3. Vercel ajoute automatiquement `BLOB_READ_WRITE_TOKEN`

---

## 🎨 ÉTAPE 9 : Utiliser l'espace admin

### 9.1 Se connecter
1. Va sur `https://ton-site.vercel.app/admin/login`
2. Utilise ton email et mot de passe configurés

### 9.2 Ajouter un projet
1. Clique sur **"Ajouter un projet"**
2. Remplis les champs :
   - Titre
   - Catégorie
   - Description
3. Upload une image principale
4. (Optionnel) Upload des images pour la galerie
5. Clique sur **"Créer le projet"**

✅ Ton projet apparaît immédiatement sur le site public !

---

## 🔄 ÉTAPE 10 : Mettre à jour le site

### 10.1 Modifier le code localement
Fais tes modifications dans le code

### 10.2 Pousser sur GitHub
```bash
git add .
git commit -m "Description des changements"
git push
```

### 10.3 Vercel déploie automatiquement
Vercel détecte le push GitHub et redéploie automatiquement !

---

## ✅ CHECKLIST FINALE

- [ ] Projet déployé sur Vercel
- [ ] Base de données Postgres créée et connectée
- [ ] Variables d'environnement configurées
- [ ] Mot de passe admin hashé et configuré
- [ ] Vercel Blob configuré pour les images
- [ ] Base de données initialisée
- [ ] Connexion admin fonctionne
- [ ] Upload d'images fonctionne
- [ ] Site public affiche les projets

---

## 🆘 Problèmes courants

### "Non autorisé" lors de la connexion admin
➜ Vérifie que ton mot de passe est bien hashé avec bcrypt
➜ Vérifie `ADMIN_EMAIL` et `ADMIN_PASSWORD` dans les variables d'env Vercel

### "Erreur lors de la création du projet"
➜ Vérifie que la base de données est bien initialisée
➜ Vérifie les variables `POSTGRES_*` dans Vercel

### "Erreur lors de l'upload d'images"
➜ Vérifie que Vercel Blob est bien configuré
➜ Vérifie la variable `BLOB_READ_WRITE_TOKEN`

### Les images ne s'affichent pas
➜ Vérifie `next.config.js` : les domaines d'images doivent être autorisés

---

## 📞 Support

Pour toute question :
1. Vérifie les logs dans Vercel Dashboard → Functions → Logs
2. Vérifie les variables d'environnement
3. Redéploie le projet : Vercel Dashboard → Deployments → Redeploy

---

## 🎉 Félicitations !

Ton portfolio avec espace admin est maintenant en ligne et 100% gratuit sur Vercel !

**Ton frère peut maintenant :**
- Se connecter sur `/admin/login`
- Ajouter ses projets avec photos
- Les visiteurs voient les projets instantanément
- Tout est stocké dans une vraie base de données

**Limites gratuites Vercel :**
- 100 GB bande passante/mois (largement suffisant)
- 256 MB Postgres (pour ~1000 projets)
- 500 MB Blob Storage (pour ~2000 images)
