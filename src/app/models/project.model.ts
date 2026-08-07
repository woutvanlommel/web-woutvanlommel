export interface ProjectContent {
  context: string;
  approach: string;
  result?: string;
}

export type ProjectService =
  | 'Onderhoud'
  | 'E-commerce'
  | 'Automatisatie'
  | 'Platform ontwikkeling'
  | 'SaaS ontwikkeling';

export interface Project {
  id: number;
  client: string;
  title: string;
  subTitle: string;
  slug: string;
  service: ProjectService[];
  year: number;
  image?: string;
  content: ProjectContent;
  link?: string;
  githubLink?: string;
  techStack: string[];
  highlight: boolean;
  production?: boolean;
  status?: 'active' | 'legacy' | 'ongoing';
}
