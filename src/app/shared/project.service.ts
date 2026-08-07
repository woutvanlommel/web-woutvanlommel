import { Injectable } from '@angular/core';
import { Project, ProjectService as ProjectServiceType } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      client: 'JRK Herckenrode',
      title: 'Digitaal Platform voor de Jeugdbeweging',
      slug: 'jrk-herckenrode-jeugdbeweging-platform',
      subTitle: 'Op maat CMS & digitale continuïteit',
      service: ['Platform ontwikkeling'],
      year: 2026,
      image: '/assets/img/projects/jrkherckenrode.png',
      content: {
        context:
          'De website van de jeugdbeweging was een black box: alle technische kennis zat bij één persoon. Toen die leiding vertrok, dreigde de online werking stil te vallen, de rest van de ploeg kon zonder externe hulp geen enkele aanpassing doorvoeren.',
        approach:
          'Een custom WordPress-thema met een backend die volledig is afgestemd op een wisselende leidingsploeg. Complexe functionaliteit is vertaald naar eenvoudige invoervelden, zodat de leiding zelfstandig de kalender, kampinformatie en inschrijvingen beheert.',
        result:
          'De organisatie is technisch zelfstandig geworden: nieuwe leiding neemt de website over zonder ontwikkelaarshulp.',
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
      title: 'Snel en schaalbaar presentatieplatform',
      slug: 'digital-agency-rebranding-nextgenmedia',
      subTitle: 'Merkconsistent op maat CMS',
      service: ['Platform ontwikkeling'],
      year: 2026,
      image: '/assets/img/projects/nextgenmedia.png',
      content: {
        context:
          'NextGenMedia had een verouderde websitestructuur die de groei van hun portfolio afremde. Een omslachtig beheerproces en het ontbreken van visuele kaders zorgden voor stilstand: de site werd amper nog bijgewerkt.',
        approach:
          "Een volledig custom WordPress-ecosysteem met een modulair, veldgestuurd systeem via ACF. Het team publiceert complexe pagina's via eenvoudige invoervelden, terwijl de huisstijl in de architectuur verankerd zit, visuele consistentie is gegarandeerd, ongeacht wie er content plaatst.",
        result:
          'De publicatietijd is drastisch gedaald en de website wordt opnieuw actief onderhouden.',
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
      title: 'Website voor Land Rover Specialist',
      slug: 'land-rover-restauratie-verkoop-larolo',
      subTitle: 'Vakmanschap in de kijker & leadgeneratie centraal',
      service: ['Platform ontwikkeling'],
      year: 2026,
      image: '/assets/img/projects/larolo.png',
      content: {
        context:
          'Na meer dan 25 jaar ervaring startte Larolo als zelfstandig Land Rover-specialist. Voor een ondernemer die zijn klanten volledig wil ontzorgen, was een website die hemzelf kopzorgen bezorgde geen optie.',
        approach:
          'Een custom WordPress-thema volledig geoptimaliseerd voor snelle tekst- en foto-invoer, zodat nieuwe voertuigen razendsnel online staan. Het systeem dwingt een luxueuze, consistente presentatie af die past bij 25 jaar expertise.',
        result:
          'Larolo beheert zijn volledige online voorraad zelfstandig en kan zich focussen op verkoop.',
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
      subTitle: 'Filament Dashboard, Cadeaubonnen & Website Onderhoud',
      service: ['Platform ontwikkeling', 'Onderhoud'],
      year: 2026,
      image: '/assets/img/projects/idunakermt.png',
      content: {
        context:
          'Wat begon als technische onderhoudsondersteuning groeide stap voor stap uit tot een modulair platform. Eerst kwam er een reviews-module die rechtstreeks de beoordelingen van Google ophaalt en toont op de website, gevolgd door een cadeaubonnenmodule waarmee klanten ook buiten de openingsuren een cadeaubon kunnen bestellen.',
        approach:
          'Laravel + Filament: een op maat gebouwd beheerpaneel dat we modulair blijven uitbreiden. Behandelingen en openingsuren worden centraal beheerd, de reviews-module haalt automatisch de Google-beoordelingen binnen en de cadeaubonnenmodule verwerkt bestellingen zelfs wanneer de winkel gesloten is — dit alles gekoppeld aan doorlopend technisch onderhoud.',
        result:
          'Elke nieuwe module bouwt verder op de vorige: van eenvoudige onderhoudsondersteuning naar een groeiend beheerplatform. Zo werken we modulair verder naar een mini-ERP-systeem in de toekomst op maat van Iduna Kermt.',
      },
      link: 'https://www.idunakermt.be',
      techStack: [
        'Laravel',
        'Livewire',
        'Google Cloud Console',
        'Filament',
        'PHP',
        'Tailwind CSS',
        'MySQL',
      ],
      highlight: true,
      production: true,
      status: 'active',
    },
    {
      id: 5,
      client: 'Customflow',
      title: 'Textiel Orderplatform voor Overflow-Orders',
      slug: 'customflow-textiel-order-management',
      subTitle: 'Externe API-Koppelingen & automatische orderverwerking',
      service: ['Platform ontwikkeling', 'E-commerce'],
      year: 2026,
      image: '',
      content: {
        context:
          'Textieldrukkers krijgen soms meer grootorders binnen dan ze zelf kunnen verwerken. Van bijvoorbeeld tien grootorders raken er in twee weken tijd maar vijf verwerkt, de overige vijf moeten ze uitstellen of gewoon weigeren.',
        approach:
          "Een platform volledig vanaf nul gebouwd waarop textieldrukkers hun overflow-orders kunnen plaatsen. Een externe API-integratie haalt de actuele stockvoorraad op, een tweede verwerkt de orders richting productie. Daartussen gebeurt alles op het platform zelf: orders worden opgebouwd, afbeeldingen en logo's rechtstreeks aangeleverd en de namen voor op de truien, t-shirts,... vanuit een Excel-achtige template automatisch verwerkt tot een gestructureerd JSON-formaat.",
        result:
          'De orders die drukkers zelf niet verwerkt krijgen, worden nu via het platform alsnog binnen dezelfde termijn afgehandeld, zonder dat ze klanten moeten doorverwijzen of orders moeten weigeren.',
      },
      techStack: [
        'Laravel',
        'Livewire',
        'Filament',
        'API-koppeling',
        'PHP',
        'Tailwind CSS',
        'MySQL',
      ],
      highlight: false,
      production: true,
      status: 'ongoing',
    },
    {
      id: 6,
      client: 'Flowlabs',
      title: 'Flowlabs Automatiseringsplatform',
      slug: 'flowlabs-automation-platform',
      subTitle: 'API-Integraties, Scraping & AI-Inzichten',
      service: ['SaaS ontwikkeling', 'Automatisatie'],
      year: 2026,
      image: '/assets/img/projects/flowlabs.png',
      content: {
        context:
          'Bedrijven verliezen dagelijks uren aan repetitieve taken: data ophalen uit meerdere bronnen, manueel rapporten opstellen, leads opvolgen zonder systeem. De nood aan een schaalbare automatiseringslaag was duidelijk.',
        approach:
          'Flowlabs is mijn eigen digitaal automatisatiebedrijf, draaiend op een VPS in Docker. We bouwen automatisaties in Python, denk aan sms-automatisatie, orderverwerking en gelijkaardige processen, aangeboden als terugkerende dienst aan klanten.',
        result: 'Actieve klanten besparen gemiddeld meerdere uren per week op manuele taken.',
      },
      link: 'https://www.flowlabs.be',
      techStack: ['Python', 'Laravel', 'PHP', 'Docker', 'PostgreSQL', 'TypeScript'],
      highlight: false,
      production: true,
      status: 'active',
    },
    {
      id: 7,
      client: 'Sportschool Hasselt',
      title: 'Automatische Orderverwerking Sportkledij',
      slug: 'sportschool-hasselt-shopify-orderautomatisatie',
      subTitle: 'Shopify-Koppeling & Automatische Orderverwerking',
      service: ['Automatisatie'],
      year: 2026,
      image: '/assets/img/projects/sportschoolhasselt.png',
      content: {
        context:
          'Scholieren bestellen hun sportkledij via een Shopify-webshop, maar de opvolging gebeurde manueel: om de twee weken moest iemand nakijken welke bestellingen bij de eerstvolgende ophaalronde van de productiepartner hoorden.',
        approach:
          'Een integratie op de Shopify-website die orders via een webhook opvangt en rechtstreeks doorkoppelt met de API van de productiepartner. Eén doorlopende flow: een bestelling wordt automatisch gekoppeld aan het eerstvolgende ophaalmoment, zonder manuele tussenkomst.',
        result:
          'De verantwoordelijke hoeft niet langer om de twee weken orders na te kijken, alles wordt automatisch verwerkt en de kledij ligt op tijd klaar op school.',
      },
      techStack: ['Python', 'Shopify API', 'Webhooks', 'Externe API', 'Zoho + Zepto Mail'],
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

  getUniqueServices(): ProjectServiceType[] {
    const all = this.projects.flatMap((project) => project.service);
    return [...new Set(all)];
  }
}
