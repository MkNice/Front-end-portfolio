import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { ResizeListenerDirective } from './directives/resize-listener.directive';
import { MediaQuerryListenerDirective } from './directives/media-querry-listener.directive';
import { CarouselTrackDirective } from './directives/carousel-track.directive';
import { CarouselItem } from './interfaces/carousel';
import { NativeWindowService } from '../../services/native-window.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    CarouselTrackDirective,
    ResizeListenerDirective,
    MediaQuerryListenerDirective
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent {
  @Input() public items: CarouselItem[] = [];
  @Input() public itemTemplate!: TemplateRef<unknown>;
  private readonly nativeWindow = inject(NativeWindowService)

  public activeSlide = 0;
  public trackGap = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  public onResizeOrMediaChange(): void {
    this.activeSlide = 0;
    this.cdr.detectChanges();
  }

  public get visibleCards(): number {
    const width = this.nativeWindow.innerWidth;
    if (width >= 1441) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  public get dots(): number[] {
    const count = Math.ceil(this.items.length / this.visibleCards);
    return Array.from({ length: count }, (_, i) => i);
  }

  public goToSlide(index: number): void {
    this.activeSlide = index;
  }

  public changeSlide(direction: 'next' | 'prev'): void {
    const max = this.dots.length;
    this.activeSlide =
      direction === 'next'
        ? (this.activeSlide + 1) % max
        : (this.activeSlide - 1 + max) % max;
  }
}
