import { Directive, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { NativeWindowService } from '../../../services/native-window.service';

@Directive({
  selector: '[appMediaQuerryListener]'
})
export class MediaQuerryListenerDirective implements OnInit, OnDestroy {
  @Output() mediaChange = new EventEmitter<void>();
  private readonly nativeWindow = inject(NativeWindowService)

  private mediaQueryLists: MediaQueryList[] = [];
  private listeners: Array<() => void> = [];

  public ngOnInit() {
    const queries = [
      '(max-width: 767px)',
      '(min-width: 768px) and (max-width: 1440px)',
      '(min-width: 1441px)'
    ];

    queries.forEach(query => {
      const mql = this.nativeWindow.matchMedia(query);
      const listener = () => this.mediaChange.emit();
      if(!mql) return
      mql.addEventListener('change', listener);
      this.mediaQueryLists.push(mql);
      this.listeners.push(() => mql.removeEventListener('change', listener));
    });
  }

  public ngOnDestroy() {
    this.listeners.forEach(dispose => dispose());
  }
}
