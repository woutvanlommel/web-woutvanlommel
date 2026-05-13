export interface ProjectContent {
  context: string;
  approach: string;
  result?: string;
}

export interface Project {
  id: number;
  client: string;
  title: string;
  subTitle: string;
  slug: string;
  service: string[];
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
