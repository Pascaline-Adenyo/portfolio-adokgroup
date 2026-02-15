export default function Services() {
  const services = [
    {
      icon: 'fa-home',
      title: 'Architecture Résidentielle',
      description:
        'Conception de maisons et villas sur mesure, alliant esthétique contemporaine et fonctionnalité optimale.',
    },
    {
      icon: 'fa-building',
      title: 'Architecture Commerciale',
      description:
        "Design d'espaces commerciaux et bureaux favorisant productivité et expérience client.",
    },
    {
      icon: 'fa-cube',
      title: 'Modélisation 3D',
      description:
        'Visualisations réalistes en 3D pour une immersion complète dans votre futur projet.',
    },
    {
      icon: 'fa-leaf',
      title: 'Architecture Durable',
      description:
        'Solutions écologiques et économes en énergie pour un avenir plus vert.',
    },
    {
      icon: 'fa-paint-brush',
      title: "Design d'Intérieur",
      description:
        'Aménagements intérieurs harmonieux qui reflètent votre personnalité.',
    },
    {
      icon: 'fa-comments',
      title: 'Consultation',
      description:
        'Conseils experts pour optimiser votre projet à chaque étape de développement.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            Mes Services
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Des solutions architecturales sur mesure pour répondre à tous vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card p-8">
              <div className="text-accent text-center mb-6">
                <i className={`fas ${service.icon} text-4xl`}></i>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-white mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
