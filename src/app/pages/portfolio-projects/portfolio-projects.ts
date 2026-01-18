import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Import ActivatedRoute
import { ProjectService } from '../../shared/project.service';
import { Project } from '../../models/project.model'; // Import Project type
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
    <div class="w-full bg-light-black">
      @if (project) {
        <div class="w-full max-w-300 space-y-12 mx-auto px-4 md:px-8 py-32">
          <nav class="flex text-zinc-500 text-sm capitalize tracking-wider">
            <ol class="flex items-center gap-2">
              <li class="flex items-center gap-2 after:content-['/'] after:text-zinc-700">
                <a routerLink="/" class="hover:text-primary transition-colors">Home</a>
              </li>
              <li class="flex items-center gap-2 after:content-['/'] after:text-zinc-700">
                <a routerLink="/portfolio" class="hover:text-primary transition-colors"
                  >Portfolio</a
                >
              </li>
              <li class="text-primary font-semibold">{{ project.client }} - {{ project.title }}</li>
            </ol>
          </nav>
          <div class="text-center space-y-1">
            <h1 class="text-[clamp(2rem,3.5vw,5rem)] font-bold text-fake-white">
              {{ project.title }}
            </h1>
            <h2 class="text-[clamp(1rem,2vw,3rem)] text-zinc-600">{{ project.subTitle }}</h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 mx-auto gap-0.5 rounded-lg overflow-hidden">
            <div class="flex flex-col gap-0 bg-black/50 p-4">
              <p class="text-[clamp(0.8rem,1vw,1.5rem)] text-primary uppercase">Klant</p>
              <span class="text-fake-white text-[clamp(1rem,1.3vw,2rem)]">{{
                project.client
              }}</span>
            </div>
            <div class="flex flex-col gap-0 bg-black/50 p-4">
              <p class="text-[clamp(0.8rem,1vw,1.5rem)] text-primary uppercase">Diensten</p>
              <div>
                @for (service of project.service; track service; let last = $last) {
                  <span class="text-fake-white text-[clamp(1rem,1.3vw,2rem)] inline-block"
                    >{{ service.trim() }} {{ !last ? ',' : '' }}</span
                  >
                }
              </div>
            </div>
            <div class="flex flex-col gap-0 bg-black/50 p-4">
              <p class="text-[clamp(0.8rem,1vw,1.5rem)] text-primary uppercase">Jaar</p>
              <span class="text-fake-white text-[clamp(1rem,1.3vw,2rem)]">{{ project.year }}</span>
            </div>
            <div class="flex flex-col gap-0 bg-black/50 p-4">
              <p class="text-[clamp(0.8rem,1vw,1.5rem)] text-primary uppercase">Linkjes</p>
              <div>
                @if (project.link) {
                  <a
                    [href]="project.link"
                    target="_blank"
                    class="text-fake-white text-[clamp(1rem,1.3vw,2rem)] hover:underline"
                    >Live Link</a
                  >
                } @else {
                  <span class="text-fake-white text-[clamp(1rem,1.3vw,2rem)]"
                    >Geen publieke link</span
                  >
                }
              </div>
              <div>
                @if (project.githubLink) {
                  <a
                    [href]="project.githubLink"
                    target="_blank"
                    class="text-fake-white text-[clamp(1rem,1.3vw,2rem)] hover:underline"
                    >GitHub Link</a
                  >
                } @else {
                  <span class="text-fake-white text-[clamp(1rem,1.3vw,2rem)]"
                    >Geen GitHub link</span
                  >
                }
              </div>
            </div>
          </div>
          <div class="">
            <img
              [src]="project.image"
              [alt]="project.title"
              class="rounded-lg shadow-[0_0px_20px_-4px] shadow-fake-white"
            />
          </div>
          <div class="flex flex-col-reverse md:flex-row w-full gap-8">
            <div class="w-full md:w-3/5 space-y-8">
              <div class="w-full space-y-4">
                <h3 class="text-[clamp(1.5rem,1.5vw,2.5rem)] text-primary uppercase">
                  De uitdaging
                </h3>
                <p class="text-[clamp(1rem,1vw,1.5rem)] text-fake-white">
                  {{ project.difficulty }}
                </p>
              </div>
              <div class="w-full space-y-4">
                <h3 class="text-[clamp(1.5rem,1.5vw,2.5rem)] text-primary uppercase">
                  De oplossing
                </h3>
                <p class="text-[clamp(1rem,1vw,1.5rem)] text-fake-white">{{ project.solution }}</p>
              </div>
              @if (project.link) {
                <a
                  [href]="project.link"
                  target="_blank"
                  class="group inline-flex items-center gap-2 px-6 py-2 border-2 border-primary text-fake-white font-semibold rounded-lg hover:bg-primary transition-all duration-300 ease-in-out shadow-lg shadow-primary/10 hover:shadow-primary/40"
                >
                  Bezoek de live site
                  <ng-icon
                    name="bootstrapArrowUpRight"
                    size="1rem"
                    class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  ></ng-icon>
                </a>
              }
            </div>
            <div class="w-full md:w-2/5 space-y-4">
              <h3
                class="text-fake-white text-[clamp(1.5rem,1.5vw,2.5rem)] text-center md:text-left"
              >
                Tech Stack<span class="text-primary">.</span>
              </h3>
              <div class="grid grid-cols-2 md:grid-cols-1 gap-2 bg-black/50 p-4 rounded-lg">
                @for (techStack of project.techStack; track techStack) {
                  <div
                    class="flex justify-center items-center p-2 bg-black text-fake-white font-bold text-md md:text-lg shadow-sm shadow-primary/50 rounded-lg"
                  >
                    <h3>{{ techStack }}</h3>
                  </div>
                }
              </div>
            </div>
          </div>
          <div class="flex justify-between items-start gap-4 bg-black/50 p-4 rounded-lg">
            <a
              routerLink="/portfolio"
              class="group flex flex-col justify-center items-start text-left"
            >
              <p
                class="text-zinc-500 uppercase text-[clamp(0.7rem,0.8vw,1.5rem)] flex items-center gap-2 group-hover:text-primary transition-colors"
              >
                <ng-icon name="bootstrapArrowLeft" />Portfolio
              </p>
              <p class="text-fake-white text-[clamp(1rem,1vw,1.5rem)] font-bold">
                Terug naar portfolio
              </p>
            </a>

            @if (nextProject) {
              <a
                [routerLink]="['/portfolio', nextProject.slug]"
                class="group flex flex-col justify-center items-end text-right"
              >
                <p
                  class="text-zinc-500 uppercase text-[clamp(0.7rem,0.8vw,1.5rem)] flex items-center gap-2 group-hover:text-primary transition-colors"
                >
                  Volgenjde proect <ng-icon name="bootstrapArrowRight" />
                </p>
                <p class="text-fake-white text-[clamp(1rem,1vw,1.5rem)] font-bold">
                  {{ nextProject.title }}
                </p>
              </a>
            } @else {
              <div></div>
            }
          </div>
        </div>
      } @else {
        <div class="pt-32 text-center">Project niet gevonden.</div>
      }
    </div>
  `,
  styles: ``,
})
export class PortfolioProjects implements OnInit {
  private projectsService = inject(ProjectService);
  private route = inject(ActivatedRoute); // Inject ActivatedRoute

  projects = this.projectsService.getProjects();
  project: Project | undefined;
  nextProject: Project | undefined;
  prevProject: Project | undefined;

  ngOnInit() {
    // Reageer op veranderingen in de URL (belangrijk voor navigatie tussen projecten)
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

      // Optioneel: scroll naar boven bij navigatie
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.project = undefined;
      this.prevProject = undefined;
      this.nextProject = undefined;
    }
  }
}
