import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  imports: [RouterLink],
  template: `
    <section
      class="
    min-h-screen h-fit w-full 
    bg-black 
    flex justify-center items-center 
    pt-32 lg:pt-40 pb-32 px-4 md:px-8 
    relative overflow-hidden
  "
    >
      <div
        class="absolute -top-64 -right-64 w-125 h-125 md:w-175 md:h-175 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"
      ></div>

      <div
        class="w-full max-w-300 mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10"
      >
        <div class="w-full lg:w-7/12 flex flex-col gap-8 items-start reveal">
          <div class="flex flex-col gap-2 items-start">
            <span class="uppercase text-primary text-sm font-bold tracking-wider">
              Freelance fullstack developer
            </span>
            <h1 class="text-fake-white font-extrabold text-[clamp(2.5rem,3vw,4rem)] leading-tight">
              Maatwerk webapplicaties die jouw bedrijf <span class="text-primary">versterken.</span>
            </h1>
          </div>

          <p
            class="text-fake-white text-lg md:text-xl max-w-xl leading-relaxed [&>span]:text-primary [&>span]:font-medium reveal reveal-delay-200"
          >
            Geen standaard templates, maar duurzame code. Gespecialiseerd in
            <span>schaalbare webapplicaties</span>, complexe <span>API-koppelingen</span> en
            maatwerk <span>WordPress development</span>. Met
            <span>Laravel en Angular/React</span> leg ik het fundament voor jouw online succes.
          </p>

          <div class="flex flex-wrap gap-4 mt-4 reveal reveal-delay-300">
            <a
              routerLink="/contact"
              class="bg-primary cursor-pointer hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Start een project
            </a>
            <a
              routerLink="/portfolio"
              class="border-2 cursor-pointer border-primary text-primary hover:bg-primary/10 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Portfolio
            </a>
          </div>
        </div>
      </div>
      <div
        class="hidden absolute lg:flex position right-[1vw] xl:right-[8vw] w-[50vw] xl:w-[40vw] h-auto z-10 reveal reveal-delay-400"
      >
        <img
          src="assets/img/laptop-hero.png"
          alt="Hero laptop showing project"
          class="w-full drop-shadow-2xl"
        />
      </div>
    </section>
  `,
  styles: ``,
})
export class HomeHero {}
