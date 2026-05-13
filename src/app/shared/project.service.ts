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
      content: {
        context:
          "De website van de jeugdbeweging was een 'black box': alle technische kennis lag bij één persoon. Bij het vertrek van deze leiding dreigde de online aanwezigheid stil te vallen — de rest van de ploeg was afhankelijk van externe hulp voor elke kleine aanpassing.",
        approach:
          'Een custom WordPress theme waarbij de backend volledig is afgestemd op een wisselende leidingsploeg. Complexe functies zijn geabstraheerd naar eenvoudige invoervelden, zodat de leiding nu zelfstandig de kalender, kampinformatie en inschrijvingen beheert.',
        result:
          'De organisatie is technisch zelfstandig: nieuwe leiding kan de website overnemen zonder enige ontwikkelaarshulp.',
      },
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
      content: {
        context:
          "NextGenMedia had een verouderde webstructuur die de groei van hun portfolio belemmerde. Een omslachtig beheerproces en het ontbreken van visuele kaders zorgden voor een 'content-stilstand': de website werd nauwelijks nog bijgewerkt.",
        approach:
          "Een volledig custom WordPress-ecosysteem met een modulair Field-First systeem via ACF. Het team publiceert complexe pagina's via eenvoudige invoervelden, terwijl de huisstijl hardcoded in de architectuur zit — visuele consistentie gegarandeerd, ongeacht wie content plaatst.",
        result:
          'De publicatietijd werd drastisch ingekort en de website wordt opnieuw actief onderhouden.',
      },
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
      content: {
        context:
          'Na meer dan 25 jaar ervaring startte Larolo als zelfstandig Land Rover specialist. Voor een ondernemer die staat voor totale ontzorging van zijn klanten, was een website die hemzelf kopzorgen gaf geen optie.',
        approach:
          'Een custom WordPress theme volledig geoptimaliseerd voor tekst- en foto-invoer, zodat nieuwe voertuigen razendsnel online staan. Het systeem dwingt een luxe, consistente presentatie af die past bij 25 jaar expertise.',
        result:
          'Larolo beheert zijn volledige online stockbeheer zelfstandig en kan zich focussen op verkoop.',
      },
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
      content: {
        context:
          'De zaakvoerster wilde openingsuren en het behandelingsaanbod zelfstandig kunnen aanpassen zonder telkens een developer te contacteren. Elke kleine wijziging vereiste technische tussenkomst.',
        approach:
          'Laravel + Filament: een op maat beheerpaneel waarmee openingsuren en behandelingen direct en intuïtief aangepast worden. Gecombineerd met doorlopend technisch onderhoud voor een stabiele website.',
        result: 'De zaakvoerster past haar aanbod zelfstandig aan in minder dan twee minuten.',
      },
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
      content: {
        context:
          'Textielbedrijven ontvangen grote ordervolumes in wisselende Excel-formaten met namen, maten en hoeveelheden. Het handmatig omzetten naar een productieklare structuur was tijdrovend en foutgevoelig.',
        approach:
          'Een webapplicatie waarbij medewerkers Excel-bestanden uploaden die automatisch worden geparsed naar een gestandaardiseerde, productieklare structuur.',
        result:
          'Manuele verwerking geëlimineerd, foutenpercentage in het productieproces sterk gereduceerd.',
      },
      techStack: ['Laravel', 'PHP', 'Tailwind CSS', 'MySQL'],
      highlight: false,
      production: true,
      status: 'ongoing',
    },
    {
      id: 6,
      client: 'Flowlabs',
      title: 'Flowlabs Automation Platform',
      slug: 'flowlabs-automation-platform',
      subTitle: 'API Integraties, Scraping & AI-inzichten',
      service: ['SaaS Development', 'Automation'],
      year: 2026,
      image: '/assets/img/projects/flowlabs.png',
      content: {
        context:
          'Bedrijven verliezen dagelijks uren aan repetitieve taken: data ophalen uit meerdere bronnen, manueel rapporten opstellen, leads opvolgen zonder systeem. De behoefte aan een schaalbare automatiseringslaag was duidelijk.',
        approach:
          'Flowlabs is mijn eigen automation- en integratiebedrijf, draaiende op een VPS in Docker. Ik bouw GA4-rapporten, scraping flows, automatische e-mails, API-integraties en AI-gestuurde inzichten die als terugkerende service worden aangeboden aan klanten.',
        result:
          'Actieve klanten besparen gemiddeld meerdere uren per week op data- en rapportagetaken.',
      },
      link: 'https://www.flowlabs.be',
      techStack: ['Laravel', 'PHP', 'Docker', 'PostgreSQL', 'TypeScript'],
      highlight: false,
      production: true,
      status: 'active',
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
    const all = this.projects.flatMap((project) => project.service);
    return [...new Set(all)];
  }
}
