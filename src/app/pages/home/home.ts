import { Component } from '@angular/core';
import { HomeHero } from '../../components/home-hero/home-hero';

@Component({
  selector: 'app-home',
  imports: [HomeHero],
  template: `
    <div class="w-full">
      <app-home-hero></app-home-hero>
    </div>
  `,
  styles: ``,
})
export class Home {}
