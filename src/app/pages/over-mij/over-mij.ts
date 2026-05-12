import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { OverWout } from '../../components/over-wout/over-wout';
import { OverTechstack } from '../../components/over-techstack/over-techstack';
import { OverWaarom } from '../../components/over-waarom/over-waarom';

@Component({
  selector: 'app-over-mij',
  imports: [OverWout, OverTechstack, OverWaarom],
  template: `<div class="w-full pt-48 overflow-x-hidden relative">
    <div class="w-full max-w-300 space-y-8 mx-auto z-10 relative px-6 md:px-16 lg:px-24 reveal">
      <div class="text-center space-y-1">
        <h1 class="text-fake-white font-bold text-[clamp(3rem,4vw,4rem)]">
          Wout Vanlommel<span class="text-primary">.</span>
        </h1>
        <h2 class="text-zinc-500 text-[clamp(2rem,2vw,2.5rem)]">
          Heb je een project in gedachten of wil je gewoon even sparren? Ik hoor graag van je.
        </h2>
      </div>
    </div>
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
