import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  path: string;
  label: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    @if (router.url !== '/not-found') {
      <footer class="bg-black border-t border-zinc-800/60">
        <!-- CTA -->
        @if (router.url !== '/contact') {
          <div class="px-6 md:px-16 lg:px-24 py-16 border-b border-zinc-800/40">
            <div
              class="w-full max-w-300 mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
            >
              <div class="space-y-2">
                <p class="text-xs text-zinc-600 uppercase tracking-widest font-semibold">
                  Nieuw project?
                </p>
                <h2
                  class="text-fake-white font-bold leading-tight tracking-tight text-[clamp(2rem,3.5vw,3.5rem)]"
                >
                  Laten we iets bouwen<span class="text-primary">.</span>
                </h2>
              </div>
              <a
                routerLink="/contact"
                class="group shrink-0 inline-flex items-center gap-3 text-fake-white text-sm font-semibold border border-zinc-700 hover:border-zinc-400 py-3 px-7 rounded-lg transition-all duration-200"
              >
                Start een project
                <span
                  class="text-primary group-hover:translate-x-1 transition-transform duration-200"
                  >→</span
                >
              </a>
            </div>
          </div>
        }

        <!-- Main grid -->
        <div class="px-6 md:px-16 lg:px-24 pt-14 pb-10">
          <div class="w-full max-w-300 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <!-- Left: tagline + contact -->
            <div class="flex flex-col gap-6">
              <p class="text-zinc-600 text-sm leading-relaxed max-w-xs">
                Maatwerk webapplicaties die jouw bedrijf versterken. Freelance fullstack developer
                uit Hasselt.
              </p>
              <div class="space-y-1.5">
                <p class="text-[10px] text-zinc-700 uppercase tracking-widest font-semibold mb-2">
                  Contact
                </p>
                <a
                  href="mailto:woutvanlommel@icloud.com"
                  class="block text-zinc-500 text-sm hover:text-fake-white transition-colors duration-200"
                >
                  woutvanlommel&#64;icloud.com
                </a>
                <p class="text-zinc-600 text-sm">3500 Hasselt, België</p>
                <p class="text-zinc-600 text-xs pt-0.5">BE 0793.803.953</p>
              </div>
            </div>

            <!-- Center: nav links -->
            <div class="flex flex-col gap-4">
              <p class="text-[10px] text-zinc-700 uppercase tracking-widest font-semibold">
                Navigation
              </p>
              <nav class="flex flex-col gap-0.5">
                @for (item of menuItems(); track item.path) {
                  <a
                    [routerLink]="item.path"
                    routerLinkActive="!text-primary"
                    class="text-fake-white font-bold text-[clamp(1.5rem,2.5vw,2.75rem)] leading-tight tracking-tight hover:text-primary transition-colors duration-200"
                  >
                    {{ item.label }}
                  </a>
                }
              </nav>
            </div>

            <!-- Right: connect -->
            <div class="flex flex-col gap-4">
              <p class="text-[10px] text-zinc-700 uppercase tracking-widest font-semibold">
                Connect
              </p>
              <div class="flex flex-col gap-1.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  class="text-fake-white font-semibold text-lg hover:text-primary transition-colors duration-200 flex items-center gap-2 w-fit"
                >
                  LinkedIn <span class="text-zinc-700 text-sm">↗</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  class="text-fake-white font-semibold text-lg hover:text-primary transition-colors duration-200 flex items-center gap-2 w-fit"
                >
                  GitHub <span class="text-zinc-700 text-sm">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="px-6 md:px-16 lg:px-24 py-5 border-t border-zinc-800/40">
          <div
            class="w-full max-w-300 mx-auto flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest"
          >
            <span>&copy; {{ currentYear() }} Wout Vanlommel</span>
            <div class="flex gap-5">
              <a
                routerLink="/algemene-voorwaarden"
                class="hover:text-primary transition-colors duration-200"
                >Algemene Voorwaarden</a
              >
              <a
                routerLink="/privacy-verklaring"
                class="hover:text-primary transition-colors duration-200"
                >Privacy</a
              >
            </div>
          </div>
        </div>
      </footer>
    }
  `,
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
