import Image from 'next/image';
import Link from 'next/link';
import { getProjects } from '@/lib/db';

export default async function ProjectsSection() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            Mes Réalisations
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets architecturaux qui allient
            esthétique, fonctionnalité et innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">
                Aucun projet pour le moment. Revenez bientôt !
              </p>
            </div>
          ) : (
            projects.map((project) => (
              <Link
                key={project.id}
                href={`/projet/${project.id}`}
                className="project-card group"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={project.mainImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white text-2xl font-bold mb-1">
                        {project.title}
                      </h3>
                      <p className="text-blue-300 text-sm mb-4">
                        {project.category}
                      </p>
                      <span className="text-white text-sm font-medium hover:text-blue-300 transition-colors duration-300 flex items-center">
                        Voir le projet{' '}
                        <i className="fas fa-arrow-right ml-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
