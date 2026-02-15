export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Colonne 1 */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white bg-gray-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-playfair text-xl font-bold">ADOKGROUP</span>
            </div>
            <p className="text-gray-400 text-center md:text-left mb-4">
              Architecture innovante et conception durable pour des espaces
              exceptionnels.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <i className="fab fa-behance text-xl"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-playfair text-lg font-semibold mb-4">CONTACT</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                <p>Lomé, Togo</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone-alt mr-3 text-blue-400"></i>
                <p>+228 91 10 45 91</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope mr-3 text-blue-400"></i>
                <p>contact@adokgroup.com</p>
              </div>
            </div>
          </div>

          {/* Colonne 3 */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-playfair text-lg font-semibold mb-4">
              INFORMATIONS
            </h3>
            <div className="space-y-3 text-gray-400 text-center md:text-left">
              <a
                href="#"
                className="block hover:text-blue-400 transition duration-300"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="block hover:text-blue-400 transition duration-300"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="block hover:text-blue-400 transition duration-300"
              >
                CGU
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2025{' '}
            <span className="text-blue-400">ADENYO Komi David</span> - Tous droits
            réservés | Architecte Diplômé
          </p>
        </div>
      </div>
    </footer>
  );
}
