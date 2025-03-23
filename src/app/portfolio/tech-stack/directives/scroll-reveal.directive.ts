import {
  Directive,
  ElementRef,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements AfterViewInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngAfterViewInit(): void {
    if (!(typeof window !== 'undefined' && 'IntersectionObserver' in window)) {
      return;
    }
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