import { Component, inject } from '@angular/core';
import { ExpertiseService } from '../../shared/expertise.service';

@Component({
  selector: 'app-diensten',
  imports: [],
  template: ` <div class="w-full bg-light-black pt-48 overflow-x-hidden relative">
    <div
      class="absolute -top-64 -right-64 w-125 h-125 md:w-175 md:h-175 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-2"
    ></div>
    <div class="w-full max-w-300 space-y-8 mx-auto z-10 relative">
      <div class="text-center space-y-1">
        <h1 class="text-fake-white font-bold text-[clamp(3rem,4vw,4rem)]">
          Mijn Expertise<span class="text-primary">.</span>
        </h1>
        <h2 class="text-zinc-500 text-[clamp(2rem,2vw,2.5rem)]">
          Van complexe backend tot pixel-perfecte frontend. Alles onder één dak.
        </h2>
      </div>
    </div>
    @if (expertises.length > 0) {
      @for (expertise of expertises; track expertise.id; let isOdd = $odd) {
        <div class="w-full py-16 z-10 px-4" [class.bg-black]="isOdd">
          <div
            class="w-full max-w-300 mx-auto flex flex-col md:flex-row gap-8 justify-center items-center px-4 md:px-8"
            [class.md:flex-row-reverse]="isOdd"
          >
            <div
              class="w-full md:w-1/2 flex flex-col gap-4 items-start justify-center text-fake-white"
            >
              <h2 class="font-semibold text-[clamp(2rem,2vw,3rem)]">
                {{ expertise.title }}
              </h2>
              <p class="text-zinc-400">{{ expertise.description }}</p>
              <a
                class="text-fake-white font-bold group inline-flex items-center gap-2 mt-2 cursor-pointer"
              >
                {{ expertise.button }}
                <span class="text-primary group-hover:translate-x-1 transition-transform pt-0.5"
                  >→</span
                >
              </a>
            </div>
            <div class="w-full md:w-1/2">
              <img [src]="expertise.image" [alt]="expertise.title" class="w-full" />
            </div>
          </div>
        </div>
      }
    }
    <div class="w-full bg-light-black">
      <div class="w-full max-w-300 mx-auto px-4 md:px-8 py-24 space-y-8">
        <h2 class="font-semibold text-[clamp(2rem,2vw,3rem)] text-fake-white">
          Hoe we samenwerken<span class="text-primary">.</span>
        </h2>
        @if (workFlows.length > 0) {
          <div
            class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 rounded-lg overflow-hidden text-fake-white"
          >
            @for (workflow of workFlows; track workflow.id) {
              <div class="bg-black/50 p-6 space-y-4">
                <p class="text-3xl font-bold">
                  {{ workflow.number }}<span class="text-primary">.</span>
                </p>
                <h3 class="text-primary text-md uppercase">
                  {{ workflow.title }}
                </h3>
                <p class="text-zinc-400">{{ workflow.description }}</p>
              </div>
            }
          </div>
        }
      </div>
    </div>
  </div>`,
  styles: ``,
})
export class Diensten {
  private expertiseService = inject(ExpertiseService);
  expertises = this.expertiseService.getExpertises();

  private workFlowsService = inject(ExpertiseService);
  workFlows = this.workFlowsService.getWorkFlows();

  // isEven = (num: number) => num % 2 === 0;
  // isOdd = (num: number) => num % 2 !== 0;
}
