import { Component } from '@angular/core';
import { HomeHero } from '../../components/home-hero/home-hero';
import { Expertise } from '../../components/expertise/expertise';
import { OverHome } from '../../components/over-home/over-home';

@Component({
  selector: 'app-home',
  imports: [HomeHero, Expertise, OverHome],
  template: `
    <div class="w-full">
      <app-home-hero></app-home-hero>
      <app-expertise></app-expertise>
      <app-over-home></app-over-home>
    </div>
  `,
  styles: ``,
})
export class Home {}
