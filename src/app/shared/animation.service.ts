import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private platformId = inject(PLATFORM_ID);

  constructor() {}

  /**
   * Initializes a global IntersectionObserver to handle .reveal animations.
   * This should ideally be called once in the app root component.
   */
  initScrollObserver(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const observerOptions: IntersectionObserverInit = {
      root: null, // Use viewport
      threshold: 0.3, // Trigger when 10% is visible
      rootMargin: '0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, we don't need to observe it anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all existing elements with 'reveal' class
    this.observeNewElements(observer);

    // MutationObserver to catch elements added dynamically later (optional but recommended)
    const mutationObserver = new MutationObserver(() => {
      this.observeNewElements(observer);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  private observeNewElements(observer: IntersectionObserver): void {
    const elements = document.querySelectorAll('.reveal:not(.active)');
    elements.forEach((el) => observer.observe(el));
  }
}
