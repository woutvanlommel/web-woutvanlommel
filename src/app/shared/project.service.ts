import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      client: 'JRK Herckenrode',
      title: 'Jeugdbeweging Community Hub',
      slug: 'jrk-herckenrode-jeugdbeweging-platform',
      subTitle: 'Custom CMS & Digitale Continuïteit',
      service: ['CMS Development'],
      year: 2026,
      image: '/assets/img/projects/jrkherckenrode.png',
      difficulty:
        "De website van de jeugdbeweging was een 'black box': alle technische kennis lag bij één persoon. Bij het vertrek van deze leiding dreigde de online aanwezigheid stil te vallen, omdat de rest van de leiding afhankelijk was van externe hulp voor elke kleine aanpassing. Er was dringend behoefte aan een platform dat onafhankelijk van technische voorkennis beheerd kon worden.",
      solution:
        "Ik heb een custom WordPress theme ontwikkeld waarbij de backend volledig is afgestemd op een wisselende leidingsploeg. Door complexe functies te abstraheren naar eenvoudige invoervelden, kan de leiding nu zelfstandig de kalender, kampinformatie en inschrijvingen beheren. Deze 'fool-proof' inrichting zorgt voor een soepele flow in de communicatie en maakt de organisatie toekomstbestendig.",
      link: 'https://www.jrkherckenrode.be',
      githubLink: 'https://github.com/jouw-username/jrk-theme',
      techStack: ['PHP', 'Javascript', 'CSS3', 'WordPress'],
      highlight: false,
      production: true,
    },
    {
      id: 2,
      client: 'NextGenMedia',
      title: 'High-Performance Showcase Platform',
      slug: 'digital-agency-rebranding-nextgenmedia',
      subTitle: 'Brand-Consistent Custom CMS',
      service: ['CMS Development'],
      year: 2026,
      image: '/assets/img/projects/nextgenmedia.png',
      difficulty:
        "NextGenMedia kampte met een verouderde webstructuur die de groei van hun portfolio belemmerde. Door een omslachtig beheerproces en het ontbreken van visuele kaders week de content steeds vaker af van de merkidentiteit. Dit leidde tot een 'content-stilstand': de website werd niet meer bijgewerkt vanwege de hoge tijdsdruk en technische drempels.",
      solution:
        "Ik heb een volledig custom WordPress-ecosysteem ontwikkeld waarbij gebruiksvriendelijkheid centraal staat. Door de inzet van een modulair 'Field-First' systeem (ACF) kan het team nu complexe pagina's publiceren via eenvoudige invoervelden. De huisstijl is hardcoded in de architectuur, waardoor visuele consistentie gegarandeerd is, ongeacht wie de content plaatst. Het resultaat? Een drastische verkorting van de publicatietijd en een website die weer trots wordt gedeeld.",
      githubLink: 'https://github.com/jouw-username/nextgen-theme',
      techStack: ['PHP', 'Javascript', 'CSS3', 'WordPress'],
      highlight: false,
      production: true,
      status: 'legacy',
    },
    {
      id: 3,
      client: 'LaRoLo',
      title: 'Land Rover Specialist Showcase',
      slug: 'land-rover-restauratie-verkoop-larolo',
      subTitle: 'Custom Theme Architecture & Lead Gen',
      service: ['CMS Development'],
      year: 2026,
      image: '/assets/img/projects/larolo.png',
      difficulty:
        'Na meer dan 25 jaar ervaring in de sector startte Larolo als zelfstandig specialist die de verkoop van Land Rovers van A tot Z faciliteert. Voor een ondernemer die staat voor totale ontzorging van zijn klanten, was een website die hemzelf kopzorgen gaf geen optie. Er was behoefte aan een professioneel platform dat zijn autoriteit bevestigt, zonder dat het beheer ten koste zou gaan van de persoonlijke service die hij zijn cliënten biedt.',
      solution:
        'Ik heb een custom WordPress theme ontwikkeld dat net zo efficiënt werkt als de service van Larolo zelf. Door de backend volledig te optimaliseren voor tekst- en foto-invoer, kan hij nieuwe voertuigen razendsnel online plaatsen. Het systeem dwingt een luxe, consistente presentatie af, waardoor de website altijd het niveau van zijn 25-jarige expertise weerspiegelt. Hierdoor kan hij zich focussen op het sluiten van de deal, terwijl de techniek de online marketing faciliteert.',
      link: 'https://www.larolo.be',
      githubLink: 'https://github.com/jouw-username/larolo-custom',
      techStack: ['PHP', 'Javascript', 'CSS3', 'WordPress'],
      highlight: false,
      production: true,
      status: 'active',
    },
    {
      id: 4,
      client: 'Iduna Kermt',
      title: 'Iduna Kermt Beheerplatform',
      slug: 'iduna-kermt-filament-dashboard',
      subTitle: 'Filament Dashboard & Website Onderhoud',
      service: ['Dashboard Development', 'Onderhoud'],
      year: 2026,
      image: '/assets/img/projects/idunakermt.png',
      difficulty:
        'De zaakvoerster wilde openingsuren en het behandelingsaanbod zelfstandig kunnen aanpassen zonder telkens een developer te contacteren. Elke kleine wijziging — een nieuwe behandeling, aangepaste uren — vereiste technische tussenkomst.',
      solution:
        'Gebouwd op Laravel + Filament: een op maat beheerpaneel waarmee openingsuren en behandelingen direct en intuïtief aangepast kunnen worden. Gecombineerd met doorlopend technisch onderhoud voor een stabiele website.',
      link: 'https://www.idunakermt.be',
      techStack: ['Laravel', 'Filament', 'PHP', 'Tailwind CSS', 'MySQL'],
      highlight: true,
      production: true,
      status: 'active',
    },
    {
      id: 5,
      client: 'Customflow',
      title: 'Textiel Order Management Platform',
      slug: 'customflow-textiel-order-management',
      subTitle: 'Excel Upload & Productie Parser',
      service: ['Dashboard Development', 'E-commerce'],
      year: 2026,
      image: '',
      difficulty:
        'Textielbedrijven ontvangen grote ordervolumes in wisselende Excel-formaten met namen, maten en hoeveelheden. Het handmatig omzetten naar een productieklare structuur was tijdrovend en foutgevoelig.',
      solution:
        'Een webapplicatie waarmee medewerkers Excel-bestanden uploaden die automatisch worden geparsed en omgezet naar een gestandaardiseerde, productieklare structuur. Dit elimineert manuele verwerking en minimaliseert fouten in het productieproces.',
      techStack: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL'],
      highlight: false,
      production: true,
      status: 'ongoing',
    },
  ];

  getProjects() {
    return this.projects.filter((project) => project.production === true).reverse();
  }

  getHighlightedProject() {
    return this.projects.find((project) => project.highlight);
  }

  getLegacyProjects() {
    return this.projects.filter((project) => project.status === 'legacy');
  }

  getUniqueServices(): string[] {
    // service is nu string[] dus we flattten eerst voor unieke waarden
    const all = this.projects.flatMap((project) => project.service);
    return [...new Set(all)];
  }
}
