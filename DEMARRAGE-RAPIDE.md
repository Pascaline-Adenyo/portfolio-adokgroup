# 🚀 Démarrage Rapide - Portfolio AdokGroup

## 📋 Ce que tu as

Un portfolio Next.js complet avec :
- ✅ Design moderne basé sur ton HTML
- ✅ Base de données Vercel Postgres
- ✅ Espace admin sécurisé
- ✅ Upload d'images
- ✅ 100% gratuit sur Vercel

## ⚡ Démarrer EN 5 MINUTES

### 1️⃣ Installer (2 min)

```bash
cd portfolio-adokgroup
npm install
```

### 2️⃣ Hasher ton mot de passe (30 sec)

```bash
node scripts/hash-password.js "TonMotDePasse123"
```

Copie le hash généré.

### 3️⃣ Créer .env.local (1 min)

Crée un fichier `.env.local` à la racine :

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=super-secret-key-change-me

# Admin
ADMIN_EMAIL=david@adokgroup.com
ADMIN_PASSWORD=ton-hash-copie-ici
```

### 4️⃣ Lancer (30 sec)

```bash
npm run dev
```

### 5️⃣ Tester (1 min)

- Site : http://localhost:3000
- Admin : http://localhost:3000/admin/login

---

## 🌐 Déployer sur Vercel (GRATUIT)

### Option A : Déploiement rapide (5 min)

1. **Pousse sur GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TON-USERNAME/portfolio-adokgroup.git
git push -u origin main
```

2. **Importe sur Vercel**
   - Va sur https://vercel.com
   - "Add New Project"
   - Importe ton repo GitHub
   - Clique "Deploy"

3. **Configure la base de données**
   - Dans Vercel → Storage → Create Database → Postgres
   - Nom : `portfolio-db`
   - Connect au projet

4. **Ajoute les variables d'environnement**
   - Settings → Environment Variables
   - Ajoute :
     - `NEXTAUTH_URL` : ton URL Vercel (ex: https://ton-site.vercel.app)
     - `NEXTAUTH_SECRET` : génère avec `openssl rand -base64 32`
     - `ADMIN_EMAIL` : ton email
     - `ADMIN_PASSWORD` : ton hash de mot de passe

5. **Configure Vercel Blob (images)**
   - Storage → Create Database → Blob
   - Nom : `portfolio-images`
   - Connect au projet

6. **Initialise la DB**
```bash
vercel login
vercel link
vercel env pull .env.local
node scripts/init-db.js
```

7. **Redéploie**
   - Vercel Dashboard → Deployments → Redeploy

✅ **C'est fini ! Ton site est en ligne !**

---

## 📱 Utiliser l'espace admin

1. Va sur `https://ton-site.vercel.app/admin/login`
2. Connecte-toi avec ton email et mot de passe
3. Clique sur "Ajouter un projet"
4. Remplis le formulaire et upload des images
5. Le projet apparaît instantanément sur le site !

---

## 🎯 Prochaines étapes

### Personnaliser le site
- Remplace le logo : `components/Navigation.tsx`
- Change les infos de contact : `components/Contact.tsx`
- Modifie les services : `components/Services.tsx`
- Personnalise les couleurs : `app/globals.css`

### Ajouter une vraie photo
- Upload ta photo dans Vercel Blob
- Remplace dans `components/About.tsx`

### Optimisations
- Ajoute Google Analytics
- Configure un nom de domaine personnalisé
- Active les optimisations d'images Next.js

---

## 🆘 Besoin d'aide ?

Consulte le guide complet : [GUIDE-DEPLOIEMENT.md](./GUIDE-DEPLOIEMENT.md)

**Problèmes courants :**

❌ **"Non autorisé" en admin**
→ Vérifie que ton mot de passe est hashé avec bcrypt

❌ **"Erreur base de données"**
→ Vérifie que Vercel Postgres est bien connecté
→ Lance `node scripts/init-db.js`

❌ **"Erreur upload images"**
→ Vérifie que Vercel Blob est configuré

---

## 🎉 Tu as fini !

Ton portfolio est maintenant :
- ✅ En ligne sur Vercel
- ✅ Avec base de données
- ✅ Avec espace admin
- ✅ 100% gratuit
- ✅ Facile à gérer

**Ton frère peut maintenant ajouter ses projets en 2 minutes !**
