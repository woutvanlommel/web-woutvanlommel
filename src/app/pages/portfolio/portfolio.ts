import { Component, computed, inject, OnInit, OnDestroy, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Zoekbalk } from '../../components/zoekbalk/zoekbalk';
import { HighlightProject } from '../../components/highlight-project/highlight-project';
import { ProjectService } from '../../shared/project.service';
import { ProjectService as ProjectServiceType } from '../../models/project.model';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, Zoekbalk, HighlightProject, ProjectCard],
  template: `
    <div class="w-full overflow-x-hidden relative">

      <!-- Hero -->
      <section class="h-svh flex flex-col px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div class="w-full max-w-300 mx-auto relative z-10 flex flex-col h-full">
          <div class="flex-1 flex flex-col justify-center pt-24 md:pt-28 reveal">
            <div class="border-b border-zinc-800/60 pb-4">
              <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Mijn werk</span>
            </div>
            <div class="py-5 md:py-6 border-b border-zinc-800/60">
              <h1 class="text-fake-white font-bold text-[clamp(2.5rem,6vw,6rem)] leading-none tracking-tight">
                Projecten die<br />het verschil maken<span class="text-primary">.</span>
              </h1>
            </div>
          </div>
          <div class="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal">
            <p class="text-zinc-500 text-sm max-w-md leading-relaxed">
              Een selectie van technische uitdagingen en creatieve oplossingen.
            </p>
            <div class="flex items-center gap-6 text-xs text-zinc-600 uppercase tracking-widest">
              <a routerLink="/over-mij" class="hover:text-zinc-300 transition-colors duration-200">Over mij</a>
              <a routerLink="/diensten" class="hover:text-zinc-300 transition-colors duration-200">Diensten</a>
              <a routerLink="/contact" class="hover:text-zinc-300 transition-colors duration-200">Contact</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Highlighted project -->
      <section class="w-full px-6 md:px-16 lg:px-24 py-16">
        <div class="w-full max-w-300 mx-auto">
          @if (project) {
            <div class="reveal">
              <app-highlight-project
                [projectTitle]="project.title"
                [projectDescription]="project.content.context"
                [projectImage]="project.image ?? ''"
                [projectSlug]="project.slug"
                [service]="project.service"
                [techStack]="project.techStack"
              ></app-highlight-project>
            </div>
          }
        </div>
      </section>

      <!-- Project grid -->
      <section class="w-full px-6 md:px-16 lg:px-24 py-16">
        <div class="w-full max-w-300 mx-auto space-y-8">

          <div class="border-b border-zinc-800/60 pb-6 reveal">
            <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Alle projecten</span>
          </div>

          <app-zoekbalk
            (searchChange)="onSearchChange($event)"
            (serviceChange)="onServiceChange($event)"
          ></app-zoekbalk>

          @if (paginatedProjects().length > 0) {
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              @for (project of paginatedProjects(); track project.id) {
                <div class="reveal">
                  <app-project-card
                    [projectTitle]="project.title"
                    [projectDescription]="project.content.context"
                    [projectImage]="project.image"
                    [projectSlug]="project.slug"
                    [service]="project.service"
                    [techStack]="project.techStack"
                    [status]="project.status"
                  ></app-project-card>
                </div>
              }
            </div>

            <!-- Pagination -->
            @if (totalPages() > 1) {
              <div class="flex items-center justify-between pt-4 border-t border-zinc-800/60">
                <button
                  (click)="prevPage()"
                  [disabled]="currentPage() === 1"
                  class="text-xs uppercase tracking-widest text-zinc-600 hover:text-zinc-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  ← Vorige
                </button>

                <div class="flex items-center gap-1">
                  @for (page of pageNumbers(); track page) {
                    <button
                      (click)="goToPage(page)"
                      [class]="page === currentPage()
                        ? 'w-8 h-8 text-xs font-semibold text-fake-white bg-zinc-800 rounded'
                        : 'w-8 h-8 text-xs text-zinc-600 hover:text-zinc-300 transition-colors rounded'"
                    >
                      {{ page }}
                    </button>
                  }
                </div>

                <button
                  (click)="nextPage()"
                  [disabled]="currentPage() === totalPages()"
                  class="text-xs uppercase tracking-widest text-zinc-600 hover:text-zinc-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  Volgende →
                </button>
              </div>
            }
          } @else {
            <p class="text-zinc-600 text-sm py-8">Geen projecten gevonden.</p>
          }

        </div>
      </section>

      <!-- Legacy archive -->
      @if (legacyProjects.length > 0) {
        <section class="w-full px-6 md:px-16 lg:px-24 py-16">
          <div class="w-full max-w-300 mx-auto space-y-8">

            <div class="border-b border-zinc-800/60 pb-6 reveal">
              <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Archief</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              @for (legacy of legacyProjects; track legacy.id) {
                <div class="reveal">
                  <app-project-card
                    [projectTitle]="legacy.title"
                    [projectDescription]="legacy.content.context"
                    [projectImage]="legacy.image"
                    [projectSlug]="legacy.slug"
                    [service]="legacy.service"
                    [techStack]="legacy.techStack"
                    [status]="legacy.status"
                  ></app-project-card>
                </div>
              }
            </div>

          </div>
        </section>
      }

    </div>
  `,
  styles: ``,
})
export class Portfolio implements OnInit, OnDestroy {
  private projectService = inject(ProjectService);
  private metaService = inject(Meta);
  private platformId = inject(PLATFORM_ID);

