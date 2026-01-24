import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  standalone: true,
  template: `
    <a
      [routerLink]="['/portfolio', projectSlug]"
      class="w-full h-full max-w-300 mx-auto flex flex-col-reverse bg-black rounded-lg overflow-hidden shadow group transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/20 reveal"
    >
      <div class="w-full flex-1 text-fake-white flex flex-col justify-between p-8 space-y-6">
        <div class="space-y-4">
          <div class="space-y-2">
            <h3 class="text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
              {{ projectTitle }}
            </h3>
            <p class="text-zinc-400 text-sm md:text-base line-clamp-3 leading-relaxed">
              {{ projectDescription }}
            </p>
          </div>
          <div
            class="inline-flex items-center gap-2 text-fake-white group-hover:text-primary transition-all font-medium"
          >
            Bekijk project
            <span class="text-primary group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>

        @if (techStack.length > 0) {
          <div class="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
            @for (tech of techStack; track tech) {
              <span
                class="px-3 py-1 bg-zinc-900 rounded-full text-[10px] md:text-xs text-zinc-400 border border-zinc-800"
                >{{ tech }}</span
              >
            }
          </div>
        }
      </div>

      <!-- Image Side -->
      <div class="w-full h-64 md:h-80 relative overflow-hidden">
        <img
          [src]="projectImage"
          [alt]="projectTitle"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <p
          class="absolute top-4 left-4 text-zinc-400 bg-black/80 backdrop-blur-sm tracking-widest text-[10px] py-1 px-4 border border-zinc-700 rounded-full w-fit uppercase group-hover:text-primary transition-colors"
        >
          {{ service }}
        </p>
      </div>
    </a>
  `,
  styles: ``,
})
export class ProjectCard {
  @Input() projectTitle: string = '';
  @Input() projectDescription: string = '';
  @Input() projectImage: string = '';
  @Input() projectSlug: string = '';
  @Input() service: string = '';
  @Input() techStack: string[] = [];
}
