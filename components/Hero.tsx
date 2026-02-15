export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center pt-16"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
      }}
    >
      <div className="absolute inset-0 bg-gray-900/85"></div>
      <div className="relative z-10 bg-gray-900/80 backdrop-blur-sm p-12 rounded-2xl text-center max-w-4xl mx-4">
        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4">
          Concevoir l&apos;avenir
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Architecture moderne & durable au service de vos espaces
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="btn-primary">
            Contactez-moi
          </a>
          <a href="#projects" className="btn-outline">
            Voir mes projets
          </a>
        </div>
      </div>
    </section>
  );
}
