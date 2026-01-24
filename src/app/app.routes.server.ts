import { inject } from '@angular/core'; // <--- Nodig voor injectie
import { RenderMode, ServerRoute } from '@angular/ssr';
import { ProjectService } from './shared/project.service'; // Pas het pad aan naar jouw service
import { ExpertiseService } from './shared/expertise.service'; // Pas het pad aan

export const serverRoutes: ServerRoute[] = [
  {
    path: 'portfolio/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Stap 1: Injecteer je service (net zoals in een component)
      const projectService = inject(ProjectService);

      // Stap 2: Haal je data op (dit is gewoon je hardcoded array uit de service)
      const projects = projectService.getProjects();

      // Stap 3: Map de data naar het formaat dat Angular wil: { slug: '...' }
      return projects.map((project) => ({ slug: project.slug }));
    },
  },
  {
    path: 'diensten/:slug',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const expertiseService = inject(ExpertiseService);
      const expertises = expertiseService.getExpertises();

      return expertises.map((expertise) => ({ slug: expertise.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
