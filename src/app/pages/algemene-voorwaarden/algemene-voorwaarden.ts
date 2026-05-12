import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-algemene-voorwaarden',
  imports: [],
  template: `
    <div class="w-full pt-48 pb-32 overflow-x-hidden relative">
      <div
        class="absolute -top-64 -right-64 w-125 h-125 md:w-175 md:h-175 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-2"
      ></div>

      <div class="w-full max-w-300 mx-auto z-10 relative px-6 md:px-16 lg:px-24 space-y-16">
        <!-- Hero -->
        <div class="text-center space-y-1 reveal">
          <h1 class="text-fake-white font-bold text-[clamp(3rem,4vw,4rem)]">
            Algemene Voorwaarden<span class="text-primary">.</span>
          </h1>
          <h2 class="text-zinc-500 text-[clamp(1.2rem,1.5vw,1.5rem)]">
            Laatst bijgewerkt: 18 februari 2026
          </h2>
        </div>

        <!-- Articles -->
        <div class="space-y-12">
          <!-- Artikel 1 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 1<span class="text-primary">.</span> Toepasselijkheid
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Deze algemene voorwaarden zijn van toepassing op alle offertes, overeenkomsten en
                leveringen van diensten (waaronder softwareontwikkeling, consultancy en hosting) en
                goederen door Wout Vanlommel (hierna: "Dienstverlener") aan de zakelijke klant
                (hierna: "Opdrachtgever").
              </p>
              <p>
                Afwijkingen van deze voorwaarden zijn slechts geldig indien deze uitdrukkelijk en
                schriftelijk zijn overeengekomen.
              </p>
              <p>
                De toepasselijkheid van eventuele inkoopvoorwaarden van de Opdrachtgever wordt
                uitdrukkelijk van de hand gewezen.
              </p>
            </div>
          </section>

          <!-- Artikel 2 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 2<span class="text-primary">.</span> Offertes en Totstandkoming
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders
                aangegeven.
              </p>
              <p>
                De overeenkomst komt tot stand door schriftelijke aanvaarding van de offerte door de
                Opdrachtgever (o.a. per e-mail of ondertekening) of door de feitelijke aanvang van
                de werkzaamheden door de Dienstverlener.
              </p>
            </div>
          </section>

          <!-- Artikel 3 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 3<span class="text-primary">.</span> Uitvoering van de Overeenkomst
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                De Dienstverlener zal de overeenkomst naar beste inzicht en vermogen en
                overeenkomstig de eisen van goed vakmanschap uitvoeren. Dit betreft een
                inspanningsverbintenis en geen resultaatsverbintenis, tenzij uitdrukkelijk
                schriftelijk anders overeengekomen.
              </p>
              <p>
                De Dienstverlener is gerechtigd bepaalde werkzaamheden te laten verrichten door
                derden, zonder dat hiervoor uitdrukkelijke toestemming van de Opdrachtgever nodig
                is.
              </p>
              <p>
                De Opdrachtgever draagt er zorg voor dat alle gegevens (zoals API-sleutels, designs,
                prijsformules en inloggegevens) tijdig aan de Dienstverlener worden verstrekt.
                Vertraging of schade door het niet tijdig of onjuist aanleveren van informatie komt
                voor rekening en risico van de Opdrachtgever.
              </p>
              <div class="bg-black/50 border-l-4 border-primary p-4 rounded-r-lg">
                <p class="text-zinc-300 font-medium mb-1">Browser & Device Support</p>
                <p>
                  Tenzij anders overeengekomen, garandeert de Dienstverlener de werking van de
                  webapplicatie op de meest recente twee versies van Chrome, Safari, Firefox en Edge
                  op desktop en mobiel (iOS/Android). Verouderde browsers (zoals Internet Explorer)
                  worden niet ondersteund.
                </p>
              </div>
            </div>
          </section>

          <!-- Artikel 4 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 4<span class="text-primary">.</span> Betalingstermijn en Wanbetaling
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Betaling dient te geschieden binnen 30 dagen na factuurdatum, op de door de
                Dienstverlener aangegeven wijze.
              </p>
              <p>
                Indien de Opdrachtgever in gebreke blijft in de tijdige betaling, is de
                Opdrachtgever van rechtswege in verzuim zonder dat daarvoor enige ingebrekestelling
                of aanmaning vereist is.
              </p>
              <p>
                In geval van verzuim is de Opdrachtgever over het openstaande bedrag een
                contractuele rente verschuldigd van 10% per jaar, alsmede een forfaitaire
                schadevergoeding van 10% van het factuurbedrag met een minimum van € 75,00,
                onverminderd het recht van de Dienstverlener om de werkelijke schade en
                invorderingskosten te vorderen.
              </p>
            </div>
          </section>

          <!-- Artikel 5 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 5<span class="text-primary">.</span> Levering, Oplevering en Reclames
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Opgegeven termijnen voor de ontwikkeling en levering van software zijn indicatief en
                nimmer fatale termijnen, tenzij schriftelijk anders overeengekomen. Overschrijding
                van de termijn geeft de Opdrachtgever geen recht op schadevergoeding of ontbinding.
              </p>
              <p>
                Software geldt als opgeleverd en aanvaard op het moment dat de Opdrachtgever de
                software in gebruik neemt (productie), dan wel na succesvolle afronding van een
                acceptatietest, of bij gebreke daarvan automatisch 15 dagen na oplevering van de
                eerste versie.
              </p>
              <p>
                Klachten over de verrichte werkzaamheden of facturen dienen door de Opdrachtgever
                binnen 8 dagen na ontdekking of factuurdatum schriftelijk en gemotiveerd te worden
                gemeld. Na het verstrijken van deze termijn wordt de prestatie geacht volledig te
                zijn aanvaard en vervalt elk recht op reclame.
              </p>
            </div>
          </section>

          <!-- Artikel 6 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 6<span class="text-primary">.</span> Intellectueel Eigendom en
              Eigendomsvoorbehoud
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Alle rechten van intellectueel eigendom op de ontwikkelde software, broncode,
                designs, documentatie en databanken blijven uitsluitend berusten bij de
                Dienstverlener of diens licentiegevers, tenzij schriftelijk expliciet overdracht van
                auteursrecht is overeengekomen.
              </p>
              <p>
                Pas na volledige betaling van alle facturen verkrijgt de Opdrachtgever een
                niet-exclusief, onoverdraagbaar en eeuwigdurend gebruiksrecht op de maatwerksoftware
                voor het overeengekomen bedrijfsdoel.
              </p>
              <p>
                Zolang de Opdrachtgever niet volledig aan zijn betalingsverplichtingen heeft
                voldaan, blijven alle geleverde goederen en rechten eigendom van de Dienstverlener
                en is het de Opdrachtgever verboden de software in een productieomgeving te
                gebruiken.
              </p>
            </div>
          </section>

          <!-- Artikel 7 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 7<span class="text-primary">.</span> Wijzigingen en Meerwerk
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Indien tijdens de uitvoering blijkt dat wijzigingen of aanvullingen op de opdracht
                noodzakelijk of wenselijk zijn (bijv. extra features of scope creep), zullen
                partijen in overleg treden.
              </p>
              <p>
                Werkzaamheden die buiten de oorspronkelijke offerte vallen (meerwerk), zullen worden
                vergoed tegen het op dat moment geldende uurtarief van de Dienstverlener.
              </p>
              <div class="bg-black/50 border-l-4 border-primary p-4 rounded-r-lg">
                <p class="text-zinc-300 font-medium mb-1">Updates & Maintenance</p>
                <p>
                  Noodzakelijke aanpassingen aan de software als gevolg van updates van externe
                  diensten (bijv. een verplichte PHP-update bij de hoster, of een "breaking change"
                  in de Stripe API) vallen niet onder de garantie of vaste projectprijs, maar worden
                  berekend als meerwerk, tenzij een onderhoudscontract is afgesloten.
                </p>
              </div>
            </div>
          </section>

          <!-- Artikel 8 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 8<span class="text-primary">.</span> Aansprakelijkheid
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                De aansprakelijkheid van de Dienstverlener is beperkt tot vergoeding van directe
                schade en is in ieder geval gemaximeerd tot het bedrag van de factuurwaarde van de
                betreffende opdracht (excl. BTW) waarop de schade betrekking heeft.
              </p>
              <p>
                De Dienstverlener is nimmer aansprakelijk voor indirecte schade, daaronder begrepen
                gevolgschade, gederfde winst, gemiste besparingen, verlies van data en schade door
                bedrijfsstagnatie.
              </p>
              <p>
                De Dienstverlener is niet aansprakelijk voor schade, storingen of verminderde
                werking van de applicatie die veroorzaakt worden door diensten, updates of API's van
                derden (zoals o.a. hostingproviders, Stripe, Supabase, Sendcloud, Google API's,
                ...). De Dienstverlener garandeert niet dat deze externe diensten ononderbroken
                zullen werken.
              </p>
              <div class="bg-black/50 border-l-4 border-primary p-4 rounded-r-lg">
                <p class="text-zinc-300 font-medium mb-1">Gebruikersfouten</p>
                <p>
                  De Dienstverlener is niet aansprakelijk voor fouten of dataverlies die ontstaan
                  doordat de Opdrachtgever of diens personeel onjuiste handelingen verricht in het
                  beheersysteem (CMS), de database direct benadert, of configuraties wijzigt zonder
                  overleg.
                </p>
              </div>
            </div>
          </section>

          <!-- Artikel 9 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 9<span class="text-primary">.</span> Privacy en Gegevensverwerking (AVG/GDPR)
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                Indien de Dienstverlener in opdracht van de Opdrachtgever persoonsgegevens verwerkt,
                fungeert de Dienstverlener als 'Verwerker' en de Opdrachtgever als
                'Verwerkingsverantwoordelijke' in de zin van de Algemene Verordening
                Gegevensbescherming (AVG).
              </p>
              <p>
                De Dienstverlener zal persoonsgegevens vertrouwelijk behandelen en passende
                technische maatregelen nemen ter beveiliging. De Opdrachtgever vrijwaart de
                Dienstverlener tegen aanspraken van betrokkenen of boetes van toezichthouders,
                tenzij er sprake is van opzet of grove nalatigheid aan de zijde van de
                Dienstverlener.
              </p>
              <p>
                De Opdrachtgever garandeert dat alle door hem aan de Dienstverlener verstrekte
                materialen, gegevens, content en instructies (waaronder persoonsgegevens) rechtmatig
                zijn verkregen en gebruikt mogen worden. De Opdrachtgever vrijwaart de
                Dienstverlener integraal tegen alle aanspraken van derden (waaronder betrokkenen en
                toezichthouders zoals de Gegevensbeschermingsautoriteit) en de daarmee samenhangende
                kosten (waaronder juridische bijstand), die voortvloeien uit de uitvoering van de
                overeenkomst, tenzij er sprake is van opzet of grove nalatigheid aan de zijde van de
                Dienstverlener.
              </p>
            </div>
          </section>

          <!-- Artikel 10 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 10<span class="text-primary">.</span> Opschorting en Ontbinding
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>
                De Dienstverlener is bevoegd de nakoming van de verplichtingen (inclusief toegang
                tot de software, code repository of hosting) direct op te schorten indien de
                Opdrachtgever zijn betalingsverplichtingen niet nakomt.
              </p>
              <p>
                Abonnementen (zoals hosting- of onderhoudscontracten) worden stilzwijgend verlengd,
                tenzij schriftelijk opgezegd met inachtneming van een opzegtermijn van één (1) maand
                voor het einde van de lopende periode.
              </p>
            </div>
          </section>

          <!-- Artikel 11 -->
          <section class="space-y-4 reveal">
            <h3 class="text-fake-white font-semibold text-[clamp(1.5rem,2vw,2rem)]">
              Artikel 11<span class="text-primary">.</span> Toepasselijk recht en Geschillen
            </h3>
            <div class="space-y-3 text-zinc-400 leading-relaxed">
              <p>Op alle rechtsbetrekkingen is uitsluitend Belgisch recht van toepassing.</p>
              <p>
                Geschillen zullen uitsluitend worden voorgelegd aan de bevoegde rechter van het
                gerechtelijk arrondissement waar de Dienstverlener gevestigd is (Limburg, afdeling
                Hasselt).
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AlgemeneVoorwaarden implements OnInit {
  private metaService = inject(Meta);

  ngOnInit() {
    this.metaService.updateTag({
      name: 'description',
      content:
        'Algemene voorwaarden van Wout Vanlommel - Freelance Full Stack Developer. Lees hier de voorwaarden voor softwareontwikkeling, consultancy en hosting.',
    });
  }
}
