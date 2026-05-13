import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { OverWout } from '../../components/over-wout/over-wout';
import { OverTechstack } from '../../components/over-techstack/over-techstack';
import { OverWaarom } from '../../components/over-waarom/over-waarom';

@Component({
  selector: 'app-over-mij',
  imports: [RouterLink, OverWout, OverTechstack, OverWaarom],
  template: `<div class="w-full overflow-x-hidden relative">
    <section class="h-svh flex flex-col px-6 md:px-16 lg:px-24 relative overflow-hidden">
      <div class="w-full max-w-300 mx-auto relative z-10 flex flex-col h-full">
        <div class="flex-1 flex flex-col justify-center pt-24 md:pt-28 reveal">
          <div class="border-b border-zinc-800/60 pb-4">
            <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Freelance fullstack developer</span>
          </div>
          <div class="py-5 md:py-6 border-b border-zinc-800/60">
            <h1 class="text-fake-white font-bold text-[clamp(2.5rem,6vw,6rem)] leading-none tracking-tight">
              Wout Vanlommel<span class="text-primary">.</span>
            </h1>
          </div>
        </div>
        <div class="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal">
          <p class="text-zinc-500 text-sm max-w-md leading-relaxed">
            Full Stack Developer vanuit passie voor code — van database tot pixel-perfect interface.
          </p>
          <div class="flex items-center gap-6 text-xs text-zinc-600 uppercase tracking-widest">
            <a routerLink="/portfolio" class="hover:text-zinc-300 transition-colors duration-200">Portfolio</a>
            <a routerLink="/contact" class="hover:text-zinc-300 transition-colors duration-200">Contact</a>
            <a routerLink="/diensten" class="hover:text-zinc-300 transition-colors duration-200">Diensten</a>
          </div>
        </div>
      </div>
    </section>
    <app-over-wout></app-over-wout>
    <app-over-techstack></app-over-techstack>
    <app-over-waarom></app-over-waarom>
  </div>`,
  styles: ``,
})
export class OverMij implements OnInit {
  private metaService = inject(Meta);

  ngOnInit() {
    this.metaService.updateTag({
      name: 'description',
      content:
        'Ontdek wie Wout Vanlommel is, zijn passie voor code en zijn technische expertise als freelance full stack developer.',
    });
  }
}
