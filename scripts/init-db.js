const { sql } = require('@vercel/postgres');
const bcrypt = require('bcryptjs');

async function initDatabase() {
  try {
    console.log('🚀 Initialisation de la base de données...');

    // Créer la table projects
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(100) NOT NULL,
        main_image TEXT NOT NULL,
        images TEXT[] NOT NULL DEFAULT '{}',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    console.log('✅ Table projects créée');

    // Générer un mot de passe hashé pour l'admin
    const password = process.env.ADMIN_PASSWORD || 'admin123';
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log('\n📝 Configuration Admin:');
    console.log('Email:', process.env.ADMIN_EMAIL || 'admin@adokgroup.com');
    console.log('Mot de passe hashé:', hashedPassword);
    console.log('\n⚠️  IMPORTANT: Ajoutez ce hash dans votre fichier .env:');
    console.log(`ADMIN_PASSWORD=${hashedPassword}`);

    console.log('\n✅ Base de données initialisée avec succès !');
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error);
    process.exit(1);
  }

  process.exit(0);
}

initDatabase();
