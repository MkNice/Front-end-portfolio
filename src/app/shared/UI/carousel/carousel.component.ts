import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, PLATFORM_ID, TemplateRef } from '@angular/core';
import { isPlatformBrowser, NgTemplateOutlet } from '@angular/common';
import { withSideEffect } from '../../../helpers/withSideEffect';
@Component({
  selector: 'app-carousel',
  imports: [NgTemplateOutlet],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {
  @Input() public items: { title: string; description: string; image: string; }[] = [];
  @Input() itemTemplate!: TemplateRef<unknown>;
  public activeSlide = 0;

  public slideTransform: string = '';

  public dots: number[] = [];
  private platformId = inject(PLATFORM_ID);

  constructor(private cdr: ChangeDetectorRef) { }

  private mediaQueryLists: MediaQueryList[] = [];
  private mediaQueryListeners: Array<() => void> = [];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupMediaListeners();
      this.updateDots();
      this.updateSlideTransform();
      window.addEventListener('resize', this.resizeHandler);
    }
  }

  private resizeHandler = () => {
    this.activeSlide = 0;
    this.updateDots();
    this.updateSlideTransform();
    this.cdr.detectChanges();
  };

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.resizeHandler);
    }
    this.mediaQueryListeners.forEach(dispose => dispose());

  }

  private setupMediaListeners(): void {
    const queries = [
      '(max-width: 767px)',
      '(min-width: 768px) and (max-width: 1440px)',
      '(min-width: 1441px)'
    ];

    queries.forEach(query => {
      const mql = window.matchMedia(query);
      const listener = () => {
        this.updateDots();
        this.updateSlideTransform();
        this.cdr.detectChanges();
      };
      mql.addEventListener('change', listener);
      this.mediaQueryLists.push(mql);
      this.mediaQueryListeners.push(() => mql.removeEventListener('change', listener));
    });
  }

  private updateDots(): void {
    const visibleCards = this.getVisibleCardsCount();
    const dotCount = Math.ceil(this.items.length / visibleCards);
    this.dots = Array.from({ length: dotCount }, (_, idx) => idx);
  }

  private getVisibleCardsCount(): number {
    const width = window.innerWidth;
    if (width >= 1441) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  private updateSlideTransform(): void {
    const track = document.querySelector('.track') as HTMLElement;
    const slide = track?.querySelector('.slide') as HTMLElement;

    if (!slide || !track) return;

    const visibleCards = this.getVisibleCardsCount();
    const slideRect = slide.getBoundingClientRect();
    const slideWidth = slideRect.width;
    const gap = parseFloat(getComputedStyle(track).gap || '0');

    const offset = this.activeSlide * (slideWidth + gap) * visibleCards;
    this.slideTransform = `translateX(-${offset}px)`;
  }


  @withSideEffect('updateSlideTransform')
  public goToSlide(index: number): void {
    this.activeSlide = index;
  }

  @withSideEffect('updateSlideTransform')
  public changeSlide(direction: 'next' | 'prev'): void {
    const maxIndex = this.dots.length - 1;
    if (direction === 'next') {
      this.activeSlide = this.activeSlide < maxIndex ? this.activeSlide + 1 : 0;
      return;
    }
    this.activeSlide = this.activeSlide > 0 ? this.activeSlide - 1 : maxIndex;
  }
}
