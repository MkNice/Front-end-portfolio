import { Directive, EventEmitter, HostListener, Output, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appResizeListener]'
})
export class ResizeListenerDirective implements OnDestroy {
  @Output() public resized = new EventEmitter<void>();
  public idSetTimeout?: ReturnType<typeof setTimeout>;;

  @HostListener('window:resize')
  public onResize(): void {
    clearTimeout(this.idSetTimeout);
    this.idSetTimeout = setTimeout(() => {
      this.resized.emit();
    }, 1000 )
  }
  public ngOnDestroy(): void {
    if (this.idSetTimeout) {
      clearTimeout(this.idSetTimeout);
    }
  }
}