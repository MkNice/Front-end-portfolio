import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
  inject,
} from '@angular/core';
import { IS_BROWSER } from '../../../shared/platform.tokens';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit {
  private readonly isBrowser = inject(IS_BROWSER)

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }
          setTimeout(() => {
            this.renderer.addClass(this.el.nativeElement, 'reveal');
          },200);
          obs.unobserve(this.el.nativeElement);
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(this.el.nativeElement);
  }
}