import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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
      <section class="w-full bg-light-black py-16 md:py-32 px-4 md:px-8">
        @if (project) {
          <div class="reveal">
            <app-highlight-project
              [projectTitle]="project.title"
              [projectDescription]="project.difficulty"
              [projectImage]="project.image"
              [projectSlug]="project.slug"
              [service]="project.service"
              [techStack]="project.techStack"
            ></app-highlight-project>
          </div>
        }
      </section>
    </div>
  `,
  styles: ``,
})
export class Home implements OnInit {
  private projectService = inject(ProjectService);
  private metaService = inject(Meta);
  project = this.projectService.getHighlightedProject();

  ngOnInit() {
    this.metaService.updateTag({
      name: 'description',
      content:
        'Wout Vanlommel - Freelance Full Stack Developer. Bekijk mijn portfolio voor maatwerk webapplicaties en moderne webervaringen.',
    });
  }
}
