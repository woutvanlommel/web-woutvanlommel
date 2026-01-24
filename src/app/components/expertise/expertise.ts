import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
// 1. Importeer de library en de provider
import { NgIconComponent, provideIcons } from '@ng-icons/core';
// 2. Importeer de specifieke iconen die je wilt gebruiken (Outline versie is vaak mooist)
import {
  heroCommandLine,
  heroComputerDesktop,
  heroPuzzlePiece,
  heroWrenchScrewdriver,
} from '@ng-icons/heroicons/outline';

interface ExpertiseItem {
  title: string;
  description: string;
  iconName: string;
  buttonLabel: string;
  slug: string;
}

@Component({
  selector: 'app-expertise',
  standalone: true,
  // 3. Importeer NgIconComponent voor gebruik in HTML
  imports: [RouterLink, NgIconComponent],
  // 4. Registreer de iconen hier. Dit zorgt dat ze beschikbaar zijn.
  viewProviders: [
    provideIcons({
      heroCommandLine,
      heroComputerDesktop,
      heroPuzzlePiece,
      heroWrenchScrewdriver,
    }),
  ],
  template: `
    <section class="w-full py-20 px-4 md:px-8 bg-light-black relative z-20">
      <div class="w-full max-w-300 mx-auto flex flex-col gap-8">
        <div class="flex flex-col gap-2 reveal">
          <span class="uppercase text-primary text-sm font-bold tracking-wider">Mijn skills</span>
          <h2 class="text-fake-white font-extrabold text-3xl md:text-4xl">
            Mijn expertise<span class="text-primary">.</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          @for (item of expertiseItems; track item.title; let i = $index) {
            <div
              [class]="
                'group p-8 border border-white/10 bg-black rounded-2xl hover:border-primary/50 hover:bg-black/10 transition-all duration-300 cursor-pointer reveal reveal-delay-' +
                ((i % 4) + 1) * 100
              "
            >
              <div class="flex flex-col items-start gap-6 h-full">
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 flex items-center justify-center bg-light-black/40 rounded-lg text-primary border border-white/5 group-hover:scale-110 transition-transform duration-300"
                  >
                    <ng-icon [name]="item.iconName" size="1.5rem" class="text-primary"></ng-icon>
                  </div>
                  <h3
                    class="text-fake-white text-[clamp(1.5rem,2vw,2rem)] font-bold group-hover:text-primary transition-colors"
                  >
                    {{ item.title }}
                  </h3>
                </div>

                <p class="text-gray-400 text-base leading-relaxed h-auto md:min-h-12">
                  {{ item.description }}
                </p>

                <a
                  [routerLink]="['/diensten', item.slug]"
                  class="font-bold text-fake-white text-sm flex items-center gap-2 mt-auto group-hover:translate-x-2 transition-transform duration-300"
                >
                  {{ item.buttonLabel }}
                  <span class="text-primary text-lg">→</span>
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Expertise {
  protected readonly expertiseItems: ExpertiseItem[] = [
    {
      title: 'Maatwerk webapplicaties',
      description:
        'Jouw unieke bedrijfsproces vertaald naar software. Van intern dashboard tot complete SaaS.',
      iconName: 'heroCommandLine', // Verwijst naar de import
      buttonLabel: 'Ontdek webapps',
      slug: 'webapps',
    },
    {
      title: 'Flexibele Websites & CMS',
      description:
        'Snel, vindbaar en makkelijk zelf aan te passen. Geen standaard templates, maar pixel-perfect design.',
      iconName: 'heroComputerDesktop',
      buttonLabel: 'Ontdek websites',
      slug: 'websites',
    },
    {
      title: 'API-koppelingen',
      description:
        'Software mag geen eiland zijn. Ik laat jouw systemen (CRM, boekhouding) naadloos met elkaar praten.',
      iconName: 'heroPuzzlePiece',
      buttonLabel: 'Ontdek automatisatie',
      slug: 'api',
    },
    {
      title: 'Support & Onderhoud',
      description:
        'Geen zorgen over updates of downtime. Ik houd de motor draaiende terwijl jij onderneemt.',
      iconName: 'heroWrenchScrewdriver',
      buttonLabel: 'Ontdek support',
      slug: 'support',
    },
  ];
}
