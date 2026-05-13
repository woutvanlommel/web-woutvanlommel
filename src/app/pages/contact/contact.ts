import { Component, inject, signal, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMapPinSolid, heroEnvelopeSolid } from '@ng-icons/heroicons/solid';
import { bootstrapLinkedin, bootstrapGithub } from '@ng-icons/bootstrap-icons';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EmailService, ContactFormData } from '../../shared/email.service';

@Component({
  selector: 'app-contact',
  imports: [NgIcon, ReactiveFormsModule, RouterLink],
  viewProviders: [
    provideIcons({
      heroMapPinSolid,
      heroEnvelopeSolid,
      bootstrapLinkedin,
      bootstrapGithub,
    }),
  ],
  template: `
    <div class="w-full overflow-x-hidden relative">

      <!-- Hero -->
      <section class="h-svh flex flex-col px-6 md:px-16 lg:px-24 relative overflow-hidden">
        <div class="w-full max-w-300 mx-auto relative z-10 flex flex-col h-full">
          <div class="flex-1 flex flex-col justify-center pt-24 md:pt-28">
            <div class="border-b border-zinc-800/60 pb-4">
              <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Neem contact op</span>
            </div>
            <div class="py-5 md:py-6 border-b border-zinc-800/60">
              <h1 class="text-fake-white font-bold text-[clamp(2.5rem,6vw,6rem)] leading-none tracking-tight">
                Laten we samenwerken<span class="text-primary">.</span>
              </h1>
            </div>
          </div>
          <div class="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p class="text-zinc-500 text-sm max-w-md leading-relaxed">
              Heb je een project in gedachten of wil je gewoon even sparren? Ik hoor graag van je.
            </p>
            <div class="flex items-center gap-6 text-xs text-zinc-600 uppercase tracking-widest">
              <a routerLink="/portfolio" class="hover:text-zinc-300 transition-colors duration-200">Portfolio</a>
              <a routerLink="/over-mij" class="hover:text-zinc-300 transition-colors duration-200">Over mij</a>
              <a routerLink="/diensten" class="hover:text-zinc-300 transition-colors duration-200">Diensten</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact section -->
      <section class="w-full px-6 md:px-16 lg:px-24 py-16">
        <div class="w-full max-w-300 mx-auto">

          <div class="border-b border-zinc-800/60 pb-6">
            <span class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Contactgegevens</span>
          </div>

          @if (!submitted) {
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-16 py-16 border-b border-zinc-800/60">

              <!-- Info (2/5) -->
              <div class="lg:col-span-2 space-y-12 mb-12 lg:mb-0">
                <p class="text-zinc-500 text-sm leading-relaxed max-w-sm">
                  Ik ben beschikbaar voor freelance projecten. Stuur me een berichtje en ik reageer meestal binnen 24 uur.
                </p>
                <div class="flex flex-col gap-5">
                  <a
                    href="mailto:woutvanlommel@icloud.com"
                    class="flex items-center gap-3 text-fake-white text-sm hover:text-primary transition-colors"
                  >
                    <ng-icon name="heroEnvelopeSolid" size="0.9rem" class="text-zinc-600 shrink-0" />
                    woutvanlommel&#64;icloud.com
                  </a>
                  <div class="flex items-center gap-3 text-fake-white text-sm">
                    <ng-icon name="heroMapPinSolid" size="0.9rem" class="text-zinc-600 shrink-0" />
                    3500 Hasselt, België
                  </div>
                  <span class="text-zinc-600 text-sm">BE 0793.803.953</span>
                </div>
                <div class="flex flex-row gap-5 pt-4 border-t border-zinc-800/60">
                  <a href="https://www.linkedin.com/in/woutvanlommel/" target="_blank" class="text-zinc-600 hover:text-fake-white transition-colors text-lg">
                    <ng-icon name="bootstrapLinkedin" />
                  </a>
                  <a href="https://github.com/woutvanlommel" target="_blank" class="text-zinc-600 hover:text-fake-white transition-colors text-lg">
                    <ng-icon name="bootstrapGithub" />
                  </a>
                </div>
              </div>

              <!-- Form (3/5) -->
              <form
                [formGroup]="contactForm"
                (ngSubmit)="onSubmit()"
                autocomplete="off"
                class="lg:col-span-3 grid grid-cols-2 gap-8"
              >
                <div class="flex flex-col gap-3 col-span-2 md:col-span-1">
                  <label for="name" class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Naam</label>
                  <input
                    type="text"
                    id="name"
                    formControlName="name"
                    placeholder="John Doe"
                    class="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-fake-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-zinc-700"
                    [class.border-red-500]="isFieldInvalid('name')"
                  />
                  @if (isFieldInvalid('name')) {
                    <p class="text-red-500 text-xs">
                      {{ contactForm.get('name')?.errors?.['required'] ? 'Naam is verplicht.' : 'Naam moet minstens 2 tekens bevatten.' }}
                    </p>
                  }
                </div>

                <div class="flex flex-col gap-3 col-span-2 md:col-span-1">
                  <label for="email" class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    placeholder="john&#64;doe.com"
                    class="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-fake-white text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-zinc-700"
                    [class.border-red-500]="isFieldInvalid('email')"
                  />
                  @if (isFieldInvalid('email')) {
                    <p class="text-red-500 text-xs">
                      {{ contactForm.get('email')?.errors?.['required'] ? 'Email is verplicht.' : 'Voer een geldig emailadres in.' }}
                    </p>
                  }
                </div>

                <div class="flex flex-col gap-3 col-span-2">
                  <label for="onderwerp" class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Onderwerp</label>
                  <select
                    id="onderwerp"
                    formControlName="subject"
                    class="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-fake-white text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                    [class.border-red-500]="isFieldInvalid('subject')"
                  >
                    <option value="" disabled selected class="bg-zinc-900">-- Kies een onderwerp --</option>
                    <option value="Een nieuw project starten" class="bg-zinc-900">Een nieuw project starten</option>
                    <option value="Workflow & Automatisatie" class="bg-zinc-900">Mijn workflow verbeteren/automatiseren</option>
                    <option value="Een website die makkelijker te beheren is" class="bg-zinc-900">Een website die makkelijker te beheren is</option>
                    <option value="Even sparren over een idee" class="bg-zinc-900">Even sparren over een idee</option>
                    <option value="Iets anders" class="bg-zinc-900">Iets anders</option>
                  </select>
                  @if (isFieldInvalid('subject')) {
                    <p class="text-red-500 text-xs">Dit veld is verplicht.</p>
                  }
                </div>

                <div class="flex flex-col gap-3 col-span-2">
                  <label for="bericht" class="text-xs font-semibold uppercase tracking-widest text-zinc-600">Bericht</label>
                  <textarea
                    id="bericht"
                    formControlName="message"
                    placeholder="Vertel me over jouw project"
                    class="w-full px-0 py-3 bg-transparent border-b border-zinc-800 text-fake-white text-sm focus:outline-none focus:border-primary min-h-32 transition-colors resize-none placeholder:text-zinc-700"
                    rows="5"
                    [class.border-red-500]="isFieldInvalid('message')"
                  ></textarea>
                  @if (isFieldInvalid('message')) {
                    <p class="text-red-500 text-xs">
                      {{ contactForm.get('message')?.errors?.['required'] ? 'Bericht is verplicht.' : 'Je bericht moet minstens 10 tekens bevatten.' }}
                    </p>
                  }
                </div>

                <div class="col-span-2">
                  @if (errorMessage()) {
                    <p class="text-red-500 text-xs mb-4">{{ errorMessage() }}</p>
                  }
                  <button
                    type="submit"
                    [disabled]="isSubmitting()"
                    class="inline-flex items-center gap-3 bg-primary hover:bg-primary/85 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    @if (isSubmitting()) {
                      <span class="inline-block animate-spin">◌</span>
                      Versturen...
                    } @else {
                      Verstuur bericht →
                    }
                  </button>
                </div>
              </form>

            </div>
          } @else {
            <div class="py-16 space-y-8">
              <div class="space-y-4">
                <h2 class="text-fake-white font-bold text-[clamp(2.5rem,6vw,6rem)] leading-none tracking-tight">
                  Bedankt<span class="text-primary">.</span>
                </h2>
                <p class="text-zinc-500 text-sm max-w-md leading-relaxed">
                  Ik neem zo snel mogelijk contact met je op!
                </p>
              </div>
              <a
                routerLink="/"
                class="inline-flex items-center gap-3 bg-primary hover:bg-primary/85 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 text-sm w-fit"
              >
                ← Terug naar home
              </a>
            </div>
          }

        </div>
      </section>

    </div>
  `,
  styles: ``,
})
export class Contact implements OnInit {
  private fb = inject(FormBuilder);
  private metaService = inject(Meta);
  submitted = false;
  errorMessage = signal('');
  isSubmitting = signal(false);
  private emailService = inject(EmailService);

  ngOnInit() {
    this.metaService.updateTag({
      name: 'description',
      content:
        'Neem contact op met Wout Vanlommel voor je volgende digitale project. Beschikbaar voor freelance opdrachten.',
    });
  }

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: [
      '',
      [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
    ],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.touched || field.dirty || this.submitted));
  }

  async onSubmit() {
    this.errorMessage.set('');

    if (this.contactForm.valid) {
      this.isSubmitting.set(true);

      // Cast de form values naar ons strikte type
      // We gebruiken 'as unknown' even als tussenstap of zorgen dat het form typed is (Angular 14+ Typed Forms zijn beter)
      const formData = this.contactForm.getRawValue() as ContactFormData;

      try {
        await this.emailService.sendContactEmail(formData);

        this.submitted = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.contactForm.reset();
        console.log('Email succesvol verzonden!');
        console.log('Opgelagen contact', formData);
      } catch (error) {
        this.errorMessage.set(
          'Er ging iets mis bij het versturen. Probeer het later opnieuw of mail me direct.',
        );
        // In een echte app loggen we dit naar een logging service
      } finally {
        this.isSubmitting.set(false);
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
