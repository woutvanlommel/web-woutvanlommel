import { Component, inject } from '@angular/core';
import { SkillsService } from '../../shared/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  template: ` @for (skill of skills; track skill.name) {
    <div
      class="flex justify-center items-center p-4 bg-black text-fake-white font-bold text-md md:text-lg shadow-sm shadow-primary/50 rounded-lg"
    >
      <h3>{{ skill.name }}</h3>
    </div>
    }`,
  styles: `
  :host {
    display: contents;
  }`,
})
export class Skills {
  skills: any[] = [];
  private skillsService = inject(SkillsService);

  constructor() {
    this.skills = this.skillsService.skills;
  }
}
