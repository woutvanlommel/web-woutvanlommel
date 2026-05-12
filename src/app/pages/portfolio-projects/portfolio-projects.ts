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
    <div class="w-full min-h-screen">
      @if (project) {
        <div class="w-full max-w-300 mx-auto px-6 md:px-16 lg:px-24 py-32 space-y-16">
          <!-- Breadcrumb -->
          <nav class="text-zinc-500 text-xs uppercase tracking-widest">
            <ol class="flex items-center gap-2">
              <li
                class="flex items-center gap-2 after:content-['/'] after:text-zinc-700 after:ml-2"
              >
                <a routerLink="/" class="hover:text-primary transition-colors">Home</a>
              </li>
              <li
                class="flex items-center gap-2 after:content-['/'] after:text-zinc-700 after:ml-2"
              >
                <a routerLink="/portfolio" class="hover:text-primary transition-colors"
                  >Portfolio</a
                >
              </li>
              <li class="text-primary font-semibold">{{ project.client }}</li>
            </ol>
          </nav>

          <!-- Header -->
          <div class="space-y-5 text-center">
            @if (project.status === 'legacy') {
              <div class="flex justify-center">
                <span
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-zinc-700 bg-zinc-800/60 text-zinc-400"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-zinc-500 inline-block"></span>
                  Legacy project
                </span>
              </div>
            }
            @if (project.status === 'ongoing') {
              <div class="flex justify-center">
                <span
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-primary/30 bg-primary/10 text-primary"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-primary inline-block animate-pulse"
                  ></span>
                  In ontwikkeling
                </span>
              </div>
            }
            <h1 class="text-[clamp(2rem,3.5vw,4.5rem)] font-bold text-fake-white leading-tight">
              {{ project.title }}
            </h1>
            <p class="text-[clamp(1rem,1.3vw,1.75rem)] text-zinc-500">{{ project.subTitle }}</p>
          </div>

          <!-- Meta grid -->
          <div
            class="grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden ring-1 ring-zinc-800"
          >
            <div class="bg-zinc-900/70 p-5 flex flex-col gap-1.5">
              <p class="text-xs text-primary uppercase tracking-widest font-medium">Klant</p>
              <span class="text-fake-white font-medium text-sm md:text-base">{{
                project.client
              }}</span>
            </div>
            <div class="bg-zinc-900/70 p-5 flex flex-col gap-1.5">
              <p class="text-xs text-primary uppercase tracking-widest font-medium">Dienst</p>
              <!-- service is string[] dus joinen met ' & ' -->
              <span class="text-fake-white font-medium text-sm md:text-base">{{
                project.service.join(' & ')
              }}</span>
            </div>
            <div class="bg-zinc-900/70 p-5 flex flex-col gap-1.5">
              <p class="text-xs text-primary uppercase tracking-widest font-medium">Jaar</p>
              <span class="text-fake-white font-medium text-sm md:text-base">{{
                project.year
              }}</span>
            </div>
            <div class="bg-zinc-900/70 p-5 flex flex-col gap-1.5">
              <p class="text-xs text-primary uppercase tracking-widest font-medium">Links</p>
              @if (project.link) {
                <a
                  [href]="project.link"
                  target="_blank"
                  class="inline-flex items-center gap-1 text-fake-white font-medium text-sm md:text-base hover:text-primary transition-colors"
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
                  class="inline-flex items-center gap-1 text-fake-white font-medium text-sm md:text-base hover:text-primary transition-colors"
                >
                  GitHub <ng-icon name="bootstrapArrowUpRight" size="0.7rem" />
                </a>
              }
            </div>
          </div>

          <!-- Afbeelding of placeholder -->
          @if (project.image) {
            <div class="rounded-xl overflow-hidden ring-1 ring-zinc-800">
              <img [src]="project.image" [alt]="project.title" class="w-full object-cover" />
            </div>
          } @else {
            <div
              class="rounded-xl border border-dashed border-zinc-700/60 bg-zinc-900/30 flex flex-col items-center justify-center py-20 gap-3"
            >
              <div class="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                <svg
                  class="w-5 h-5 text-zinc-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p class="text-zinc-600 text-sm">Afbeelding volgt</p>
            </div>
          }

          <!-- Inhoud + stack -->
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <!-- Tekst (3/5) -->
            <div class="lg:col-span-3 space-y-12">
              <div class="space-y-4">
                <h3
                  class="text-xs uppercase tracking-widest text-primary font-medium flex items-center gap-3"
                >
                  <span class="w-6 h-px bg-primary inline-block"></span>
                  De uitdaging
                </h3>
                <p class="text-zinc-300 text-base md:text-lg leading-relaxed">
                  {{ project.difficulty }}
                </p>
              </div>

              <div class="space-y-4">
                <h3
                  class="text-xs uppercase tracking-widest text-primary font-medium flex items-center gap-3"
                >
                  <span class="w-6 h-px bg-primary inline-block"></span>
                  De oplossing
                </h3>
                <p class="text-zinc-300 text-base md:text-lg leading-relaxed">
                  {{ project.solution }}
                </p>
              </div>

              @if (project.link) {
                <a
                  [href]="project.link"
                  target="_blank"
                  class="group inline-flex items-center gap-2 px-6 py-3 border border-primary text-fake-white font-semibold rounded-lg hover:bg-primary transition-all duration-200"
                >
                  Bezoek de live site
                  <ng-icon
                    name="bootstrapArrowUpRight"
                    size="1rem"
                    class="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              }
            </div>

            <!-- Stack (2/5) -->
            <div class="lg:col-span-2 space-y-4">
              <h3
                class="text-xs uppercase tracking-widest text-zinc-500 font-medium flex items-center gap-3"
              >
                <span class="w-6 h-px bg-zinc-700 inline-block"></span>
                Tech stack
              </h3>
              <div class="flex flex-col gap-2">
                @for (tech of project.techStack; track tech) {
                  <div
                    class="flex items-center gap-3 px-4 py-3 bg-zinc-900/60 ring-1 ring-zinc-800 rounded-lg"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                    <span class="text-fake-white font-medium text-sm">{{ tech }}</span>
                  </div>
                }
              </div>
            </div>
          </div>

          <!-- Navigatie -->
          <div class="flex justify-between items-start gap-4 pt-8 border-t border-zinc-800/60">
            <a routerLink="/portfolio" class="group flex flex-col gap-1">
              <p
                class="text-zinc-600 uppercase text-xs tracking-widest flex items-center gap-1.5 group-hover:text-primary transition-colors"
              >
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
                <p
                  class="text-zinc-600 uppercase text-xs tracking-widest flex items-center gap-1.5 group-hover:text-primary transition-colors"
                >
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
        <div class="pt-32 text-center text-zinc-500">Project niet gevonden.</div>
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

  projects = this.projectsService.getProjects();
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
