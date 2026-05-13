import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  imports: [RouterLink],
  template: `
    <section class="h-svh flex flex-col px-6 md:px-16 lg:px-24 relative overflow-hidden">
<div class="w-full max-w-300 mx-auto relative z-10 flex flex-col h-full">
        <!-- Label + heading — mirrors nav item structure -->
        <div class="flex-1 flex flex-col justify-center pt-24 md:pt-28 reveal">
          <div class="border-b border-zinc-800/60 pb-4">
            <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600"
              >Freelance fullstack developer</span
            >
          </div>
          <div class="py-5 md:py-6 border-b border-zinc-800/60">
            <h1
              class="text-fake-white font-bold text-[clamp(2.5rem,6vw,6rem)] leading-none tracking-tight"
            >
              Maatwerk webapplicaties die jouw bedrijf
              <span class="text-primary">versterken</span><span class="text-fake-white">.</span>
            </h1>
          </div>
        </div>

        <!-- Bottom bar — mirrors nav bottom bar exactly -->
        <div
          class="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal"
        >
          <a
            routerLink="/contact"
            class="inline-flex items-center gap-3 bg-primary hover:bg-primary/85 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-sm"
          >
            Start een project →
          </a>
          <div class="flex items-center gap-6 text-xs text-zinc-600 uppercase tracking-widest">
            <a routerLink="/portfolio" class="hover:text-zinc-300 transition-colors duration-200"
              >Portfolio</a
            >
            <a routerLink="/over-mij" class="hover:text-zinc-300 transition-colors duration-200"
              >Over mij</a
            >
            <a routerLink="/diensten" class="hover:text-zinc-300 transition-colors duration-200"
              >Diensten</a
            >
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class HomeHero {}
