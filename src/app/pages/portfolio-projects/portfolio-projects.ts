import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../shared/project.service';
import { Project } from '../../models/project.model';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  bootstrapArrowUpRight,
  bootstrapArrowLeft,
  bootstrapArrowRight,
} from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-portfolio-projects',
  imports: [NgIcon, RouterLink],
  standalone: true,
  viewProviders: [provideIcons({ bootstrapArrowUpRight, bootstrapArrowLeft, bootstrapArrowRight })],
  template: `
    <div class="w-full">
      @if (project) {
        <div class="w-full max-w-300 mx-auto px-6 md:px-16 lg:px-24">

          <!-- Page header -->
          <div class="pt-40 pb-0">

            <!-- Breadcrumb -->
            <nav class="text-zinc-600 text-xs uppercase tracking-widest">
              <ol class="flex items-center gap-2">
                <li class="flex items-center gap-2 after:content-['/'] after:text-zinc-800 after:ml-2">
                  <a routerLink="/" class="hover:text-zinc-400 transition-colors">Home</a>
                </li>
                <li class="flex items-center gap-2 after:content-['/'] after:text-zinc-800 after:ml-2">
                  <a routerLink="/portfolio" class="hover:text-zinc-400 transition-colors">Portfolio</a>
                </li>
                <li class="text-zinc-400">{{ project.client }}</li>
              </ol>
            </nav>

            <!-- Label row -->
            <div class="border-b border-zinc-800/60 pb-6 mt-12">
              <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">
                {{ project.service.join(' & ') }}
              </span>
            </div>

            <!-- Title block -->
            <div class="py-8 md:py-10 border-b border-zinc-800/60 space-y-4">
              @if (project.status === 'legacy') {
                <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-zinc-700 bg-zinc-800/60 text-zinc-400">
                  <span class="w-1.5 h-1.5 rounded-full bg-zinc-500 inline-block"></span>
                  Legacy project
                </span>
              }
              @if (project.status === 'ongoing') {
                <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-primary/30 bg-primary/10 text-primary">
                  <span class="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse"></span>
                  In ontwikkeling
                </span>
              }
              <h1 class="text-fake-white font-bold text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-tight">
                {{ project.title }}<span class="text-primary">.</span>
              </h1>
              <p class="text-zinc-500 text-[clamp(1rem,1.3vw,1.5rem)] leading-relaxed">{{ project.subTitle }}</p>
            </div>

            <!-- Meta row -->
            <div class="grid grid-cols-2 md:grid-cols-4 border-b border-zinc-800/60">
              <div class="py-6 md:pr-8 border-r border-zinc-800/60 flex flex-col gap-1.5">
                <p class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Klant</p>
                <span class="text-fake-white font-medium text-sm">{{ project.client }}</span>
              </div>
              <div class="py-6 px-6 md:px-8 border-r border-zinc-800/60 flex flex-col gap-1.5">
                <p class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Dienst</p>
                <span class="text-fake-white font-medium text-sm">{{ project.service.join(' & ') }}</span>
              </div>
              <div class="py-6 px-6 md:px-8 border-r border-zinc-800/60 flex flex-col gap-1.5">
                <p class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Jaar</p>
                <span class="text-fake-white font-medium text-sm">{{ project.year }}</span>
              </div>
              <div class="py-6 pl-6 md:pl-8 flex flex-col gap-1.5">
                <p class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Links</p>
                @if (project.link) {
                  <a
                    [href]="project.link"
                    target="_blank"
                    class="inline-flex items-center gap-1.5 text-fake-white text-sm hover:text-primary transition-colors font-medium"
                  >
                    Live site <ng-icon name="bootstrapArrowUpRight" size="0.7rem" />
                  </a>
                } @else {
                  <span class="text-zinc-600 text-sm">Geen link</span>
                }
                @if (project.githubLink) {
                  <a
                    [href]="project.githubLink"
                    target="_blank"
                    class="inline-flex items-center gap-1.5 text-fake-white text-sm hover:text-primary transition-colors font-medium"
                  >
                    GitHub <ng-icon name="bootstrapArrowUpRight" size="0.7rem" />
                  </a>
                }
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="py-16 border-b border-zinc-800/60">
            @if (project.image) {
              <div class="overflow-hidden rounded-lg">
                <img [src]="project.image" [alt]="project.title" class="w-full object-cover" />
              </div>
            } @else {
              <div class="rounded-lg border border-dashed border-zinc-800 bg-zinc-900/30 flex flex-col items-center justify-center py-20 gap-3">
                <p class="text-zinc-600 text-sm">Afbeelding volgt</p>
              </div>
            }
          </div>

          <!-- Content + stack -->
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-16 py-16 border-b border-zinc-800/60">

            <!-- Text (3/5) -->
            <div class="lg:col-span-3 space-y-12">
              <div class="space-y-6">
                <div class="border-b border-zinc-800/60 pb-6">
                  <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">De uitdaging</span>
                </div>
                <p class="text-zinc-400 leading-relaxed">{{ project.difficulty }}</p>
              </div>

              <div class="space-y-6">
                <div class="border-b border-zinc-800/60 pb-6">
                  <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">De oplossing</span>
                </div>
                <p class="text-zinc-400 leading-relaxed">{{ project.solution }}</p>
              </div>

              @if (project.link) {
                <a
                  [href]="project.link"
                  target="_blank"
                  class="inline-flex items-center gap-3 bg-primary hover:bg-primary/85 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-sm w-fit"
                >
                  Bezoek de live site
                  <ng-icon name="bootstrapArrowUpRight" size="0.9rem" />
                </a>
              }
            </div>

            <!-- Stack (2/5) -->
            <div class="lg:col-span-2 mt-12 lg:mt-0 space-y-6">
              <div class="border-b border-zinc-800/60 pb-6">
                <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Tech stack</span>
              </div>
              <div class="flex flex-col gap-2">
                @for (tech of project.techStack; track tech; let i = $index) {
                  <div class="flex items-center gap-4 py-4 border-b border-zinc-800/40">
                    <span class="text-zinc-700 text-xs font-mono shrink-0">{{ (i + 1).toString().padStart(2, '0') }}</span>
                    <span class="text-fake-white font-medium text-sm">{{ tech }}</span>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <div class="flex justify-between items-start gap-4 py-12">
            <a routerLink="/portfolio" class="group flex flex-col gap-1">
              <p class="text-zinc-600 uppercase text-xs tracking-widest flex items-center gap-1.5 group-hover:text-primary transition-colors">
                <ng-icon name="bootstrapArrowLeft" size="0.7rem" />
                Portfolio
              </p>
              <p class="text-fake-white text-sm font-semibold">Terug naar overzicht</p>
            </a>

            @if (nextProject) {
              <a
                [routerLink]="['/portfolio', nextProject.slug]"
                class="group flex flex-col gap-1 items-end text-right"
              >
                <p class="text-zinc-600 uppercase text-xs tracking-widest flex items-center gap-1.5 group-hover:text-primary transition-colors">
                  Volgend project
                  <ng-icon name="bootstrapArrowRight" size="0.7rem" />
                </p>
                <p class="text-fake-white text-sm font-semibold">{{ nextProject.title }}</p>
              </a>
            } @else {
              <div></div>
            }
          </div>

        </div>
      } @else {
        <div class="pt-40 text-center text-zinc-600 text-sm">Project niet gevonden.</div>
      }
    </div>
  `,
  styles: ``,
})
export class PortfolioProjects implements OnInit {
  private projectsService = inject(ProjectService);
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private cdr = inject(ChangeDetectorRef);

  projects = this.projectsService.getProjects().filter((p) => p.status !== 'legacy');
  project: Project | undefined;
  nextProject: Project | undefined;
  prevProject: Project | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.updateProjectData(slug);
    });
  }

  private updateProjectData(slug: string | null) {
    const currentIndex = this.projects.findIndex((p) => p.slug === slug);

    if (currentIndex !== -1) {
      this.project = this.projects[currentIndex];
      this.prevProject = this.projects[currentIndex - 1];
      this.nextProject = this.projects[currentIndex + 1];

      this.titleService.setTitle(`Wout — ${this.project.title}`);
      this.metaService.updateTag({
        name: 'description',
        content: `${this.project.title} voor ${this.project.client}. ${this.project.difficulty.substring(0, 150)}...`,
      });

      this.cdr.detectChanges();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.project = undefined;
      this.prevProject = undefined;
      this.nextProject = undefined;
    }
  }
}
