import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

import { ResizeListenerDirective } from './directives/resize-listener.directive';
import { MediaQuerryListenerDirective } from './directives/media-querry-listener.directive';
import { CarouselTrackDirective } from './directives/carousel-track.directive';
import { NativeWindowService } from '../../services/native-window.service';
import { ISectionItem } from '../../interfaces/section';
import { IS_BROWSER } from '../../tokens/platform.tokens';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgTemplateOutlet,
    CarouselTrackDirective,
    ResizeListenerDirective,
    MediaQuerryListenerDirective,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnChanges {
  @Input() public items: ISectionItem[] = [];
  @Input() public itemTemplate!: TemplateRef<unknown>;

  public activeSlide = 0;
  public trackGap = 0;
  public dots: number[] = [];

  private readonly nativeWindow = inject(NativeWindowService);
  private readonly isBrowser = inject(IS_BROWSER);

  public constructor(private cdr: ChangeDetectorRef) { }

  public get visibleCards(): number {
    const width = this.nativeWindow.getInnerWidth();
    if (width >= 1441) return 3;
    if (width >= 768) return 2;
    return 1;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['items']) {
      this.updateDots();
    }
  }

  public checkPlatform(): boolean {
    return this.isBrowser;
  }

  public onResizeOrMediaChange(): void {
    this.activeSlide = 0;
    this.updateDots();
    this.cdr.detectChanges();
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

  private updateDots(): void {
    const count = Math.ceil(this.items.length / this.visibleCards);
    this.dots = Array.from({ length: count }, (_, i) => i);
  }
}
