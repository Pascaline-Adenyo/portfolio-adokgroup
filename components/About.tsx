export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            À propos
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-white mb-6">
              Mon approche architecturale
            </h3>
            <p className="text-gray-300 mb-4">
              Passionné par l&apos;architecture depuis mon plus jeune âge, je mets mon
              expertise au service de projets innovants qui allient esthétique
              contemporaine, fonctionnalité et respect de l&apos;environnement.
            </p>
            <p className="text-gray-300 mb-6">
              Chaque projet est pour moi l&apos;opportunité de créer des espaces uniques
              qui répondent précisément aux besoins de mes clients tout en
              s&apos;intégrant harmonieusement dans leur environnement.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">+50 projets</h4>
                <p className="text-sm text-gray-300">Réalisés avec succès</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-400 mb-2">10 ans</h4>
                <p className="text-sm text-gray-300">D&apos;expérience</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl shadow-2xl w-full h-96 bg-gray-700 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <i className="fas fa-user text-6xl mb-4"></i>
                <p>Photo de l&apos;architecte</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold">ADENYO Komi David</p>
              <p className="text-sm">Architecte Diplômé</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
