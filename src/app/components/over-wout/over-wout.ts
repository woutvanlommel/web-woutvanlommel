import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroCheckMicro } from '@ng-icons/heroicons/micro';

@Component({
  selector: 'app-over-wout',
  imports: [NgIcon],
  viewProviders: [
    provideIcons({
      heroCheckMicro,
    }),
  ],
  template: `
    <div
      class="grid grid-cols-1 lg:grid-cols-5 max-w-300 mx-auto gap-8 py-16 justify-center items-center"
    >
      <div
        class="relative w-full flex justify-center items-center gap-4 md:col-span-2 px-4 md:px-8"
      >
        <div class="relative w-full aspect-video lg:aspect-4/5">
          <div class="rounded-2xl overflow-hidden relative z-10 aspect-video lg:aspect-4/5">
            <img
              class="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300"
              src="assets/img/wout.jpeg"
              alt="Wout"
            />
          </div>
          <div class="absolute top-2 -right-2 w-full h-full bg-primary rounded-2xl"></div>
        </div>
      </div>

      <div class="flex flex-col gap-8 md:col-span-3 px-8">
        <div class="flex flex-col gap-0.5">
          <h3 class="text-primary uppercase text-[clamp(1rem,1vw,1.5rem)]">Over Wout</h3>
          <h2 class="text-fake-white font-bold text-[clamp(2rem,2vw,3rem)]">
            Gedreven door techniek, gefocust op resultaat<span class="text-primary">.</span>
          </h2>
        </div>

        <p class="text-zinc-400">
          Ik ben meer dan alleen een 'programmeur die tickets afwerkt.' Zie mij als je technische
          partner die proactief meedenkt over de beste digitale strategie voor jouw bedrijf.
        </p>

        <div class="flex flex-col gap-5 justify-center items-start">
          <div class="flex items-start gap-4">
            <div
              class="text-fake-white p-1 flex justify-center items-center rounded-full bg-primary"
            >
              <ng-icon name="heroCheckMicro" size="1rem"> </ng-icon>
            </div>
            <p class="text-fake-white text-base leading-relaxed">
              <span class="font-bold">Het complete plaatje:</span>
              <span class="italic text-zinc-300">
                Als Full Stack developer snap ik de hele keten, van complexe database tot
                pixel-perfect interfaces</span
              >
            </p>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="text-fake-white p-1 flex justify-center items-center rounded-full bg-primary"
            >
              <ng-icon name="heroCheckMicro" size="1rem"> </ng-icon>
            </div>
            <p class="text-fake-white text-base leading-relaxed">
              <span class="font-bold">Geen ‘u vraagt, wij draaien’:</span>
              <span class="italic text-zinc-300">
                Ik durf kritische vragen te stellen om te zorgen dat we de juiste oplossing bouwen,
                niet de makkelijkste</span
              >
            </p>
          </div>

          <div class="flex items-start gap-4">
            <div
              class="text-fake-white p-1 flex justify-center items-center rounded-full bg-primary"
            >
              <ng-icon name="heroCheckMicro" size="1rem"> </ng-icon>
            </div>
            <p class="text-fake-white text-base leading-relaxed">
              <span class="font-bold">Klaar voor groei:</span>
              <span class="italic text-zinc-300">
                Ik bouw robuuste applicaties met oog voor structuur en schaalbaarheid, zodat je
                software niet vastloopt als je bedrijf groeit</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class OverWout {}
