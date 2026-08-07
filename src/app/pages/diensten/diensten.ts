import { Component, inject, AfterViewInit, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { ExpertiseService } from '../../shared/expertise.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapBoxArrowUpRight } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-diensten',
  standalone: true,
  imports: [RouterLink, NgIcon],
  viewProviders: [provideIcons({ bootstrapBoxArrowUpRight })],
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
  template: `
    <div class="w-full overflow-x-hidden relative">
      <!-- Hero -->
      <section class="h-svh flex flex-col px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div class="w-full max-w-300 mx-auto relative z-10 flex flex-col h-full">
          <div class="flex-1 flex flex-col justify-center pt-24 md:pt-28 reveal">
            <div class="border-b border-zinc-800/60 pb-4">
              <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600"
                >Mijn diensten</span
              >
            </div>
            <div class="py-5 md:py-6 border-b border-zinc-800/60">
              <h1
                class="text-fake-white font-bold text-[clamp(2.5rem,6vw,6rem)] leading-none tracking-tight"
              >
                Van idee naar<br /><span class="text-primary">werkende software</span
                ><span class="text-fake-white">.</span>
              </h1>
            </div>
          </div>
          <div
            class="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal"
          >
            <p class="text-zinc-500 text-sm max-w-md leading-relaxed">
              Van complexe backend tot pixel-perfecte frontend. Alles onder één dak.
            </p>
            <div class="flex items-center gap-6 text-xs text-zinc-600 uppercase tracking-widest">
              <a routerLink="/portfolio" class="hover:text-zinc-300 transition-colors duration-200"
                >Portfolio</a
              >
              <a routerLink="/over-mij" class="hover:text-zinc-300 transition-colors duration-200"
                >Over mij</a
              >
              <a routerLink="/contact" class="hover:text-zinc-300 transition-colors duration-200"
                >Contact</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Expertise sections -->
      @if (expertises.length > 0) {
        @for (expertise of expertises; track expertise.id; let i = $index; let isOdd = $odd) {
          <section [id]="expertise.slug" class="w-full px-6 md:px-16 lg:px-24 py-16">
            <div class="w-full max-w-300 mx-auto">
              <div class="border-b border-zinc-800/60 pb-6 reveal">
                <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600"
                  >0{{ i + 1 }}</span
                >
              </div>

              <div
                [class]="
                  'flex flex-col lg:flex-row gap-12 py-16 border-b border-zinc-800/60' +
                  (isOdd ? ' lg:flex-row-reverse' : '')
                "
              >
                <div class="w-full lg:w-3/5 flex flex-col gap-8 reveal reveal-delay-200">
                  <h2
                    class="text-fake-white font-bold text-[clamp(2rem,3.5vw,4rem)] leading-none tracking-tight"
                  >
                    {{ expertise.title }}<span class="text-primary">.</span>
                  </h2>
                  <p class="text-zinc-500 leading-relaxed">{{ expertise.description }}</p>
                  @if (expertise.link) {
                    <a
                      [href]="expertise.link"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-3 bg-primary hover:bg-primary/85 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-sm w-fit"
                    >
                      {{ expertise.button }}
                      <ng-icon name="bootstrapBoxArrowUpRight" size="0.9rem" />
                    </a>
                  } @else {
                    <a
                      routerLink="/contact"
                      class="inline-flex items-center gap-3 bg-primary hover:bg-primary/85 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-sm w-fit"
                    >
                      {{ expertise.button }} →
                    </a>
                  }
                </div>

                <div class="w-full lg:w-2/5 reveal">
                  <img [src]="expertise.image" [alt]="expertise.title" class="w-full" />
                </div>
              </div>
            </div>
          </section>
        }
      }

      <!-- Workflow -->
      <section class="w-full px-6 md:px-16 lg:px-24 py-16">
        <div class="w-full max-w-300 mx-auto">
          <div class="border-b border-zinc-800/60 pb-6 reveal">
            <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600"
              >Werkwijze</span
            >
          </div>

          <div class="py-16">
            <h2
              class="text-fake-white font-bold text-[clamp(2rem,3.5vw,4rem)] leading-none tracking-tight mb-12 reveal"
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
      </section>
    </div>
  `,
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
