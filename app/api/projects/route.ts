import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getProjects, createProject } from '@/lib/db';

// GET - Récupérer tous les projets
export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des projets' },
      { status: 500 }
    );
  }
}

// POST - Créer un nouveau projet (protégé)
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const data = await request.json();
    
    if (!data.title || !data.description || !data.category || !data.mainImage) {
      return NextResponse.json(
        { error: 'Données manquantes' },
        { status: 400 }
      );
    }

    const project = await createProject(data);

    if (!project) {
      return NextResponse.json(
        { error: 'Erreur lors de la création du projet' },
        { status: 500 }
      );
    }

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Erreur POST /api/projects:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
