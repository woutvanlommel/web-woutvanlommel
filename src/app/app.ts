import { Component, signal, inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { AnimationService } from './shared/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigation, Footer],
  template: `
    @if (showSplash()) {
      <div class="splash-overlay" (animationend)="onSplashEnd($event)">
        <div
          class="absolute inset-0"
          style="background: radial-gradient(ellipse 80% 55% at 50% 0%, rgba(249,115,22,0.12) 0%, transparent 70%);"
        ></div>
        <div class="scan-line"></div>
        <div class="relative z-10 flex flex-col items-center gap-4">
          <div class="flex gap-[0.08em]">
            @for (letter of splashLine1; track $index) {
              <span class="letter letter-primary" [style.animation-delay]="letter.delay + 's'">{{
                letter.char
              }}</span>
            }
          </div>
          <div class="flex gap-[0.15em]">
            @for (letter of splashLine2; track $index) {
              <span class="letter letter-secondary" [style.animation-delay]="letter.delay + 's'">{{
                letter.char
              }}</span>
            }
          </div>
        </div>
      </div>
    }

    <!-- Background: dot grid + radial glow -->
    <div class="fixed inset-0 -z-10 bg-black pointer-events-none overflow-hidden">
      <div
        class="absolute inset-0 opacity-[0.04]"
        style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23ffffff'/%3E%3C/svg%3E&quot;); background-size: 24px 24px;"
      ></div>
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
    </footer>
  `,
  styles: `
    .splash-overlay {
      position: fixed;
      inset: 0;
      z-index: 10000;
      background: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      animation: splashSlideUp 0.9s cubic-bezier(0.76, 0, 0.24, 1) 1.5s forwards;
    }

    .scan-line {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(249, 115, 22, 0.5) 25%,
        #f97316 50%,
        rgba(249, 115, 22, 0.5) 75%,
        transparent 100%
      );
      box-shadow:
        0 0 10px 3px rgba(249, 115, 22, 0.5),
        0 0 40px 8px rgba(249, 115, 22, 0.15);
      animation: scanDown 1.4s linear forwards;
    }

    .scan-line::after {
      content: '';
      position: absolute;
      top: 1px;
      left: 0;
      right: 0;
      height: 80px;
      background: linear-gradient(to bottom, rgba(249, 115, 22, 0.07), transparent);
      pointer-events: none;
    }

    .letter {
      display: inline-block;
      opacity: 0;
      animation: letterReveal 0.45s ease-out forwards;
    }

    .letter-primary {
      font-size: clamp(3rem, 10vw, 8rem);
      font-weight: 700;
      letter-spacing: 0.08em;
      color: #fff;
    }

    .letter-secondary {
      font-size: clamp(1rem, 3.2vw, 2.8rem);
      font-weight: 300;
      letter-spacing: 0.35em;
      color: #71717a;
    }

    @keyframes scanDown {
      from {
        top: -2px;
      }
      to {
        top: 100%;
      }
    }

    @keyframes letterReveal {
      0% {
        opacity: 0;
        transform: translateY(5px);
        filter: brightness(4);
        text-shadow:
          0 0 24px rgba(249, 115, 22, 0.9),
          0 0 8px rgba(255, 255, 255, 0.6);
      }
      35% {
        opacity: 1;
        filter: brightness(1.6);
        text-shadow: 0 0 12px rgba(249, 115, 22, 0.4);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
        filter: brightness(1);
        text-shadow: none;
      }
    }

    @keyframes splashSlideUp {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-100%);
      }
    }
  `,
})
export class App implements OnInit {
  protected readonly title = signal('Wout Vanlommel - Freelance Full Stack Developer');
  showSplash = signal(false);

  private readonly document = inject(DOCUMENT);
  private readonly sessionStorage = this.document.defaultView?.sessionStorage;
  private animationService = inject(AnimationService);

  // Scan line is linear over 1.4s. Text is centered (~50%), WOUT slightly above (~44%), VANLOMMEL below (~56%).
  // Line reaches WOUT at ~0.62s, VANLOMMEL at ~0.78s. Letters stagger left→right as the line passes.
  splashLine1 = 'WOUT'.split('').map((char, i) => ({ char, delay: 0.62 + i * 0.05 }));
  splashLine2 = 'VANLOMMEL'.split('').map((char, i) => ({ char, delay: 0.78 + i * 0.045 }));

  constructor() {
    if (!this.sessionStorage?.getItem('splashShown')) {
      this.showSplash.set(true);
      this.sessionStorage?.setItem('splashShown', '1');
    }
  }

  ngOnInit() {
    this.animationService.initScrollObserver();
  }

  onSplashEnd(event: AnimationEvent) {
    if (event.animationName === 'splashSlideUp') {
      this.showSplash.set(false);
    }
  }
}
