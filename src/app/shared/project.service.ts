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
      slug: 'website-redesign-nextgenmedia',
      subTitle: 'E-commerce Website',
      service: ['Web Development', 'UI/UX Design'],
      year: 2023,
      image: '/assets/img/projects/nextgenmedia.png',
      difficulty:
        'NextGenMedia is gegroeid, en de oude website paste niet meer bij de nieuwe, professionele identiteit van het bureau. Daarnaast was het beheer van de site complex en tijdrovend. De vraag was duidelijk: ontwikkel een visueel sterk platform dat de rebranding perfect uitdraagt, én dat door het team eenvoudig zelf te beheren is zonder technische kennis.',
      solution:
        'Ik heb gekozen voor een Custom WordPress thema dat volledig is afgestemd op de nieuwe huisstijl. In plaats van een standaard template, heb ik een flexibel beheersysteem gebouwd. Hierdoor kan het team moeiteloos nieuwe cases, afbeeldingen en teksten plaatsen, terwijl de strakke vormgeving aan de voorkant altijd gewaarborgd blijft.',
      link: 'https://www.nextgenmedia.be',
      githubLink: 'https://github.com/project-a/website-redesign',
      techStack: ['Angular', 'Tailwind CSS', 'Node.js'],
      higlight: true,
    },
    {
      id: 1,
      client: 'Project B',
      title: 'Uitbouw e-commerce drukkerij',
      slug: 'drukkerij-ecommerce-customflow',
      subTitle: 'E-commerce Website',
      service: ['Web Development', 'UI/UX Design'],
      year: 2023,
      image: '/assets/img/projects/nextgenmedia.png',
      difficulty:
        'NextGenMedia is gegroeid, en de oude website paste niet meer bij de nieuwe, professionele identiteit van het bureau. Daarnaast was het beheer van de site complex en tijdrovend. De vraag was duidelijk: ontwikkel een visueel sterk platform dat de rebranding perfect uitdraagt, én dat door het team eenvoudig zelf te beheren is zonder technische kennis.',
      solution:
        'Ik heb gekozen voor een Custom WordPress thema dat volledig is afgestemd op de nieuwe huisstijl. In plaats van een standaard template, heb ik een flexibel beheersysteem gebouwd. Hierdoor kan het team moeiteloos nieuwe cases, afbeeldingen en teksten plaatsen, terwijl de strakke vormgeving aan de voorkant altijd gewaarborgd blijft.',
      link: 'https://www.nextgenmedia.be',
      githubLink: 'https://github.com/project-a/website-redesign',
      techStack: ['Angular', 'Tailwind CSS', 'Node.js'],
      higlight: true,
    },
  ];

  getProjects() {
    return this.projects;
  }
}
