import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-highlight-project',
  imports: [RouterLink],
  standalone: true,
  template: `<section class="w-full bg-light-black py-16 md:py-32 px-4 md:px-8">
    <div
      class="w-full max-w-300 mx-auto flex flex-col-reverse md:flex-row bg-black rounded-lg overflow-hidden shadow-2xl"
    >
      <div class="w-full md:w-1/2 text-fake-white space-y-8 p-8">
        <h1 class="text-[clamp(2rem,2vw,3rem)] font-semibold">
          Uitgelicht project<span class="text-primary">.</span>
        </h1>

        <div class="space-y-4">
          <p
            class="text-zinc-400 tracking-widest text-[10px] py-1 px-4 border border-zinc-700 rounded-full w-fit uppercase"
          >
            {{ service }}
          </p>
          <div class="space-y-2">
            <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {{ projectTitle }}
            </h3>
            <p class="text-zinc-400 text-sm md:text-base line-clamp-2 leading-relaxed">
              {{ projectDescription }}
            </p>
          </div>
          <a
            [routerLink]="['/portfolio', projectSlug]"
            class="inline-flex items-center gap-2 text-fake-white hover:text-white transition-all group cursor-pointer font-medium"
          >
            Bekijk project
            <span class="text-primary group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        @if (techStack.length > 0) {
          <div class="flex flex-wrap gap-2 pt-4">
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
      <div class="w-full h-80 md:h-auto md:w-1/2 relative group">
        <img
          [src]="projectImage"
          [alt]="projectTitle"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-black/40 md:to-transparent group-hover:scale-105 transition-transform duration-500"
        ></div>
      </div>
    </div>
  </section>`,
  styles: ``,
})
export class HighlightProject {
  @Input() projectTitle: string = '';
  @Input() projectDescription: string = '';
  @Input() projectImage: string = '';
  @Input() projectSlug: string = '';
  @Input() service: string = '';
  @Input() techStack: string[] = [];
}
