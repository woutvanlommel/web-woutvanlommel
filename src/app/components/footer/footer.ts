import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMapPinSolid, heroEnvelopeSolid } from '@ng-icons/heroicons/solid';
import { bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';

interface MenuItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgIcon],
  viewProviders: [
    provideIcons({ heroMapPinSolid, heroEnvelopeSolid, bootstrapGithub, bootstrapLinkedin }),
  ],
  template: `<div class=" bg-black">
    @if (router.url !== '/contact') {
      <div
        class="w-full flex items-center justify-center py-12 px-4 md:px-8 flex-col text-center gap-4 border-b border-white/10"
      >
        <div class="flex flex-col gap-2 text-fake-white justify-center items-center">
          <h2 class="text-[clamp(1.5rem,2vw,2.5rem)] font-bold">
            Klaar voor jouw idee te realiseren<span class="text-primary">?</span>
          </h2>
          <p class="text-[clamp(1rem,1vw,1.5rem)] font-semibold">
            Laten we samen bespreken hoe we jouw bedrijf digitaal kunnen versterken.
          </p>
        </div>
        <a
          routerLink="/contact"
          class="bg-primary cursor-pointer hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-[clamp(1rem,1.2vw,1.5rem)]"
        >
          Start een project
        </a>
      </div>
    }
    <div class="w-full">
      <div
        class=" w-full max-w-300 mx-auto flex flex-col md:flex-row justify-between items-start py-12 px-4 md:px-8 gap-8 border-b border-white/10"
      >
        <div
          class="flex flex-col gap-4 w-full items-center md:items-start justify-start text-fake-white"
        >
          <div class="flex flex-col gap-2 justify-center items-center md:items-start">
            <a routerLink="/" class="h-8 flex items-center justify-center">
              <img src="/assets/img/w.png" alt="Logo" class="h-full" />
            </a>
            <p class="uppercase text-primary text-[clamp(1rem,1.3vw,1.5rem)] font-bold">
              Full Stack Developer
            </p>
          </div>
          <div class="flex flex-col gap-1 justify-center items-center md:items-start w-fit">
            <div
              class="w-full flex flex-row items-center justify-center md:justify-start gap-2 text-[clamp(1rem,1vw,1.5rem)]"
            >
              <div class="mt-0.5">
                <ng-icon name="heroMapPinSolid" />
              </div>
              <p>3500 Hasselt, België</p>
            </div>
            <a
              href="mailto:woutvanlommel@icloud.com"
              class="w-full flex flex-row items-center justify-center md:justify-start gap-2 text-[clamp(1rem,1vw,1.5rem)]"
            >
              <div class="mt-0.5">
                <ng-icon name="heroEnvelopeSolid" />
              </div>
              woutvanlommel@icloud.com
            </a>
            <p>BE 0793.803.953</p>
          </div>
        </div>
        <div class="flex flex-col gap-2 w-full justify-start items-center text-fake-white">
          <p class="font-bold text-[clamp(1.5rem,1.4vw,2rem)]">
            Snel naar<span class="text-primary">.</span>
          </p>
          <div class="flex flex-col gap-2 justify-center items-center">
            @for (item of menuItems(); track item.path) {
              <a
                [routerLink]="item.path"
                routerLinkActive="text-primary"
                class="
              relative text-fake-white font-medium text-[clamp(1rem,1.3vw,1.5rem)] transition-colors duration-300
              after:content-[''] after:absolute after:left-0 after:-bottom-1 
              after:h-0.5 after:w-0 after:bg-primary 
              after:transition-all after:duration-300 
              hover:after:w-full
            "
              >
                {{ item.label }}
              </a>
            }
          </div>
        </div>
        <div
          class="flex flex-row gap-2 w-full justify-center md:justify-end items-center text-fake-white 
          [&>a]:hover:text-primary 
          [&>a]:hover:transition-colors 
          [&>a]:hover:uration-300 text-[clamp(1.5rem,2vw,2.5rem)]
          [&>a]:cursor-pointer"
        >
          <a>
            <ng-icon name="bootstrapLinkedin" />
          </a>
          <a>
            <ng-icon name="bootstrapGithub" />
          </a>
        </div>
      </div>
      <div
        class="w-full max-w-300 mx-auto flex flex-col-reverse md:flex-row justify-center md:justify-between items-center py-6 px-4 md:px-8 gap-4 text-fake-white text-[clamp(0.875rem,1vw,1.125rem)]"
      >
        <div class="w-full text-center md:text-left">
          <p>
            &copy; {{ currentYear() }} Wout Vanlommel. Alle rechten voorbehouden<span
              class="text-primary"
              >.</span
            >
          </p>
        </div>
        <div class=" w-full flex flex-row gap-4 justify-center md:justify-end items-center">
          <a routerLink="/">Algemene Voorwaarden</a>
          <a routerLink="/">Privacy Verklaring</a>
        </div>
      </div>
    </div>
  </div>`,
})
export class Footer {
  protected readonly router = inject(Router);

  protected readonly menuItems = signal<MenuItem[]>([
    { path: '/over-mij', label: 'Over mij' },
    { path: '/diensten', label: 'Diensten' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ]);

  currentYear = signal(new Date().getFullYear());
}

// transition-colors duration-300
//               after:content-[''] after:absolute after:left-0 after:-bottom-1
//               after:h-0.5 after:w-0 after:bg-primary
//               after:transition-all after:duration-300
//               hover:after:w-full
