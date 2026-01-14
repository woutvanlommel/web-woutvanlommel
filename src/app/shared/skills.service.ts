import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  skills = [
    { name: 'HTML5', type: 'Frontend' },
    { name: 'CSS3', type: 'Frontend' },
    { name: 'Tailwind CSS', type: 'Frontend' },
    { name: 'TypeScript', type: 'Frontend' },
    { name: 'JavaScript', type: 'Frontend' },
    { name: 'Angular', type: 'Frontend' },
    { name: 'React', type: 'Frontend' },
    { name: 'Vite', type: 'Frontend' },
    { name: 'Node.js', type: 'Backend' },
    { name: 'Laravel', type: 'Backend' },
    { name: 'PHP', type: 'Backend' },
    { name: 'API Development', type: 'Backend' },
    { name: 'MySQL', type: 'Backend' },
    { name: 'Git', type: 'Tools' },
    { name: 'WordPress', type: 'Tools' },
    { name: 'Figma', type: 'Tools' },
  ];
}
