import { Component, inject } from '@angular/core';
import { HomeHero } from '../../components/home-hero/home-hero';
import { Expertise } from '../../components/expertise/expertise';
import { OverHome } from '../../components/over-home/over-home';
import { HighlightProject } from '../../components/highlight-project/highlight-project';
import { ProjectService } from '../../shared/project.service';

@Component({
  selector: 'app-home',
  imports: [HomeHero, Expertise, OverHome, HighlightProject],
  template: `
    <div class="w-full">
      <app-home-hero></app-home-hero>
      <app-expertise></app-expertise>
      <app-over-home></app-over-home>
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
  `,
  styles: ``,
})
export class Home {
  private projectService = inject(ProjectService);
  project = this.projectService.getHighlightedProject();
}