  project = this.projectService.getHighlightedProject();
  allProjects = this.projectService.getProjects().filter((p) => p.status !== 'legacy');
  legacyProjects = this.projectService.getLegacyProjects();

  searchTerm = signal('');
  selectedService = signal<ProjectServiceType | ''>('');
  currentPage = signal(1);
  itemsPerPage = signal(6);

  private resizeHandler = () => this.updateItemsPerPage();

  filteredProjects = computed(() => {
    const term = this.searchTerm().toLowerCase();
    const service = this.selectedService();

    return this.allProjects.filter((project) => {
      const matchesSearch =
        !term ||
        project.title.toLowerCase().includes(term) ||
        project.client.toLowerCase().includes(term) ||
        project.content.context.toLowerCase().includes(term) ||
        project.content.approach.toLowerCase().includes(term) ||
        project.techStack.some((t) => t.toLowerCase().includes(term));

      const matchesService = !service || project.service.includes(service);

      return matchesSearch && matchesService;
    });
  });

  totalPages = computed(() => Math.ceil(this.filteredProjects().length / this.itemsPerPage()));

  paginatedProjects = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage();
    return this.filteredProjects().slice(start, start + this.itemsPerPage());
  });

  pageNumbers = computed(() =>
    Array.from({ length: this.totalPages() }, (_, i) => i + 1),
  );

  onSearchChange(term: string) {
    this.searchTerm.set(term);
    this.currentPage.set(1);
  }

  onServiceChange(service: ProjectServiceType | '') {
    this.selectedService.set(service);
    this.currentPage.set(1);
  }

  prevPage() {
    if (this.currentPage() > 1) this.currentPage.update((p) => p - 1);
  }

  nextPage() {
    if (this.currentPage() < this.totalPages()) this.currentPage.update((p) => p + 1);
  }

  goToPage(page: number) {
    this.currentPage.set(page);
  }

  private updateItemsPerPage() {
    this.itemsPerPage.set(window.innerWidth < 768 ? 4 : 6);
  }

  ngOnInit() {
    this.metaService.updateTag({
      name: 'description',
      content:
        'Bekijk mijn portfolio: een overzicht van projecten variërend van complexe ERP-systemen tot moderne webapplicaties.',
    });

    if (isPlatformBrowser(this.platformId)) {
      this.updateItemsPerPage();
      window.addEventListener('resize', this.resizeHandler);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.resizeHandler);
    }
  }
}
