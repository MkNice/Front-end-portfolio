import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appResizeListener]'
})
export class ResizeListenerDirective {
  @Output() resized = new EventEmitter<void>();
  public idSetTimeout?: ReturnType<typeof setTimeout>;;

  @HostListener('window:resize')
  onResize() {
    clearTimeout(this.idSetTimeout);
    this.idSetTimeout = setTimeout(() => {
      this.resized.emit();
    }, 100)
  }
  ngOnDestroy(): void {
    this.idSetTimeout && clearTimeout(this.idSetTimeout);
  }
}