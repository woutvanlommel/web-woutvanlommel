import { Component, inject } from '@angular/core';
import { SkillsService } from '../../shared/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  template: `
    @for (skill of skills; track skill.name) {
      <div
        class="flex justify-center items-center px-4 h-14 border-b border-r border-zinc-800/40 text-zinc-500 hover:text-fake-white text-sm font-medium transition-colors duration-200 cursor-default text-center"
      >
        <h3>{{ skill.name }}</h3>
      </div>
    }
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class Skills {
  skills: any[] = [];
  private skillsService = inject(SkillsService);

  constructor() {
    this.skills = this.skillsService.skills;
  }
}
