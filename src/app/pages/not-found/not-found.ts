import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="w-full h-screen bg-light-black relative flex items-center justify-center px-4">
      <div
        class="absolute -top-64 -right-64 w-125 h-125 md:w-175 md:h-175 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-2"
      ></div>
      <div class="flex flex-col justify-center items-center gap-8">
        <div class="flex flex-col justify-center items-center gap-2">
          <h2 class="text-zinc-600 text-xl font-semibold">Deze pagina bestaan niet</h2>
          <h1 class="text-5xl font-bold text-fake-white">404<span class="text-primary">.</span></h1>
          <p class="text-primary uppercase text-md">Bug in the matrix?</p>
        </div>
        <a
          routerLink="/"
          class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-fake-white font-bold rounded-md hover:bg-primary-600 transition-all group"
        >
          <span class=" text-black group-hover:-translate-x-1 transition-transform">←</span>
          Terug naar home
        </a>
      </div>
    </section>
  `,
  styles: ``,
})
export class NotFound {}
