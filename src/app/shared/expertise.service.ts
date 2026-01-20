import { Injectable } from '@angular/core';
import { Expertise } from '../models/expertise.model';
import { WorkFlow } from '../models/expertise.model';
import { Benefit } from '../models/expertise.model';

@Injectable({
  providedIn: 'root',
})
export class ExpertiseService {
  private Expertises: Expertise[] = [
    {
      id: 1,
      title: 'Maatwerk Webapplicaties',
      description:
        'Standaard software voldoet vaak net niet. Ik ontwikkel krachtige applicaties op maat die jouw unieke bedrijfsprocessen stroomlijnen. Van interactieve dashboards in React tot complexe backends in Laravel: ik bouw systemen die schaalbaar, veilig en razendsnel zijn.',
      button: 'Jouw webapplicatie bespreken',
      image: '/assets/img/expertises/maatwerk.png',
    },
    {
      id: 2,
      title: 'Flexibele Websites & CMS',
      description:
        'Een website is je digitale visitekaartje. Ik bouw pixel-perfecte frontends die technisch geoptimaliseerd zijn voor snelheid en perfect werken op mobiel en desktop. Via een gebruiksvriendelijk CMS pas je zelf eenvoudig teksten en afbeeldingen aan, zonder dat je bang hoeft te zijn dat de layout verspringt.',
      button: 'Start jouw website project',
      image: '/assets/img/expertises/flexibel_cms.png',
    },
    {
      id: 3,
      title: 'Koppelingen & Automatisaties',
      description:
        'Typ je nog handmatig data over? Dat is verleden tijd. Ik koppel jouw favoriete tools (zoals CRM, boekhouding of betaalsystemen) naadloos aan elkaar. Door slimme API-integraties automatiseer ik foutgevoelig werk, zodat jij je kunt focussen op wat echt telt: ondernemen.',
      button: 'Automatiseer je werk',
      image: '/assets/img/expertises/koppelingen.png',
    },
    {
      id: 4,
      title: 'Zorgeloos onderhoud',
      description:
        'Na de lancering sta je er niet alleen voor. Software heeft onderhoud nodig om veilig en snel te blijven draaien. Met mijn onderhoudspakketten zorg ik voor de technische updates, zodat jij daar geen omkijken naar hebt. Heb je een vraag of wil je sparren over een uitbreiding? Dan heb je één vast aanspreekpunt die jouw systeem door en door kent.',
      button: 'Bespreek support opties',
      image: '/assets/img/expertises/onderhoud.png',
    },
  ];

  private workFlows: WorkFlow[] = [
    {
      id: 1,
      number: '01',
      title: 'Analyse',
      description:
        'We starten met jouw idee. Ik luister, stel kritische vragen en we bepalen samen de technische eisen en doelen.',
    },
    {
      id: 2,
      number: '02',
      title: 'Design',
      description:
        'Ik vertaal jouw wensen naar een strak interactief ontwerp. Jij ziet precies hoe het wordt vóórdat ik één regel code schrijf.',
    },
    {
      id: 3,
      number: '03',
      title: 'Development',
      description:
        'Hier gebeurt de magie. Ik bouw jouw applicatie in de overeengekomen tech stack. Schone code, veilig en snel.',
    },
    {
      id: 4,
      number: '04',
      title: 'Launch & Support',
      description:
        'We gaan live zonder stress. En daarna? Dan blijf ik beschikbaar voor updates en beheer.',
    },
  ];

  private benefits: Benefit[] = [
    {
      id: 1,
      number: '01',
      title: 'Direct contact',
      description:
        'Geen accountmanagers of ticket-systemen. Je belt mij, ik neem op. Korte lijnen, snelle schakels.',
    },
    {
      id: 2,
      number: '02',
      title: 'Eigenaarschap',
      description:
        'Ik bouw jouw project alsof het mijn eigen bedrijf is. Ik ben pas tevreden als het perfect werkt.',
    },
    {
      id: 3,
      number: '03',
      title: 'Flexibiliteit',
      description:
        'Geen logge bureau-processen. We passen ons aan jouw ritme aan en kunnen snel bijsturen.',
    },
  ];

  getExpertises() {
    return this.Expertises;
  }

  getWorkFlows() {
    return this.workFlows;
  }

  getBenefits() {
    return this.benefits;
  }
}
