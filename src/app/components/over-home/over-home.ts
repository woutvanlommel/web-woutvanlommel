import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-over-home',
  imports: [RouterLink],
  template: `
    <section class="w-full px-6 md:px-16 lg:px-24 py-16">
      <div class="w-full max-w-300 mx-auto">

        <!-- Header label -->
        <div class="border-b border-zinc-800/60 pb-6 reveal">
          <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Over mij</span>
        </div>

        <!-- Split layout -->
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 py-16 border-b border-zinc-800/60">

          <!-- Image -->
          <div class="relative w-full lg:col-span-2 reveal">
            <div class="relative w-full aspect-video lg:aspect-4/5">
              <div class="overflow-hidden relative z-10 aspect-video lg:aspect-4/5">
                <img
                  class="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-500"
                  src="assets/img/wout.jpeg"
                  alt="Wout"
                />
              </div>
              <div class="absolute top-2 -right-2 w-full h-full bg-primary -z-10"></div>
            </div>
          </div>

          <!-- Text -->
          <div class="flex flex-col gap-8 lg:col-span-3 reveal reveal-delay-200">
            <h2
              class="text-fake-white font-bold text-[clamp(2rem,3.5vw,4rem)] leading-none tracking-tight"
            >
              Gedreven door techniek,<br />gefocust op resultaat<span class="text-primary">.</span>
            </h2>
            <p class="text-zinc-500 leading-relaxed">
              Ik ben meer dan alleen een 'programmeur die tickets afwerkt.' Zie mij als je
              technische partner die proactief meedenkt over de beste digitale strategie voor jouw
              bedrijf.
            </p>

            <div class="border-t border-zinc-800/60">
              <div class="flex items-start gap-4 py-5 border-b border-zinc-800/40">
                <span class="text-zinc-700 text-xs font-mono shrink-0 pt-0.5">01</span>
                <p class="text-zinc-400 text-sm leading-relaxed">
                  <span class="text-fake-white font-semibold">Het complete plaatje — </span>
                  Als Full Stack developer snap ik de hele keten, van complexe database tot
                  pixel-perfect interfaces.
                </p>
              </div>
              <div class="flex items-start gap-4 py-5 border-b border-zinc-800/40">
                <span class="text-zinc-700 text-xs font-mono shrink-0 pt-0.5">02</span>
                <p class="text-zinc-400 text-sm leading-relaxed">
                  <span class="text-fake-white font-semibold">Geen 'u vraagt, wij draaien' — </span>
                  Ik durf kritische vragen te stellen om te zorgen dat we de juiste oplossing
                  bouwen.
                </p>
              </div>
              <div class="flex items-start gap-4 py-5 border-b border-zinc-800/40">
                <span class="text-zinc-700 text-xs font-mono shrink-0 pt-0.5">03</span>
                <p class="text-zinc-400 text-sm leading-relaxed">
                  <span class="text-fake-white font-semibold">Klaar voor groei — </span>
                  Ik bouw robuuste applicaties met oog voor structuur en schaalbaarheid.
                </p>
              </div>
            </div>

            <a
              routerLink="/over-mij"
              class="inline-flex items-center gap-3 bg-primary hover:bg-primary/85 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-sm w-fit"
            >
              Meer over mij →
            </a>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: ``,
})
export class OverHome {}
