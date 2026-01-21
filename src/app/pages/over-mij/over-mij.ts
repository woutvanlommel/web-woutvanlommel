import { Component } from '@angular/core';
import { OverWout } from '../../components/over-wout/over-wout';
import { OverTechstack } from '../../components/over-techstack/over-techstack';
import { OverWaarom } from '../../components/over-waarom/over-waarom';

@Component({
  selector: 'app-over-mij',
  imports: [OverWout, OverTechstack, OverWaarom],
  template: `<div class="w-full bg-light-black pt-48 overflow-x-hidden relative">
    <div
      class="absolute -top-64 -right-64 w-125 h-125 md:w-175 md:h-175 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-2"
    ></div>
    <div class="w-full max-w-300 space-y-8 mx-auto z-10 relative px-4 md:px-8">
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
export class OverMij {}
