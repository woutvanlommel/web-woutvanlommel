import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      client: 'NextGenMedia',
      title: 'Agency Portfolio Platform',
      slug: 'digital-agency-rebranding-nextgenmedia',
      subTitle: 'Corporate Identity & Custom CMS',
      service: 'CMS Development',
      year: 2023,
      image: '/assets/img/projects/nextgenmedia.png',
      difficulty:
        "NextGenMedia liep tegen een workflow-probleem aan: het updaten van hun portfolio kostte te veel tijd en de visuele consistentie verwaterde bij elke update. De uitdaging was om een systeem te bouwen dat strenge 'brand guidelines' afdwingt zonder de creatieve vrijheid van het marketingteam te beperken. Het doel was een drastische reductie van de 'Time-to-Publish' voor nieuwe cases.",
      solution:
        'Ik heb een volledig Custom WordPress Theme ontwikkeld, specifiek afgestemd op hun workflow. Door gebruik te maken van Advanced Custom Fields (ACF) en flexibele content-blokken, heb ik een modulaire backend gecreëerd. Hierdoor kan het team complexe layouts bouwen die altijd voldoen aan de huisstijlregels. De frontend is geoptimaliseerd met moderne CSS-technieken voor maximale performance, ondanks de zware media-content.',
      link: 'https://www.nextgenmedia.be',
      githubLink: 'https://github.com/jouw-username/nextgen-theme',
      techStack: ['WordPress', 'PHP 8.2', 'SCSS', 'MySQL'],
      highlight: true,
    },
    {
      id: 2,
      client: 'Larolo',
      title: 'Land Rover Specialist Showcase',
      slug: 'land-rover-restauratie-verkoop-larolo',
      subTitle: 'Niche Automotive Catalogus',
      service: 'Web Development',
      year: 2023,
      image: '/assets/img/projects/larolo.png',
      difficulty:
        'Als gespecialiseerde zelfstandige verkoper van Land Rovers had Larolo een platform nodig dat meer deed dan een standaard website. De voorraad en restauratieprojecten moesten op een specifieke, luxueuze manier gepresenteerd worden. Een standaard template volstond niet voor de unieke specificaties van deze voertuigen en de noodzaak om hoogwaardige fotografie snel te laden voor mobiele gebruikers.',
      solution:
        "Er is gekozen voor een WordPress installatie met zware modificaties. Ik heb 'Custom Post Types' ontwikkeld voor voertuigen en projecten, waardoor de data gestructureerd wordt opgeslagen (handig voor toekomstige API-koppelingen). De site focust sterk op technische SEO voor de niche-markt van Land Rovers, en maakt gebruik van caching-strategieën om de zware afbeeldingen razendsnel te serveren aan potentiële kopers.",
      link: 'https://www.larolo.be',
      githubLink: 'https://github.com/jouw-username/larolo-custom',
      techStack: ['WordPress', 'Custom Post Types', 'JavaScript', 'SEO'],
      highlight: false,
    },
    {
      id: 3,
      client: 'JRK Herckenrode',
      title: 'Jeugdbeweging Community Hub',
      slug: 'jrk-herckenrode-jeugdbeweging-platform',
      subTitle: 'Non-profit Ledenbeheer',
      service: 'Web Design & Accessibility',
      year: 2023,
      image: '/assets/img/projects/jrkherckenrode.png',
      difficulty:
        "De vorige website was een 'black box' die enkel door een developer kon worden aangepast. Dit is onhoudbaar voor een vrijwilligersorganisatie waar bestuursleden roteren. De eis was duidelijk: volledige autonomie voor de leiding. Ze moesten zelfstandig kalenders, kampinformatie en inschrijvingen kunnen beheren zonder enige technische kennis, en dit op een budgetvriendelijke manier.",
      solution:
        "Ik heb een gebruiksvriendelijke WordPress omgeving ingericht waarbij de standaard admin-interface is vereenvoudigd ('de-cluttered') voor niet-technische gebruikers. Kritieke functies zijn afgeschermd om te voorkomen dat de site per ongeluk breekt. Het resultaat is een duurzaam platform dat door de leiding zelf wordt onderhouden, wat de organisatie onafhankelijk maakt van externe developers voor dagelijkse taken.",
      link: 'https://www.jrkherckenrode.be',
      githubLink: 'https://github.com/jouw-username/jrk-theme',
      techStack: ['WordPress', 'PHP', 'Bootstrap', 'WCAG'],
      highlight: false,
    },
  ];

  getProjects() {
    return this.projects; // Return all projects for now
  }

  getHighlightedProject() {
    return this.projects.find((project) => project.highlight);
  }

  getUniqueServices() {
    const services = this.projects.map((project) => project.service);
    return [...new Set(services)];
  }
}
