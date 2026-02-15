export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  mainImage: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProjectData {
  title: string;
  description: string;
  category: string;
  mainImage: string;
  images: string[];
}
