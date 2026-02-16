import { sql } from '@vercel/postgres';
import { Project, CreateProjectData } from './types';

// Initialiser la base de données
export async function initDatabase() {
  try {
    // Créer la table projects si elle n'existe pas
    await sql`
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        category VARCHAR(100) NOT NULL,
        main_image TEXT NOT NULL,
        images TEXT[] NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    console.log('✅ Base de données initialisée');
    return { success: true };
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation de la base de données:', error);
    return { success: false, error };
  }
}

// Récupérer tous les projets
// Récupérer tous les projets
export async function getProjects(): Promise<Project[]> {
  try {
    const { rows } = await sql`
      SELECT 
        id,
        title,
        description,
        category,
        main_image as "mainImage",
        images,
        created_at as "createdAt",
        updated_at as "updatedAt"
      FROM projects 
      ORDER BY created_at DESC
    `;
    
    // Parse le JSON des images
    return rows.map(row => ({
      ...row,
      images: typeof row.images === 'string' ? JSON.parse(row.images) : row.images
    })) as Project[];
  } catch (error) {
    console.error('Erreur lors de la récupération des projets:', error);
    return [];
  }
}

// Récupérer un projet par son ID
// Récupérer un projet par son ID
export async function getProjectById(id: number): Promise<Project | null> {
  try {
    const { rows } = await sql`
      SELECT 
        id,
        title,
        description,
        category,
        main_image as "mainImage",
        images,
        created_at as "createdAt",
        updated_at as "updatedAt"
      FROM projects 
      WHERE id = ${id}
    `;
    
    const project = rows[0];
    if (!project) return null;
    
    // Parse le JSON des images
    if (typeof project.images === 'string') {
      project.images = JSON.parse(project.images);
    }
    
    return project as Project;
  } catch (error) {
    console.error('Erreur lors de la récupération du projet:', error);
    return null;
  }
}

// Créer un nouveau projet
export async function createProject(data: CreateProjectData): Promise<Project | null> {
  try {
    const imagesJson = JSON.stringify(data.images || []);
    const { rows } = await sql`
      INSERT INTO projects (title, description, category, main_image, images)
      VALUES (${data.title}, ${data.description}, ${data.category}, ${data.mainImage}, ${imagesJson})
      RETURNING 
        id,
        title,
        description,
        category,
        main_image as "mainImage",
        images,
        created_at as "createdAt",
        updated_at as "updatedAt"
    `;
    
    return rows[0] as Project;
  } catch (error) {
    console.error('Erreur lors de la création du projet:', error);
    return null;
  }
}

// Mettre à jour un projet
export async function updateProject(id: number, data: Partial<CreateProjectData>): Promise<Project | null> {
  try {
    const updates: string[] = [];
    const values: any[] = [];
    let paramCount = 1;

    if (data.title) {
      updates.push(`title = $${paramCount++}`);
      values.push(data.title);
    }
    if (data.description) {
      updates.push(`description = $${paramCount++}`);
      values.push(data.description);
    }
    if (data.category) {
      updates.push(`category = $${paramCount++}`);
      values.push(data.category);
    }
    if (data.mainImage) {
      updates.push(`main_image = $${paramCount++}`);
      values.push(data.mainImage);
    }
    if (data.images) {
      updates.push(`images = $${paramCount++}`);
      values.push(data.images);
    }

    updates.push(`updated_at = CURRENT_TIMESTAMP`);

    const query = `
      UPDATE projects 
      SET ${updates.join(', ')}
      WHERE id = $${paramCount}
      RETURNING 
        id,
        title,
        description,
        category,
        main_image as "mainImage",
        images,
        created_at as "createdAt",
        updated_at as "updatedAt"
    `;

    values.push(id);

    const result = await sql.query(query, values);
    return result.rows[0] as Project || null;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du projet:', error);
    return null;
  }
}

// Supprimer un projet
export async function deleteProject(id: number): Promise<boolean> {
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
    return true;
  } catch (error) {
    console.error('Erreur lors de la suppression du projet:', error);
    return false;
  }
}
