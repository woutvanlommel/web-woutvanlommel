import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { ProjectService } from '../../shared/project.service';
import { Project } from '../../models/project.model'; // Import Project type

@Component({
  selector: 'app-portfolio-projects',
  imports: [],
  template: `
    <div class="w-full bg-light-black">
      @if (project) {
        <div class="w-full max-w-300 space-y-12 mx-auto px-4 md:px-8 py-32">
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
          <div class="flex flex-col-reverse md:flex-row w-full gap-4">
            <div class="w-full md:w-2/3">
              <div class="w-full">
                <h3 class="text-[clamp(1.5rem,1.5vw,2.5rem)] text-primary uppercase">
                  De uitdaging
                </h3>
                <p class="text-[clamp(1rem,1vw,1.5rem)] text-fake-white">
                  {{ project.difficulty }}
                </p>
              </div>
              <div>
                <h3 class="text-[clamp(1.5rem,1.5vw,2.5rem)] text-primary uppercase">
                  De oplossing
                </h3>
                <p class="text-[clamp(1rem,1vw,1.5rem)] text-fake-white">{{ project.solution }}</p>
              </div>
            </div>
            <div class="w-full md:w-1/3">
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

  ngOnInit() {
    // Haal het ID uit de URL
    const slug = this.route.snapshot.paramMap.get('slug');

    // Zoek het specifieke project
    this.project = this.projects.find((p) => p.slug === slug);

    console.log('Gevonden ID uit URL:', slug);

    if (this.project) {
      console.log('Project details geladen:', this.project);
      console.log('Klant:', this.project.client);
      console.log('Tech Stack:', this.project.techStack.join(', '));
    } else {
      console.error('Project niet gevonden met ID:', slug);
    }
  }
}
