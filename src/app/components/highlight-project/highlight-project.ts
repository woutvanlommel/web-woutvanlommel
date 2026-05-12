import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-highlight-project',
  imports: [RouterLink],
  standalone: true,
  template: `
    <div
      class="w-full mx-auto flex flex-col-reverse md:flex-row bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden"
    >
      <!-- Content -->
      <div class="w-full md:w-1/2 flex flex-col justify-between p-8 gap-8">
        <div class="space-y-1">
          <p class="text-xs text-zinc-600 uppercase tracking-widest font-medium">
            Uitgelicht project
          </p>
          <div class="w-6 h-px bg-primary"></div>
        </div>

        <div class="space-y-4">
          <span
            class="inline-block text-zinc-400 tracking-widest text-[10px] py-1 px-3 border border-zinc-700/60 rounded-full uppercase"
          >
            {{ service.join(' & ') }}
          </span>
          <h3 class="text-fake-white text-3xl md:text-4xl font-bold leading-tight">
            {{ projectTitle }}
          </h3>
          <p class="text-zinc-500 text-sm md:text-base leading-relaxed line-clamp-3">
            {{ projectDescription }}
          </p>
          <a
            [routerLink]="['/portfolio', projectSlug]"
            class="inline-flex items-center gap-2 text-fake-white hover:text-primary transition-colors font-medium group"
          >
            Bekijk project
            <span class="text-primary group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        @if (techStack.length > 0) {
          <div class="flex flex-wrap gap-2 pt-4 border-t border-zinc-800">
            @for (tech of techStack; track tech) {
              <span
                class="px-2 py-0.5 bg-zinc-800/80 rounded text-[10px] text-zinc-400 border border-zinc-700/50"
              >
                {{ tech }}
              </span>
            }
          </div>
        }
      </div>

      <!-- Image -->
      <div class="w-full h-72 md:h-auto md:w-1/2 relative overflow-hidden group">
        <img
          [src]="projectImage"
          [alt]="projectTitle"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent"
        ></div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HighlightProject {
  @Input() projectTitle: string = '';
  @Input() projectDescription: string = '';
  @Input() projectImage: string = '';
  @Input() projectSlug: string = '';
  @Input() service: string[] = [];
  @Input() techStack: string[] = [];
}
