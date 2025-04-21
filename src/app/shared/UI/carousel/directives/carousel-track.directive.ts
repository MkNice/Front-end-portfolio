import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  Renderer2,
} from '@angular/core';
import { NativeWindowService } from '../../../services/native-window.service';

@Directive({
  selector: '[appCarouselTrack]'
})
export class CarouselTrackDirective implements OnChanges {
  @Input() public activeSlide = 0;
  @Input() public triggerUpdate = 0;
  @Output() public gapChange = new EventEmitter<number>();

  private readonly nativeWindow = inject(NativeWindowService);
  public constructor(private el: ElementRef, private renderer: Renderer2) { }

  private get visibleCards(): number {
    const width = this.nativeWindow.getInnerWidth();
    if (width >= 1441) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  private get gap(): number {
    const track = this.el.nativeElement as HTMLElement;
    const style = this.nativeWindow.getComputedStyle(track);
    return parseFloat(style.gap || '0');
  }

  public ngOnChanges(): void {
    this.gapChange.emit(this.gap);
    this.updateTransform();
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
