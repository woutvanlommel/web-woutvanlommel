import { Component, inject } from '@angular/core';
import { SkillsService } from '../../shared/skills.service';

@Component({
  selector: 'app-over-techstack',
  imports: [],
  template: `
    <div class="w-full bg-black py-16">
      <div class="w-full max-w-300 mx-auto px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-16">
        <div class="w-full lg:w-3/5 space-y-4 reveal">
          <h2 class="text-fake-white text-[clamp(2rem,2vw,2.5rem)] font-bold">
            De Tech Stack<span class="text-primary">.</span>
          </h2>
          <p class="text-zinc-400 text-sm">
            De tools die ik gebruik om ideëen om te zetten in software
          </p>

          <div class="space-y-4">
            @for (category of skillCategories; track category.title) {
              @if (category.skills.length > 0) {
                <div class="space-y-4">
                  <h3 class="text-primary text-md uppercase font-semibold">
                    {{ category.title }}
                  </h3>
                  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
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
          class="w-full lg:w-2/5 p-8 rounded-lg flex flex-col items-center justify-center bg-zinc-900/50 ring-1 ring-zinc-800 reveal reveal-delay-300"
        >
          <div class="text-left text-md md:text-xl text-fake-white space-y-4">
            <p><span class="text-primary">let</span> Wout = {{ '{' }}</p>
            <div class="pl-8 space-y-2">
              @for (info of infoWout; track info.key) {
                <p class="text-md text-primary">
                  <span class="text-zinc-600">{{ info.key }}:</span> {{ info.value }}
                  <span class="text-zinc-600">,</span>
                </p>
              }
            </div>
            <p>{{ '}' }}</p>
          </div>
        </div>
      </div>
    </div>
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
    { key: 'currentFocus', value: 'Becoming a FullStack Developer' },
  ];
}
