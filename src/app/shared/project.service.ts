import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      client: 'Project A',
      title: 'Website Redesign',
      subTitle: 'E-commerce Website',
      service: ['Web Development', 'UI/UX Design'],
      year: 2023,
      image: '/assets/img/projects/nextgenmedia.png',
      difficulty: 'text.....',
      solution: 'Redesigned the entire website to improve user experience and increase sales.',
      link: 'https://www.project-a.com',
      githubLink: 'https://github.com/project-a/website-redesign',
      techStack: ['Angular', 'Tailwind CSS', 'Node.js'],
      higlight: true,
    },
  ];

  getProjects() {
    return this.projects;
  }
}
