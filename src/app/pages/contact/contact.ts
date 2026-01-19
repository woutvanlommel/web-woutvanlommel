import { Component, inject } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroMapPinSolid, heroEnvelopeSolid, heroArrowRightSolid } from '@ng-icons/heroicons/solid';
import { bootstrapLinkedin, bootstrapGithub, bootstrapArrowRight } from '@ng-icons/bootstrap-icons';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [NgIcon, ReactiveFormsModule, RouterLink],
  viewProviders: [
    provideIcons({
      heroMapPinSolid,
      heroEnvelopeSolid,
      bootstrapLinkedin,
      bootstrapGithub,
      bootstrapArrowRight,
      heroArrowRightSolid,
    }),
  ],
  template: `
    <div class="w-full bg-light-black pt-48 pb-32 overflow-x-hidden relative">
      <div
        class="absolute -top-64 -right-64 w-125 h-125 md:w-175 md:h-175 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-2"
      ></div>
      <div class="w-full max-w-300 space-y-16 mx-auto z-10 relative px-4 md:px-8">
        @if (!submitted) {
          <div class="text-center space-y-1">
            <h1 class="text-fake-white font-bold text-[clamp(3rem,4vw,4rem)]">
              Laten we samenwerken<span class="text-primary">.</span>
            </h1>
            <h2 class="text-zinc-500 text-[clamp(2rem,2vw,2.5rem)]">
              Heb je een project in gedachten of wil je gewoon even sparren? Ik hoor graag van je.
            </h2>
          </div>
        }

        <div class="flex flex-col md:flex-row gap-8 z-10 items-center">
          <div class="space-y-6 md:space-y-12 w-full md:w-1/2">
            <div class="space-y-2">
              <h3
                class="uppercase text-primary text-[clamp(1rem,1.5vw,1.5rem)] font-bold tracking-widest"
              >
                Contactgegevens
              </h3>
              <p class="text-zinc-300 text-sm max-w-md">
                Ik ben beschikbaar voor freelance projecten vanaf februari 2026. Stuur me een
                berichtje en ik reageer meestal binnen 24 uur.
              </p>
            </div>
            <div class="flex flex-col gap-4 justify-center items-start w-fit text-fake-white">
              <a
                href="mailto:woutvanlommel@icloud.com"
                class="flex items-center gap-3 text-lg hover:text-primary transition-colors"
              >
                <ng-icon name="heroEnvelopeSolid" class="text-xl" />
                woutvanlommel@icloud.com
              </a>
              <div class="flex items-center gap-3 text-lg">
                <ng-icon name="heroMapPinSolid" class="text-xl" />
                <p>3500 Hasselt, België</p>
              </div>
              <p class="text-zinc-400">BE 0793.803.953</p>
            </div>
            <div class="flex flex-row gap-4 text-3xl">
              <a
                href="#"
                class="hover:text-primary text-fake-white transition-colors cursor-pointer"
              >
                <ng-icon name="bootstrapLinkedin" />
              </a>
              <a
                href="#"
                class="hover:text-primary text-fake-white transition-colors cursor-pointer"
              >
                <ng-icon name="bootstrapGithub" />
              </a>
            </div>
          </div>

          @if (!submitted) {
            <form
              [formGroup]="contactForm"
              (ngSubmit)="onSubmit()"
              autocomplete="off"
              class="w-full md:w-1/2 grid grid-cols-2 h-fit gap-4 [&>div>label]:uppercase [&>div>label]:text-fake-white [&>div>label]:text-xs p-8 rounded-lg bg-black/75 border border-zinc-700 shadow-2xl z-20"
            >
              <!-- Naam -->
              <div class="flex flex-col gap-2 col-span-2 md:col-span-1">
                <label for="name" class="font-medium">Naam</label>
                <input
                  type="text"
                  id="name"
                  formControlName="name"
                  placeholder="Bv.: John Doe"
                  class="w-full p-3 rounded-md bg-zinc-800/80 border border-zinc-600 text-fake-white focus:outline-none focus:border-primary transition-colors"
                  [class.border-red-500]="isFieldInvalid('name')"
                />
                @if (isFieldInvalid('name')) {
                  <p class="text-red-500 text-xs mt-1 animate-in fade-in duration-300">
                    {{
                      contactForm.get('name')?.errors?.['required']
                        ? 'Naam is verplicht.'
                        : 'Naam moet minstens 2 tekens bevatten.'
                    }}
                  </p>
                }
              </div>

              <!-- Email -->
              <div class="flex flex-col gap-2 col-span-2 md:col-span-1">
                <label for="email" class="font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  formControlName="email"
                  placeholder="Bv.: John"
                  class="w-full p-3 rounded-md bg-zinc-800/80 border border-zinc-600 text-fake-white focus:outline-none focus:border-primary transition-colors"
                  [class.border-red-500]="isFieldInvalid('email')"
                />
                @if (isFieldInvalid('email')) {
                  <p class="text-red-500 text-xs mt-1 animate-in fade-in duration-300">
                    {{
                      contactForm.get('email')?.errors?.['required']
                        ? 'Email is verplicht.'
                        : 'Voer een geldig emailadres in (bv. john@doe.com).'
                    }}
                  </p>
                }
              </div>

              <!-- Onderwerp -->
              <div class="flex flex-col gap-2 col-span-2">
                <label for="onderwerp" class="font-medium">Onderwerp</label>
                <select
                  id="onderwerp"
                  formControlName="subject"
                  class="w-full p-3 rounded-md bg-zinc-800/80 border border-zinc-600 text-fake-white focus:outline-none focus:border-primary transition-colors appearance-none"
                  [class.border-red-500]="isFieldInvalid('subject')"
                >
                  <option value="" disabled selected>-- Kies een onderwerp --</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="sparren">Even sparren</option>
                  <option value="overig">Iets anders</option>
                </select>
                @if (isFieldInvalid('subject')) {
                  <p class="text-red-500 text-xs mt-1 animate-in fade-in duration-300">
                    Dit veld is verplicht.
                  </p>
                }
              </div>

              <!-- Bericht -->
              <div class="flex flex-col gap-2 col-span-2">
                <label for="bericht" class="font-medium">Bericht</label>
                <textarea
                  id="bericht"
                  formControlName="message"
                  placeholder="Vertel me over jouw project"
                  class="w-full p-3 rounded-md bg-zinc-800/80 border border-zinc-600 text-fake-white focus:outline-none focus:border-primary min-h-32 transition-colors"
                  rows="5"
                  [class.border-red-500]="isFieldInvalid('message')"
                ></textarea>
                @if (isFieldInvalid('message')) {
                  <p class="text-red-500 text-xs mt-1 animate-in fade-in duration-300">
                    {{
                      contactForm.get('message')?.errors?.['required']
                        ? 'Bericht is verplicht.'
                        : 'Je bericht moet minstens 10 tekens bevatten.'
                    }}
                  </p>
                }
              </div>

              <!-- Submit Button -->
              <div class="col-span-2 pt-4">
                <button
                  type="submit"
                  class="w-full flex items-center justify-center gap-2 px-8 py-3 bg-primary text-fake-white font-bold rounded-md hover:bg-primary-600 transition-all cursor-pointer group"
                >
                  Verstuur bericht
                  <span class=" text-black group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </form>
          } @else {
            <div
              class="w-full md:w-1/2 space-y-8 animate-in fade-in slide-in-from-right duration-500"
            >
              <div class="space-y-2">
                <h1 class="text-fake-white font-bold text-[clamp(4rem,6vw,6rem)] leading-none">
                  Bedankt<span class="text-primary">.</span>
                </h1>
                <p class="text-zinc-400 text-xl md:text-2xl">
                  Ik neem zo snel mogelijk contact met je op!
                </p>
              </div>
              <a
                routerLink="/"
                class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-fake-white font-bold rounded-md hover:bg-primary-600 transition-all group"
              >
                <span class=" text-black group-hover:-translate-x-1 transition-transform">←</span>
                Terug naar home
              </a>
            </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class Contact {
  private fb = inject(FormBuilder);
  submitted = false;

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

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulier verzonden:', this.contactForm.value);
      // Hier de logica voor het verzenden (bijv. een API call)

      this.submitted = true;
      // Scroll naar boven om het succesbericht goed te zien
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Markeer alle velden als 'touched' om validatiefouten te tonen
      this.contactForm.markAllAsTouched();
    }
  }
}
