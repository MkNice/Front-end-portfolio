import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { NativeWindowService } from '../../../services/native-window.service';

@Directive({
  selector: '[appCarouselTrack]'
})
export class CarouselTrackDirective implements OnChanges {
  @Input() activeSlide = 0;
  @Input() triggerUpdate = 0;
  @Output() gapChange = new EventEmitter<number>();

  private readonly nativeWindow = inject(NativeWindowService);

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges(_changes: SimpleChanges): void {
    this.gapChange.emit(this.gap);
    this.updateTransform();
  }

  private get visibleCards(): number {
    const width = this.nativeWindow.innerWidth;
    if (width >= 1441) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  private get gap(): number {
    const track = this.el.nativeElement as HTMLElement;
    const style = this.nativeWindow.getComputedStyle(track);
    return parseFloat(style?.gap || '0');
  }

  private updateTransform(): void {
    const track = this.el.nativeElement as HTMLElement;
    const slide = track.querySelector('.slide') as HTMLElement;
    if (!slide) return;

    const slideWidth = slide.getBoundingClientRect().width;
    const offset = this.calculateOffset(track.children.length, slideWidth);

    this.renderer.setStyle(track, 'transform', `translateX(-${offset}px)`);
  }

  private calculateOffset(totalSlides: number, slideWidth: number): number {
    const slidesPerPage = this.visibleCards;
    const startIndex = this.activeSlide * slidesPerPage;
    const maxStartIndex = Math.max(0, totalSlides - slidesPerPage);
    const safeStartIndex = Math.min(startIndex, maxStartIndex);

    return safeStartIndex * (slideWidth + this.gap);
  }
}
