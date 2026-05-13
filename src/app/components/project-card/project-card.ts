import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  standalone: true,
  template: `
    <a
      [routerLink]="['/portfolio', projectSlug]"
      class="group w-full h-full flex flex-col bg-zinc-900/50 border border-zinc-800/60 rounded-lg overflow-hidden transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-900"
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
          <div
            class="w-full h-full bg-zinc-900 flex flex-col items-center justify-center gap-4 relative overflow-hidden"
          >
            <div
              class="absolute inset-0 opacity-[0.03]"
              style="background-image: repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px);"
            ></div>
            <span
              class="text-[5rem] font-bold leading-none tracking-tight select-none text-zinc-800 z-10"
            >
              W<span class="text-primary">.</span>
            </span>
            <span class="text-[10px] uppercase tracking-widest text-zinc-700 z-10 font-mono"
              >Coming soon</span
            >
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
          <div class="flex items-center gap-2 flex-wrap">
            <h3 class="text-fake-white text-lg md:text-xl font-semibold leading-tight">
              {{ projectTitle }}
            </h3>
            @if (status === 'legacy') {
              <span class="inline-flex items-center gap-1 text-zinc-500 tracking-widest text-[10px] py-0.5 px-2 border border-zinc-700/60 rounded-full uppercase font-mono shrink-0">
                <span class="w-1 h-1 rounded-full bg-zinc-500 inline-block"></span>
                Legacy
              </span>
            }
            @if (status === 'ongoing') {
              <span class="inline-flex items-center gap-1 text-primary tracking-widest text-[10px] py-0.5 px-2 border border-primary/40 rounded-full uppercase font-mono shrink-0">
                <span class="w-1 h-1 rounded-full bg-primary inline-block animate-pulse"></span>
                In ontwikkeling
              </span>
            }
          </div>
          <p class="text-zinc-500 text-sm leading-relaxed line-clamp-3">
            {{ projectDescription }}
          </p>
        </div>

        <div class="flex items-center justify-between pt-4 border-t border-zinc-800">
          @if (techStack.length > 0) {
            <div class="flex flex-wrap gap-1.5">
              @for (tech of techStack; track tech) {
                <span
                  class="px-2 py-0.5 bg-zinc-900/80 rounded text-[10px] text-zinc-500 border border-zinc-800/60 font-mono"
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
  @Input() projectImage: string | undefined = undefined;
  @Input() projectSlug: string = '';
  @Input() service: string[] = [];
  @Input() techStack: string[] = [];
  @Input() status: string | undefined = undefined;
}
