import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations'; // 1. Animaties importeren

interface MenuItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  // 2. Definieer de animatie
  animations: [
    trigger('slideDown', [
      // Binnenkomen: start boven beeld (-100%), glijd naar 0
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate(
          '300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
      // Weggaan: glijd terug naar boven
      transition(':leave', [
        animate(
          '250ms cubic-bezier(0.4, 0.0, 0.2, 1)',
          style({ transform: 'translateY(-100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
  template: `
    <nav
      class="w-full py-6 px-4 md:px-8 fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 transition-all duration-300"
    >
      <div class="w-full max-w-300 mx-auto flex justify-between items-center">
        <div class="flex justify-start w-full h-8 items-center">
          <a
            routerLink="/"
            class="text-2xl font-bold text-white relative z-50"
            (click)="closeMenu()"
          >
            <img src="/assets/img/w.png" alt="Logo" class="h-full" />
          </a>
        </div>

        <div
          class="hidden md:flex flex-row justify-center gap-6 items-center justify-self-center w-full min-w-fit"
        >
          @for (item of menuItems(); track item.path) {
          <a
            [routerLink]="item.path"
            routerLinkActive="text-primary"
            class="
              relative text-fake-white font-medium text-[clamp(1rem,1.5vw,1.5rem)] transition-colors duration-300
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

        <div class="flex justify-end items-center gap-4 w-full">
          <a
            routerLink="/contact"
            class="hidden md:flex bg-primary hover:bg-primary-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            Start Project
          </a>

          <button
            (click)="toggleMobileMenu()"
            class="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <span
              class="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
              [class.rotate-45]="isMobileMenuOpen()"
              [class.translate-y-2]="isMobileMenuOpen()"
            ></span>

            <span
              class="block w-6 h-0.5 bg-white transition-all duration-300"
              [class.opacity-0]="isMobileMenuOpen()"
            ></span>

            <span
              class="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
              [class.-rotate-45]="isMobileMenuOpen()"
              [class.-translate-y-2]="isMobileMenuOpen()"
            ></span>
          </button>
        </div>
      </div>
    </nav>

    @if (isMobileMenuOpen()) {
    <div
      @slideDown
      class="fixed inset-0 z-40 bg-black/90 backdrop-blur-md w-full h-screen flex flex-col justify-center items-center pt-20"
    >
      <div class="flex flex-col gap-8 text-center w-full px-6">
        @for (item of menuItems(); track item.path) {
        <a
          [routerLink]="item.path"
          (click)="toggleMobileMenu()"
          routerLinkActive="text-primary"
          [routerLinkActiveOptions]="{ exact: true }"
          class="text-3xl font-bold text-fake-white hover:text-primary transition-colors"
        >
          {{ item.label }}
        </a>
        }

        <div class="mt-8">
          <a
            routerLink="/contact"
            (click)="toggleMobileMenu()"
            class="inline-block w-full max-w-xs bg-primary hover:bg-primary-600 text-white font-bold py-4 rounded-xl text-xl transition-colors shadow-lg shadow-primary/20"
          >
            Start een project
          </a>
        </div>
      </div>
    </div>
    }
  `,
})
export class Navigation {
  protected readonly menuItems = signal<MenuItem[]>([
    { path: '/over-mij', label: 'Over mij' },
    { path: '/diensten', label: 'Diensten' },
    { path: '/portfolio', label: 'Portfolio' },
  ]);

  isMobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((val) => !val);
  }

  // Extra helper om menu te sluiten als je op logo klikt
  closeMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
