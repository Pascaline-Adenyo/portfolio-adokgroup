export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            Contactez-moi
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Pour discuter de votre projet ou prendre rendez-vous.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-700 p-8 rounded-xl max-w-md w-full">
            <div className="space-y-6">
              {/* Adresse */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 rounded-lg p-3">
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Adresse</h4>
                  <p className="text-gray-300">
                    Lomé, Togo
                    <br />
                    Quartier Sagbado Agotimé
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 rounded-lg p-3">
                  <i className="fas fa-phone-alt text-white"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">Téléphone</h4>
                  <a
                    href="tel:+22891104591"
                    className="text-gray-300 hover:text-blue-400 transition duration-300 block"
                  >
                    +228 91 10 45 91
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-green-600 rounded-lg p-3">
                  <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                  <a
                    href="https://wa.me/22891104591"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition duration-300 block"
                  >
                    Envoyer un message
                  </a>
                </div>
              </div>
            </div>

            {/* Boutons mobiles */}
            <div className="mt-8 flex flex-col space-y-4 md:hidden">
              <a
                href="tel:+22891104591"
                className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg transition duration-300"
              >
                <i className="fas fa-phone-alt mr-2"></i> Appeler maintenant
              </a>
              <a
                href="https://wa.me/22891104591"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white text-center py-3 px-6 rounded-lg transition duration-300"
              >
                <i className="fab fa-whatsapp mr-2"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
