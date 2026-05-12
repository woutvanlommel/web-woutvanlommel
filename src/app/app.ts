import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { AnimationService } from './shared/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigation, Footer],
  template: ` <!-- OPTION 1: Aurora — active -->
    <!-- <div class="fixed inset-0 -z-10 pointer-events-none"
      style="background: linear-gradient(135deg, #18181b 0%, #2d1200 30%, #18181b 55%, #1a0800 80%, #18181b 100%); background-size: 400% 400%; animation: aurora-shift 12s ease infinite;">
    </div> -->

    <!-- OPTION 2: Noise/grain — swap with option 1 to test -->
    <div class="fixed inset-0 -z-10 bg-black pointer-events-none overflow-hidden">
      <div
        class="absolute -inset-1/2 w-[200%] h-[200%] opacity-[0.04]"
        style="background-image: url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E&quot;); background-size: 256px 256px; animation: noise-drift 4s steps(1) infinite;"
      ></div>
    </div>

    <!-- OPTION 3: Mesh gradient — swap with option 1 to test -->
    <!-- <div class="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none">
      <div
        class="absolute top-[-30%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[120px]"
        style="animation: mesh-pulse 8s ease-in-out infinite;"
      ></div>
      <div
        class="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-400/8 blur-[100px]"
        style="animation: mesh-pulse 11s ease-in-out infinite reverse;"
      ></div>
      <div
        class="absolute top-[40%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-primary/6 blur-[80px]"
        style="animation: mesh-pulse 14s ease-in-out infinite;"
      ></div>
    </div> -->

    <!-- OPTION 4: Flowing wave lines — active (combined with noise) -->
    <div class="fixed inset-0 -z-10 bg-black overflow-hidden pointer-events-none" style="filter: blur(2px);">
      <div
        class="absolute bottom-0 left-0 w-[200%] h-[40vh]"
        style="animation: wave-scroll 18s linear infinite"
      >
        <svg
          viewBox="0 0 2880 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          class="w-full h-full"
        >
          <path
            d="M0,100 C180,140 360,60 540,100 C720,140 900,60 1080,100 C1260,140 1440,60 1620,100 C1800,140 1980,60 2160,100 C2340,140 2520,60 2880,100 L2880,200 L0,200 Z"
            fill="none"
            stroke="#f97316"
            stroke-opacity="0.18"
            stroke-width="2"
          />
          <path
            d="M0,120 C240,160 480,80 720,120 C960,160 1200,80 1440,120 C1680,160 1920,80 2160,120 C2400,160 2640,80 2880,120 L2880,200 L0,200 Z"
            fill="none"
            stroke="#f97316"
            stroke-opacity="0.08"
            stroke-width="1.5"
          />
        </svg>
      </div>
      <div
        class="absolute bottom-0 left-0 w-[200%] h-[30vh]"
        style="animation: wave-scroll 26s linear infinite reverse"
      >
        <svg
          viewBox="0 0 2880 200"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          class="w-full h-full"
        >
          <path
            d="M0,80 C360,140 720,20 1080,80 C1440,140 1800,20 2160,80 C2520,140 2700,40 2880,80 L2880,200 L0,200 Z"
            fill="none"
            stroke="#f97316"
            stroke-opacity="0.12"
            stroke-width="1.5"
          />
        </svg>
      </div>
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
