import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectById } from '@/lib/db';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProjectById(parseInt(params.id));

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Retour aux projets
            </Link>
          </div>

          {/* Titre du projet */}
          <div className="mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-blue-400 text-xl">{project.category}</p>
          </div>

          {/* Image principale */}
          <div className="relative h-96 md:h-[600px] w-full rounded-2xl overflow-hidden mb-12">
            <Image
              src={project.mainImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Description */}
          <div className="max-w-3xl mb-16">
            <h2 className="font-playfair text-2xl font-bold text-white mb-4">
              À propos du projet
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Galerie d'images */}
          {project.images && project.images.length > 0 && (
            <div>
              <h2 className="font-playfair text-2xl font-bold text-white mb-8">
                Galerie
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative h-80 rounded-xl overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Contact */}
          <div className="mt-16 text-center">
            <div className="bg-gray-800 rounded-2xl p-12">
              <h3 className="font-playfair text-3xl font-bold text-white mb-4">
                Vous avez un projet similaire ?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Discutons de votre projet et voyons comment nous pouvons créer
                quelque chose d&apos;exceptionnel ensemble.
              </p>
              <a href="/#contact" className="btn-primary">
                Contactez-moi
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
