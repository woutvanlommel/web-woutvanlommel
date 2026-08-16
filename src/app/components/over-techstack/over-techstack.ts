import { Component, inject } from '@angular/core';
import { SkillsService } from '../../shared/skills.service';

@Component({
  selector: 'app-over-techstack',
  imports: [],
  template: `
    <section class="w-full px-6 md:px-16 lg:px-24 py-16">
      <div class="w-full max-w-300 mx-auto">
        <div class="border-b border-zinc-800/60 pb-6 reveal">
          <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600"
            >Tech stack</span
          >
        </div>

        <div class="flex flex-col lg:flex-row gap-16 py-16 border-b border-zinc-800/60">
          <div class="w-full lg:w-3/5 space-y-8 reveal">
            <div>
              <h2
                class="text-fake-white font-bold text-[clamp(2rem,3.5vw,4rem)] leading-none tracking-tight"
              >
                De tools die ik gebruik<span class="text-primary">.</span>
              </h2>
              <p class="text-zinc-500 leading-relaxed mt-4">
                De tools die ik gebruik om ideeën om te zetten in software
              </p>
            </div>

            <div class="space-y-8">
              @for (category of skillCategories; track category.title) {
                @if (category.skills.length > 0) {
                  <div class="space-y-4">
                    <div class="border-b border-zinc-800/60 pb-3">
                      <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">{{
                        category.title
                      }}</span>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                      @for (skill of category.skills; track skill.name; let i = $index) {
                        <div
                          [class]="
                            'flex justify-center items-center p-2 bg-zinc-900/50 text-fake-white font-semibold text-sm ring-1 ring-zinc-800 rounded-lg hover:ring-zinc-600 hover:bg-zinc-900 transition-colors reveal reveal-delay-' +
                            ((i % 4) + 1) * 100
                          "
                        >
                          {{ skill.name }}
                        </div>
                      }
                    </div>
                  </div>
                }
              }
            </div>
          </div>

          <div
            class="w-full lg:w-2/5 p-8 rounded-lg flex flex-col items-start justify-center bg-zinc-900/50 ring-1 ring-zinc-800 reveal reveal-delay-300"
          >
            <div class="text-left text-sm md:text-base text-fake-white space-y-4 font-mono">
              <p><span class="text-primary">let</span> Wout = {{ '{' }}</p>
              <div class="pl-6 space-y-2">
                @for (info of infoWout; track info.key) {
                  <p>
                    <span class="text-zinc-500">{{ info.key }}:</span>
                    <span class="text-primary"> {{ info.value }}</span>
                    <span class="text-zinc-600">,</span>
                  </p>
                }
              </div>
              <p>{{ '}' }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class OverTechstack {
  private skillsService = inject(SkillsService);

  skillCategories = [
    { title: 'Frontend', skills: this.skillsService.getFrontendSkills() },
    { title: 'Backend', skills: this.skillsService.getBackendSkills() },
    { title: 'Tools', skills: this.skillsService.getToolSkills() },
  ];

  infoWout = [
    { key: 'mindset', value: '"Focus & Discipline"' },
    { key: 'codingStyle', value: '"Clean & Scalable"' },
    { key: 'sociaal', value: 'true' },
    { key: 'coffee', value: '"Black"' },
    { key: 'role', value: '"FullStack Developer"' },
    { key: 'currentFocus', value: '"Automation-first development"' },
    { key: 'deploysOnFriday', value: 'false' },
    { key: 'sleepSchedule', value: 'null' },
    { key: 'location', value: '"Hasselt, België"' },
  ];
}
