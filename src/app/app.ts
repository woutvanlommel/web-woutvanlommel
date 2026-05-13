import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { AnimationService } from './shared/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigation, Footer],
  template: ` <!-- Background: dot grid + radial glow -->
    <div class="fixed inset-0 -z-10 bg-black pointer-events-none overflow-hidden">
      <!-- Dot grid -->
      <div
        class="absolute inset-0 opacity-[0.04]"
        style="filter: blur(8px);"
        style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff'/%3E%3C/svg%3E&quot;); background-size: 24px 24px;"
      ></div>
      <!-- Orange radial glow top-center -->
      <div
        class="absolute inset-0"
        style="background: radial-gradient(ellipse 80% 55% at 50% 0%, rgba(249,115,22,0.13) 0%, transparent 70%);"
      ></div>
    </div>

    <header class="w-full h-fit fixed top-0 z-999">
      <app-navigation></app-navigation>
    </header>
    <main class="w-full h-fit">
      <router-outlet></router-outlet>
    </main>
    <footer class="w-full h-fit">
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
