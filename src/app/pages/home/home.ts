import { Component } from '@angular/core';
import { HomeHero } from '../../components/home-hero/home-hero';
import { Expertise } from '../../components/expertise/expertise';

@Component({
  selector: 'app-home',
  imports: [HomeHero, Expertise],
  template: `
    <div class="w-full">
      <app-home-hero></app-home-hero>
      <app-expertise></app-expertise>
    </div>
  `,
  styles: ``,
})
export class Home {}
