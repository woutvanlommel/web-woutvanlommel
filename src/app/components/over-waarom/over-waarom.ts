import { Component, inject } from '@angular/core';
import { ExpertiseService } from '../../shared/expertise.service';

@Component({
  selector: 'app-over-waarom',
  imports: [],
  template: `
    <section class="w-full px-6 md:px-16 lg:px-24 py-16">
      <div class="w-full max-w-300 mx-auto">

        <div class="border-b border-zinc-800/60 pb-6 reveal">
          <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Waarom mij</span>
        </div>

        <div class="py-16">
          <h2 class="text-fake-white font-bold text-[clamp(2rem,3.5vw,4rem)] leading-none tracking-tight mb-12 reveal">
            Waarom voor mij kiezen<span class="text-primary">.</span>
          </h2>

          <div class="border-t border-zinc-800/60">
            @for (benefit of Benefits; track benefit.id; let i = $index) {
              <div
                [class]="
                  'flex items-start gap-6 py-7 border-b border-zinc-800/60 reveal reveal-delay-' +
                  ((i % 3) + 1) * 100
                "
              >
                <span class="text-zinc-700 text-xs font-mono shrink-0 pt-1">{{ benefit.number }}</span>
                <div class="flex flex-col gap-2">
                  <span class="text-fake-white font-semibold text-lg leading-none">{{ benefit.title }}</span>
                  <p class="text-zinc-500 text-sm leading-relaxed">{{ benefit.description }}</p>
                </div>
              </div>
            }
          </div>
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
