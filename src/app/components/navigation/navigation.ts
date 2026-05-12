import { Component, signal, inject, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

interface MenuItem {
  path: string;
  label: string;
  sub: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  animations: [
    trigger('overlay', [
      transition(':enter', [
        style({ clipPath: 'inset(0 0 100% 0)' }),
        animate('500ms cubic-bezier(0.76, 0, 0.24, 1)', style({ clipPath: 'inset(0 0 0% 0)' })),
      ]),
      transition(':leave', [
        animate('400ms cubic-bezier(0.76, 0, 0.24, 1)', style({ clipPath: 'inset(0 0 100% 0)' })),
      ]),
    ]),
    trigger('itemsIn', [
      transition(':enter', [
        query(
          '.nav-item',
          [
            style({ opacity: 0, transform: 'translateY(40px)' }),
            stagger(60, [
              animate(
                '400ms cubic-bezier(0.16, 1, 0.3, 1)',
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
    @if (router.url !== '/not-found') {
      <!-- Altijd zichtbare bar: logo + menu knop -->
      <header
        class="w-full fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300"
        [class.py-5]="!scrolled() && !isOpen()"
        [class.py-4]="scrolled() || isOpen()"
        [class.bg-black]="isOpen()"
        [class.bg-black/80]="scrolled() && !isOpen()"
        [class.backdrop-blur-md]="scrolled() && !isOpen()"
        [class.border-b]="scrolled() && !isOpen()"
        [class.border-zinc-800]="scrolled() && !isOpen()"
      >
        <div class="w-full max-w-300 mx-auto flex justify-between items-center">
          <!-- Logo -->
          <a routerLink="/" (click)="close()" class="h-7 flex items-center z-50 relative">
            <img src="/assets/img/w.png" alt="Logo" class="h-full" />
          </a>

          <!-- Menu toggle -->
          <button
            (click)="toggle()"
            class="relative z-50 flex items-center gap-3 group"
            aria-label="Toggle menu"
          >
            <span
              class="text-xs font-semibold uppercase tracking-widest transition-colors duration-200"
              [class.text-zinc-400]="!isOpen()"
              [class.text-fake-white]="isOpen()"
            >
              {{ isOpen() ? 'Sluiten' : 'Menu' }}
            </span>
            <div class="relative w-5 h-4 flex flex-col justify-between">
              <span
                class="block h-px bg-white transition-all duration-300 origin-center w-full"
                [style.transform]="isOpen() ? 'translateY(7px) rotate(45deg)' : 'none'"
              ></span>
              <span
                class="block h-px bg-white transition-all duration-300 w-3/4"
                [style.opacity]="isOpen() ? '0' : '1'"
                [style.transform]="isOpen() ? 'scaleX(0)' : 'none'"
              ></span>
              <span
                class="block h-px bg-white transition-all duration-300 origin-center w-full"
                [style.transform]="isOpen() ? 'translateY(-9px) rotate(-45deg)' : 'none'"
              ></span>
            </div>
          </button>
        </div>
      </header>

      <!-- Fullscreen overlay -->
      @if (isOpen()) {
        <div @overlay class="fixed inset-0 z-40 bg-black flex flex-col" [@itemsIn]>
          <!-- Top padding voor de header -->
          <div class="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-24 pb-12">
            <!-- Links -->
            <nav class="space-y-1 md:space-y-0">
              @for (item of menuItems(); track item.path; let i = $index) {
                <a
                  [routerLink]="item.path"
                  (click)="close()"
                  routerLinkActive="text-primary"
                  class="nav-item group flex items-baseline gap-4 md:gap-6 py-4 md:py-5 border-b border-zinc-800/60 last:border-b-0 cursor-pointer"
                >
                  <span class="text-zinc-700 text-xs font-mono w-6 shrink-0 translate-y-[-2px]"
                    >0{{ i + 1 }}</span
                  >
                  <span
                    class="text-fake-white font-bold text-[clamp(2.5rem,6vw,6rem)] leading-none tracking-tight group-hover:text-primary transition-colors duration-200"
                  >
                    {{ item.label }}
                  </span>
                  <span
                    class="hidden md:block text-zinc-600 text-sm ml-auto self-center group-hover:text-zinc-400 transition-colors duration-200"
                  >
                    {{ item.sub }}
                  </span>
                </a>
              }
            </nav>
          </div>

          <!-- Bottom: contact + socials -->
          <div
            class="nav-item px-6 md:px-16 lg:px-24 py-8 border-t border-zinc-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <a
              routerLink="/contact"
              (click)="close()"
              class="inline-flex items-center gap-3 bg-primary hover:bg-primary/85 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-sm"
            >
              Start een project →
            </a>
            <div class="flex items-center gap-6 text-xs text-zinc-600 uppercase tracking-widest">
              <a
                href="mailto:woutvanlommel@icloud.com"
                class="hover:text-zinc-300 transition-colors"
              >
                woutvanlommel&#64;icloud.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                class="hover:text-zinc-300 transition-colors"
                >LinkedIn</a
              >
              <a
                href="https://github.com"
                target="_blank"
                class="hover:text-zinc-300 transition-colors"
                >GitHub</a
              >
            </div>
          </div>
        </div>
      }
    }
  `,
})
export class Navigation {
  protected readonly router = inject(Router);
  protected readonly menuItems = signal<MenuItem[]>([
    { path: '/over-mij', label: 'Over mij', sub: 'Wie ik ben' },
    { path: '/diensten', label: 'Diensten', sub: 'Wat ik doe' },
    { path: '/portfolio', label: 'Portfolio', sub: 'Mijn werk' },
    { path: '/contact', label: 'Contact', sub: 'Laten we praten' },
  ]);

  isOpen = signal(false);
  scrolled = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 24);
  }

  toggle() {
    this.isOpen.update((v) => !v);
  }
  close() {
    this.isOpen.set(false);
  }
}
