'use client';

import { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Project } from '@/lib/types';

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Architecture Résidentielle');
  const [mainImageUrl, setMainImageUrl] = useState('');
  const [galleryUrls, setGalleryUrls] = useState<string[]>([]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error('Erreur lors du chargement des projets:', error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Erreur upload');

      const data = await res.json();
      return data.url;
    } catch (error) {
      console.error('Erreur upload:', error);
      alert('Erreur lors de l\'upload de l\'image');
      return null;
    }
  };

  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const url = await uploadImage(file);
    if (url) setMainImageUrl(url);
    setUploading(false);
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setUploading(true);
    const urls: string[] = [];

    for (const file of files) {
      const url = await uploadImage(file);
      if (url) urls.push(url);
    }

    setGalleryUrls([...galleryUrls, ...urls]);
    setUploading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !mainImageUrl) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          category,
          mainImage: mainImageUrl,
          images: galleryUrls,
        }),
      });

      if (!res.ok) throw new Error('Erreur création');

      alert('Projet créé avec succès !');
      setShowForm(false);
      resetForm();
      loadProjects();
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la création du projet');
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('Architecture Résidentielle');
    setMainImageUrl('');
    setGalleryUrls([]);
  };

  const deleteProject = async (id: number) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) return;

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Erreur suppression');

      alert('Projet supprimé !');
      loadProjects();
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la suppression');
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white text-xl">Chargement...</p>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-playfair font-bold text-white">
              Dashboard Admin
            </h1>
            <p className="text-gray-400 text-sm">Gérez vos projets</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/"
              target="_blank"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Voir le site
            </a>
            <button
              onClick={() => signOut()}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Bouton ajouter */}
        <div className="mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <i className={`fas fa-${showForm ? 'times' : 'plus'} mr-2`}></i>
            {showForm ? 'Annuler' : 'Ajouter un projet'}
          </button>
        </div>

        {/* Formulaire */}
        {showForm && (
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-playfair font-bold text-white mb-6">
              Nouveau projet
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-medium">
                  Titre *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Villa Moderne"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  Catégorie *
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Architecture Résidentielle</option>
                  <option>Architecture Commerciale</option>
                  <option>Architecture Durable</option>
                  <option>Design d&apos;Intérieur</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  Description *
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Décrivez le projet..."
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  Image principale *
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageUpload}
                  disabled={uploading}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {mainImageUrl && (
                  <div className="mt-4 relative h-48 w-full rounded-lg overflow-hidden">
                    <Image
                      src={mainImageUrl}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="block text-white mb-2 font-medium">
                  Galerie d&apos;images (optionnel)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleGalleryUpload}
                  disabled={uploading}
                  className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {galleryUrls.length > 0 && (
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    {galleryUrls.map((url, idx) => (
                      <div key={idx} className="relative h-32 rounded-lg overflow-hidden">
                        <Image src={url} alt={`Gallery ${idx}`} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={uploading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-medium py-3 rounded-lg transition-colors"
              >
                {uploading ? 'Upload en cours...' : 'Créer le projet'}
              </button>
            </form>
          </div>
        )}

        {/* Liste des projets */}
        <div>
          <h2 className="text-2xl font-playfair font-bold text-white mb-6">
            Mes projets ({projects.length})
          </h2>
          
          {projects.length === 0 ? (
            <div className="bg-gray-800 rounded-2xl p-12 text-center">
              <i className="fas fa-folder-open text-6xl text-gray-600 mb-4"></i>
              <p className="text-gray-400 text-lg">Aucun projet pour le moment</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden group">
                  <div className="relative h-48">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm mb-4">{project.category}</p>
                    <div className="flex gap-2">
                      <a
                        href={`/projet/${project.id}`}
                        target="_blank"
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-center py-2 rounded-lg transition-colors"
                      >
                        <i className="fas fa-eye mr-2"></i>Voir
                      </a>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors"
                      >
                        <i className="fas fa-trash mr-2"></i>Supprimer
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
