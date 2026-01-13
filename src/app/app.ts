import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './components/navigation/navigation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navigation],
  template: ` <div class="w-full h-fit fixed top-0 z-999">
      <app-navigation></app-navigation>
    </div>
    <main class="w-full h-fit">
      <router-outlet></router-outlet>
    </main>`,
})
export class App {
  protected readonly title = signal('portfolio-frontend');
}
