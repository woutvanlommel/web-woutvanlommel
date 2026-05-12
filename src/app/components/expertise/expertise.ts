import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ExpertiseItem {
  title: string;
  sub: string;
  slug: string;
}

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="w-full px-6 md:px-16 lg:px-24 py-16 relative z-20">
      <div class="w-full max-w-300 mx-auto">
        <div class="border-b border-zinc-800/60 pb-6 mb-2">
          <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600"
            >Mijn expertise</span
          >
        </div>

        @for (item of expertiseItems; track item.title; let i = $index) {
          <a
            [routerLink]="['/diensten', item.slug]"
            class="group flex items-baseline gap-4 md:gap-6 py-7 border-b border-zinc-800/60 last:border-b-0 cursor-pointer reveal"
          >
            <span class="text-zinc-700 text-xs font-mono w-6 shrink-0 translate-y-[-2px]"
              >0{{ i + 1 }}</span
            >
            <span
              class="text-fake-white font-bold text-[clamp(2rem,4vw,4.5rem)] leading-none tracking-tight group-hover:text-primary transition-colors duration-200"
            >
              {{ item.title }}
            </span>
            <span
              class="hidden md:block text-zinc-600 text-sm ml-auto self-center group-hover:text-zinc-400 transition-colors duration-200"
            >
              {{ item.sub }}
            </span>
          </a>
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Expertise {
  protected readonly expertiseItems: ExpertiseItem[] = [
    { title: 'Maatwerk webapplicaties', sub: 'Van intern dashboard tot complete SaaS', slug: 'webapps' },
    { title: 'Flexibele Websites & CMS', sub: 'Snel, vindbaar en makkelijk te beheren', slug: 'websites' },
    { title: 'API-koppelingen', sub: 'Laat jouw systemen naadloos samenwerken', slug: 'api' },
    { title: 'Support & Onderhoud', sub: 'Updates, beveiliging en performantie', slug: 'support' },
  ];
}
