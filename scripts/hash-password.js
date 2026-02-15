const bcrypt = require('bcryptjs');

// Change ce mot de passe !
const password = process.argv[2] || 'admin123';

bcrypt.hash(password, 10).then(hash => {
  console.log('\n🔐 Mot de passe hashé:');
  console.log(hash);
  console.log('\n📝 Copie ce hash dans ton fichier .env.local:');
  console.log(`ADMIN_PASSWORD=${hash}`);
  console.log('\n');
});
