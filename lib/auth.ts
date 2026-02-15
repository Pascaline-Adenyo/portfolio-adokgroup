import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Mot de passe', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Vérifier avec les variables d'environnement
        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) {
          console.error('Variables d\'environnement ADMIN manquantes');
          return null;
        }

        if (credentials.email !== adminEmail) {
          return null;
        }

        // Comparer le mot de passe
        const isValid = await bcrypt.compare(credentials.password, adminPassword);

        if (!isValid) {
          return null;
        }

        return {
          id: '1',
          email: adminEmail,
          name: 'Admin',
        };
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};
