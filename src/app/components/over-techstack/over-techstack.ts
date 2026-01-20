import { Component, inject } from '@angular/core';
import { SkillsService } from '../../shared/skills.service';

@Component({
  selector: 'app-over-techstack',
  imports: [],
  template: `
    <div class="w-full bg-black py-16">
      <div class="w-full max-w-300 mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16">
        <div class="w-full lg:w-3/5 space-y-4">
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
                    @for (skill of category.skills; track skill.name) {
                      <div
                        class="flex justify-center items-center p-2 bg-light-black/20 text-fake-white font-bold text-md shadow-sm shadow-primary/50 rounded-lg hover:bg-light-black/40 transition-colors"
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
          class="w-full lg:w-2/5 p-8 rounded-lg flex flex-col items-center justify-center bg-light-black/20 shadow-[0px_0px_12px] shadow-fake-white"
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
