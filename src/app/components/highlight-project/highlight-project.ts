import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-highlight-project',
  imports: [RouterLink],
  standalone: true,
  template: `
    <div class="w-full">
      <!-- Section label -->
      <div class="border-b border-zinc-800/60 pb-6">
        <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">
          Uitgelicht project
        </span>
      </div>

      <!-- Hele content row navigeert via click -->
      <a
        [routerLink]="['/portfolio', projectSlug]"
        class="w-full flex flex-col md:flex-row group cursor-pointer"
      >
        <!-- Image -->
        <div class="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <img
            [src]="projectImage"
            [alt]="projectTitle"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
          />
        </div>

        <!-- Text -->
        <div
          class="w-full md:w-1/2 flex flex-col justify-between py-10 md:py-12 px-0 md:pl-12 gap-8 border-t border-b border-zinc-800/60 md:border-l md:border-zinc-800/60"
        >
          <div class="space-y-4">
            <span class="text-zinc-700 text-[10px] font-mono uppercase tracking-widest">
              {{ service.join(' & ') }}
            </span>
            <h3
              class="text-fake-white text-[clamp(1.75rem,3vw,3rem)] font-bold leading-none tracking-tight"
            >
              {{ projectTitle }}
            </h3>
            <p class="text-zinc-500 text-sm leading-relaxed line-clamp-3">
              {{ projectDescription }}
            </p>
            <div
              class="inline-flex items-center gap-2 text-fake-white group-hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              Bekijk project
              <span class="text-primary group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>

          @if (techStack.length > 0) {
            <div class="flex flex-wrap gap-x-4 gap-y-1 pt-6 border-t border-zinc-800/60">
              @for (tech of techStack; track tech) {
                <span class="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                  {{ tech }}
                </span>
              }
            </div>
          }
        </div>
      </a>
    </div>
  `,
})
export class HighlightProject {
  @Input() projectTitle: string = '';
  @Input() projectDescription: string = '';
  @Input() projectImage: string = '';
  @Input() projectSlug: string = '';
  @Input() service: string[] = [];
  @Input() techStack: string[] = [];
}
