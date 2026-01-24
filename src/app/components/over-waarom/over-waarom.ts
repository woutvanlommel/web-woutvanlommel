import { Component, inject } from '@angular/core';
import { ExpertiseService } from '../../shared/expertise.service';

@Component({
  selector: 'app-over-waarom',
  imports: [],
  template: `
    <section class="w-full bg-light-black py-16">
      <div
        class="w-full max-w-300 mx-auto px-4 md:px-8 flex flex-col items-start justify-center space-y-4"
      >
        <h2 class="text-fake-white text-[clamp(2rem,2vw,2.5rem)] font-bold reveal">
          Waarom voor mij kiezen<span class="text-primary">.</span>
        </h2>
        <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          @for (benefit of Benefits; track benefit.id; let i = $index) {
            <div
              [class]="
                'p-6 bg-black/50 rounded-lg border border-zinc-700 hover:border-primary transition-colors reveal reveal-delay-' +
                ((i % 3) + 1) * 100
              "
            >
              <p class="text-fake-white text-2xl font-bold">
                {{ benefit.number }} <span class="text-primary">.</span>
              </p>
              <h3 class="text-primary text-xl font-normal uppercase">
                {{ benefit.title }}
              </h3>
              <p class="text-zinc-400 text-sm">
                {{ benefit.description }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class OverWaarom {
  private benefitsService = inject(ExpertiseService);

  Benefits = this.benefitsService.getBenefits();
}
