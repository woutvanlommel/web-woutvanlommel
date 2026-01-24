import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { AnimationService } from './shared/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigation, Footer],
  template: ` <header class="w-full h-fit fixed top-0 z-999">
      <app-navigation></app-navigation>
    </header>
    <main class="w-full h-fit">
      <router-outlet></router-outlet>
    </main>
    <footer class="w-full h-fit shadow-[0_-8px_12px_-4px_rgba(0,0,0,0.1)]">
      <app-footer></app-footer>
    </footer>`,
})
export class App implements OnInit {
  protected readonly title = signal('Wout Vanlommel - Freelance Full Stack Developer');
  private animationService = inject(AnimationService);

  ngOnInit() {
    this.animationService.initScrollObserver();
  }
}
