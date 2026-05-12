import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-highlight-project',
  imports: [RouterLink],
  standalone: true,
  template: `
    <div class="w-full">
      <!-- Section label — matches all other section headers -->
      <div class="border-b border-zinc-800/60 pb-6">
        <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">
          Uitgelicht project
        </span>
      </div>

      <!-- Content row -->
      <div class="w-full flex flex-col md:flex-row">
        <!-- Image -->
        <div class="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden group">
          <img
            [src]="projectImage"
            [alt]="projectTitle"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-black/20"></div>
        </div>

        <!-- Text — borders only on this side -->
        <div
          class="w-full md:w-1/2 flex flex-col justify-between py-10 md:py-12 px-0 md:pl-12 gap-8 border-t border-b border-zinc-700 md:border-l"
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
            <a
              [routerLink]="['/portfolio', projectSlug]"
              class="inline-flex items-center gap-2 text-fake-white hover:text-primary transition-colors duration-200 font-medium text-sm group"
            >
              Bekijk project
              <span class="text-primary group-hover:translate-x-1 transition-transform">→</span>
            </a>
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
