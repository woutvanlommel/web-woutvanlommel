import { Component, inject, AfterViewInit, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';
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
  template: ` <div class="w-full pt-48 overflow-x-hidden relative">
    <div class="w-full max-w-300 space-y-8 mx-auto z-10 relative px-6 md:px-16 lg:px-24 reveal">
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
      <div>
        @for (expertise of expertises; track expertise.id; let isOdd = $odd) {
          <div
            [id]="expertise.slug"
            class="w-full py-16 z-10 px-6 md:px-16 lg:px-24 reveal"
            [class.bg-zinc-900/20]="isOdd"
          >
            <div
              class="w-full max-w-300 mx-auto flex flex-col md:flex-row gap-8 justify-center items-center"
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
    <div class="w-full">
      <div class="w-full max-w-300 mx-auto px-6 md:px-16 lg:px-24 py-24 space-y-8">
        <div class="border-b border-zinc-800/60 pb-6 reveal">
          <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600"
            >Werkwijze</span
          >
        </div>
        <h2
          class="text-fake-white font-bold text-[clamp(2rem,3vw,3rem)] leading-tight tracking-tight reveal"
        >
          Hoe we samenwerken<span class="text-primary">.</span>
        </h2>
        @if (workFlows.length > 0) {
          <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            @for (workflow of workFlows; track workflow.id; let i = $index) {
              <div
                [class]="
                  'p-6 bg-zinc-900/50 ring-1 ring-zinc-800 hover:ring-zinc-600 rounded-lg space-y-3 transition-colors reveal reveal-delay-' +
                  ((i % 4) + 1) * 100
                "
              >
                <p class="text-3xl font-bold text-fake-white">
                  {{ workflow.number }}<span class="text-primary">.</span>
                </p>
                <h3 class="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  {{ workflow.title }}
                </h3>
                <p class="text-zinc-400 text-sm leading-relaxed">{{ workflow.description }}</p>
              </div>
            }
          </div>
        }
      </div>
    </div>
  </div>`,
  styles: ``,
})
export class Diensten implements AfterViewInit, OnInit {
  private expertiseService = inject(ExpertiseService);
  expertises = this.expertiseService.getExpertises();

  private workFlowsService = inject(ExpertiseService);
  workFlows = this.workFlowsService.getWorkFlows();

  private route = inject(ActivatedRoute);
  private metaService = inject(Meta);
  private platformId = inject(PLATFORM_ID);

  ngOnInit() {
    this.metaService.updateTag({
      name: 'description',
      content:
        'Maatwerk webapplicaties, API-koppelingen en performante websites. Ontdek hoe ik jouw bedrijf help groeien met technische oplossingen.',
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      if (slug) {
        window.scrollTo(0, 0);
        setTimeout(() => {
          const element = document.getElementById(slug);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
          }
        }, 300);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }
}
