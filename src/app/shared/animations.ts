import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const reveal = trigger('reveal', [
  transition(':enter, revealed => void', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('700ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const staggerReveal = trigger('staggerReveal', [
  transition(':enter', [
    query('.reveal-item', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger(100, [
        animate('700ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ], { optional: true }),
  ]),
]);
