import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  standalone: true,
  template: `
    <a
      [routerLink]="['/portfolio', projectSlug]"
      class="group w-full h-full flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900"
    >
      <!-- Image -->
      <div class="w-full h-56 md:h-64 relative overflow-hidden">
        @if (projectImage) {
          <img
            [src]="projectImage"
            [alt]="projectTitle"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        } @else {
          <div class="w-full h-full bg-zinc-900 flex items-center justify-center">
            <svg
              class="w-8 h-8 text-zinc-700"
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
        }
        <!-- Service badge -->
        <span
          class="absolute top-3 left-3 text-zinc-300 bg-black/70 backdrop-blur-sm tracking-widest text-[10px] py-1 px-3 border border-zinc-700/60 rounded-full uppercase"
        >
          {{ service.join(' & ') }}
        </span>
      </div>

      <!-- Content -->
      <div class="flex flex-col flex-1 p-6 gap-4">
        <div class="space-y-2 flex-1">
          <h3 class="text-fake-white text-lg md:text-xl font-semibold leading-tight">
            {{ projectTitle }}
          </h3>
          <p class="text-zinc-500 text-sm leading-relaxed line-clamp-3">
            {{ projectDescription }}
          </p>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-zinc-800">
          @if (techStack.length > 0) {
            <div class="flex flex-wrap gap-1.5">
              @for (tech of techStack; track tech) {
                <span
                  class="px-2 py-0.5 bg-zinc-800/80 rounded text-[10px] text-zinc-400 border border-zinc-700/50"
                >
                  {{ tech }}
                </span>
              }
            </div>
          }
          <span
            class="text-zinc-600 text-sm font-medium group-hover:text-primary transition-colors ml-auto flex items-center gap-1 shrink-0"
          >
            Bekijk
            <span class="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
          </span>
        </div>
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
  @Input() service: string[] = [];
  @Input() techStack: string[] = [];
}
