import { Directive, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { NativeWindowService } from '../../../services/native-window.service';

@Directive({
  selector: '[appMediaQuerryListener]'
})
export class MediaQuerryListenerDirective implements OnInit, OnDestroy {
  @Output() public mediaChange = new EventEmitter<void>();
  private readonly nativeWindow = inject(NativeWindowService)

  private mediaQueryLists: MediaQueryList[] = [];
  private listeners: (() => void)[] = [];

  public ngOnInit(): void {
    this.listenToMediaChanges();
  }
  public ngOnDestroy(): void {
    this.listeners.forEach(dispose => dispose());
  }

  private listenToMediaChanges(): void {
    const queries = [
      '(max-width: 767px)',
      '(min-width: 768px) and (max-width: 1440px)',
      '(min-width: 1441px)'
    ];

    queries.forEach(query => {
      const mql = this.nativeWindow.matchMedia(query);
      const listener = (): void => this.mediaChange.emit();

      mql.addEventListener('change', listener);
      this.mediaQueryLists.push(mql);
      this.listeners.push(() => mql.removeEventListener('change', listener));
    });
  }
}
