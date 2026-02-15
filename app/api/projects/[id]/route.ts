import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { updateProject, deleteProject, getProjectById } from '@/lib/db';

// GET - Récupérer un projet par ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const project = await getProjectById(parseInt(params.id));
    
    if (!project) {
      return NextResponse.json(
        { error: 'Projet non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du projet' },
      { status: 500 }
    );
  }
}

// PUT - Mettre à jour un projet (protégé)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const data = await request.json();
    const project = await updateProject(parseInt(params.id), data);

    if (!project) {
      return NextResponse.json(
        { error: 'Erreur lors de la mise à jour du projet' },
        { status: 500 }
      );
    }

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// DELETE - Supprimer un projet (protégé)
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
    }

    const success = await deleteProject(parseInt(params.id));

    if (!success) {
      return NextResponse.json(
        { error: 'Erreur lors de la suppression du projet' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Projet supprimé avec succès' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
