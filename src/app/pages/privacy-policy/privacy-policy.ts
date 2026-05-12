import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  template: `
    <div class="w-full pt-48 pb-32 overflow-x-hidden relative">
      <div
        class="absolute -top-64 -right-64 w-125 h-125 md:w-175 md:h-175 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-2"
      ></div>

      <div class="w-full max-w-300 mx-auto z-10 relative px-6 md:px-16 lg:px-24 space-y-16">
        <!-- Hero -->
        <div class="text-center space-y-1 reveal">
          <h1 class="text-fake-white font-bold text-[clamp(3rem,4vw,4rem)]">
            Privacyverklaring<span class="text-primary">.</span>
          </h1>
          <h2 class="text-zinc-500 text-[clamp(1.2rem,1.5vw,1.5rem)]">
            Laatst bijgewerkt: 18 februari 2026
          </h2>
        </div>

        <!-- Sections -->
        <div class="space-y-12">
          <!-- 1. Algemeen -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              1<span class="text-primary">.</span> Algemeen
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Wout Vanlommel, gevestigd te 3500 Hasselt, is verantwoordelijk voor de verwerking
                van persoonsgegevens zoals weergegeven in deze privacyverklaring. Ik respecteer de
                privacy van mijn klanten en de bezoekers van mijn website en draag er zorg voor dat
                de persoonlijke informatie die je verschaft vertrouwelijk wordt behandeld volgens de
                AVG (GDPR).
              </p>
            </div>
          </section>

          <!-- 2. Welke gegevens verwerk ik? -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              2<span class="text-primary">.</span> Welke gegevens verwerk ik?
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Ik verwerk je gegevens omdat je gebruik maakt van mijn diensten of omdat je contact
                met mij opneemt via het contactformulier op de website:
              </p>
              <div class="space-y-2">
                <div class="bg-black/50 border-l-4 border-primary p-4 rounded-r-lg">
                  <p class="text-zinc-300 font-medium mb-1">Contactformulier</p>
                  <p>Naam, e-mailadres en de inhoud van je bericht.</p>
                </div>
                <div class="bg-black/50 border-l-4 border-primary p-4 rounded-r-lg">
                  <p class="text-zinc-300 font-medium mb-1">Zakelijke relatie</p>
                  <p>
                    Indien we samenwerken: bedrijfsnaam, adresgegevens, BTW-nummer en
                    facturatiegegevens.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 3. Doelen van de verwerking -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              3<span class="text-primary">.</span> Doelen van de verwerking
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>Ik gebruik je gegevens uitsluitend voor:</p>
              <ul class="list-disc list-inside space-y-2 ml-2">
                <li>Het beantwoorden van vragen en het versturen van offertes.</li>
                <li>
                  Het uitvoeren van de technische opdracht (bijv. development in Laravel of
                  WordPress).
                </li>
                <li>Het voldoen aan wettelijke verplichtingen (zoals de belastingaangifte).</li>
              </ul>
            </div>
          </section>

          <!-- 4. Beveiliging van Code en Data -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              4<span class="text-primary">.</span> Beveiliging van Code en Data
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>Als Full Stack Developer neem ik beveiliging serieus.</p>
              <div class="space-y-2">
                <div class="bg-black/50 border-l-4 border-primary p-4 rounded-r-lg">
                  <p class="text-zinc-300 font-medium mb-1">SSL-verbinding</p>
                  <p>De website maakt gebruik van een betrouwbaar SSL-certificaat.</p>
                </div>
                <div class="bg-black/50 border-l-4 border-primary p-4 rounded-r-lg">
                  <p class="text-zinc-300 font-medium mb-1">Toegangsbeheer</p>
                  <p>
                    Gebruikersgegevens en API-sleutels van klanten worden nooit in de broncode (Git)
                    opgeslagen, maar via beveiligde omgevingsvariabelen beheerd.
                  </p>
                </div>
                <div class="bg-black/50 border-l-4 border-primary p-4 rounded-r-lg">
                  <p class="text-zinc-300 font-medium mb-1">Vast aanspreekpunt</p>
                  <p>
                    Zoals op mijn site vermeld: je hebt direct contact met mij, er zijn geen
                    tussenpersonen die toegang hebben tot je data.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- 5. Bewaartermijn -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              5<span class="text-primary">.</span> Bewaartermijn
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Ik bewaar je gegevens niet langer dan strikt nodig is. Voor administratieve gegevens
                (facturen) geldt de wettelijke termijn van 7 jaar. Projectdocumentatie en code
                bewaar ik zolang onze samenwerking loopt, of totdat je verzoekt om verwijdering.
              </p>
            </div>
          </section>

          <!-- 6. Jouw rechten -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              6<span class="text-primary">.</span> Jouw rechten
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Je hebt het recht op inzage, correctie of verwijdering van je persoonsgegevens. Neem
                hiervoor contact op via de
                <a routerLink="/contact" class="text-primary hover:underline">contactpagina</a>
                van deze website.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class PrivacyPolicy implements OnInit {
  private metaService = inject(Meta);

  ngOnInit() {
    this.metaService.updateTag({
      name: 'description',
      content:
        'Privacyverklaring van Wout Vanlommel - Freelance Full Stack Developer. Lees hoe ik omga met je persoonsgegevens conform de AVG (GDPR).',
    });
  }
}
