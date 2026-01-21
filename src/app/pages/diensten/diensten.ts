import { Component, inject, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ExpertiseService } from '../../shared/expertise.service';

@Component({
  selector: 'app-diensten',
  standalone: true,
  imports: [RouterLink],
  animations: [
    trigger('reveal', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate(
          '600ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' }),
        ),
      ]),
    ]),
    trigger('staggerReveal', [
      transition(':enter', [
        query(
          '.reveal-item',
          [
            style({ opacity: 0, transform: 'translateY(20px)' }),
            stagger(100, [
              animate(
                '600ms cubic-bezier(0.35, 0, 0.25, 1)',
                style({ opacity: 1, transform: 'translateY(0)' }),
              ),
            ]),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
  template: ` <div class="w-full bg-light-black pt-48 overflow-x-hidden relative">
    <div
      class="absolute -top-64 -right-64 w-125 h-125 md:w-175 md:h-175 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-2"
    ></div>
    <div class="w-full max-w-300 space-y-8 mx-auto z-10 relative" @reveal>
      <div class="text-center space-y-1">
        <h1 class="text-fake-white font-bold text-[clamp(3rem,4vw,4rem)]">
          Mijn Expertise<span class="text-primary">.</span>
        </h1>
        <h2 class="text-zinc-500 text-[clamp(2rem,2vw,2.5rem)]">
          Van complexe backend tot pixel-perfecte frontend. Alles onder één dak.
        </h2>
      </div>
    </div>
    @if (expertises.length > 0) {
      <div @staggerReveal>
        @for (expertise of expertises; track expertise.id; let isOdd = $odd) {
          <div
            [id]="expertise.slug"
            class="w-full py-16 z-10 px-4 reveal-item"
            [class.bg-black]="isOdd"
          >
            <div
              class="w-full max-w-300 mx-auto flex flex-col md:flex-row gap-8 justify-center items-center px-4 md:px-8"
              [class.md:flex-row-reverse]="isOdd"
            >
              <div
                class="w-full md:w-1/2 flex flex-col gap-4 items-start justify-center text-fake-white"
              >
                <h2 class="font-semibold text-[clamp(2rem,2vw,3rem)]">
                  {{ expertise.title }}
                </h2>
                <p class="text-zinc-400">{{ expertise.description }}</p>
                <a
                  class="text-fake-white font-bold group inline-flex items-center gap-2 mt-2 cursor-pointer"
                  routerLink="/contact"
                >
                  {{ expertise.button }}
                  <span class="text-primary group-hover:translate-x-1 transition-transform pt-0.5"
                    >→</span
                  >
                </a>
              </div>
              <div class="w-full md:w-1/2">
                <img [src]="expertise.image" [alt]="expertise.title" class="w-full" />
              </div>
            </div>
          </div>
        }
      </div>
    }
    <div class="w-full bg-light-black">
      <div class="w-full max-w-300 mx-auto px-4 md:px-8 py-24 space-y-8">
        <h2 class="font-semibold text-[clamp(2rem,2vw,3rem)] text-fake-white" @reveal>
          Hoe we samenwerken<span class="text-primary">.</span>
        </h2>
        @if (workFlows.length > 0) {
          <div
            class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 rounded-lg overflow-hidden text-fake-white"
            @staggerReveal
          >
            @for (workflow of workFlows; track workflow.id) {
              <div class="bg-black/50 p-6 space-y-4 reveal-item">
                <p class="text-3xl font-bold">
                  {{ workflow.number }}<span class="text-primary">.</span>
                </p>
                <h3 class="text-primary text-md uppercase">
                  {{ workflow.title }}
                </h3>
                <p class="text-zinc-400">{{ workflow.description }}</p>
              </div>
            }
          </div>
        }
      </div>
    </div>
  </div>`,
  styles: ``,
})
export class Diensten implements AfterViewInit {
  private expertiseService = inject(ExpertiseService);
  expertises = this.expertiseService.getExpertises();

  private workFlowsService = inject(ExpertiseService);
  workFlows = this.workFlowsService.getWorkFlows();

  private route = inject(ActivatedRoute);

  ngAfterViewInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        // Altijd eerst naar boven als er een slug is, zodat we daarna rustig kunnen scrollen
        window.scrollTo(0, 0);

        // Langere timeout voor de animaties om hun werk te doen
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
              inline: 'nearest',
            });
          }
        }, 300);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
