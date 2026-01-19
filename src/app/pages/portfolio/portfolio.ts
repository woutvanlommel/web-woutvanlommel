import { Component, inject } from '@angular/core';
import { Zoekbalk } from '../../components/zoekbalk/zoekbalk';
import { HighlightProject } from '../../components/highlight-project/highlight-project';
import { ProjectService } from '../../shared/project.service';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-portfolio',
  imports: [Zoekbalk, HighlightProject, ProjectCard],
  template: `
    <div class="w-full bg-light-black pt-48 pb-32 overflow-x-hidden relative">
      <div
        class="absolute -top-64 -right-64 w-125 h-125 md:w-175 md:h-175 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-2"
      ></div>
      <div class="w-full max-w-300 space-y-8 mx-auto z-10 relative">
        <div class="text-center space-y-1">
          <h1 class="text-fake-white font-bold text-[clamp(3rem,4vw,4rem)]">
            Mijn Werk<span class="text-primary">.</span>
          </h1>
          <h2 class="text-zinc-500 text-[clamp(2rem,2vw,2.5rem)]">
            Een selectie van technische uitdagingen en creatieve oplossingen
          </h2>
        </div>
        <div class="z-0 px-4 md:px-8">
          @if (project) {
            <app-highlight-project
              [projectTitle]="project.title"
              [projectDescription]="project.difficulty"
              [projectImage]="project.image"
              [projectSlug]="project.slug"
              [service]="project.service"
              [techStack]="project.techStack"
            ></app-highlight-project>
          }
        </div>
        <app-zoekbalk></app-zoekbalk>
        @if (allProjects.length > 0) {
          <div class="grid grid-cols-1 md:grid-cols-2 grid-auto-rows-fr gap-8 px-4 md:px-8 py-8">
            @for (project of allProjects; track project.id) {
              <app-project-card
                [projectTitle]="project.title"
                [projectDescription]="project.difficulty"
                [projectImage]="project.image"
                [projectSlug]="project.slug"
                [service]="project.service"
                [techStack]="project.techStack"
              ></app-project-card>
            }
          </div>
        } @else {
          <div class="text-center">Geen projecten gevonden.</div>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class Portfolio {
  private projectService = inject(ProjectService);
  project = this.projectService.getHighlightedProject();
  allProjects = this.projectService.getProjects();
}
