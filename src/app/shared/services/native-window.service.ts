import { inject, Injectable, } from '@angular/core';
import { runIf } from '../../helpers/runIf';
import { IS_BROWSER } from '../platform.tokens';

@Injectable({
  providedIn: 'root'
})
export class NativeWindowService {
  private readonly isBrowser = inject(IS_BROWSER);

  protected checkPlatform(): boolean {
    return this.isBrowser
  }

  @runIf('checkPlatform')
  public matchMedia(query: string): MediaQueryList {
    return window.matchMedia(query);
  }
  @runIf('checkPlatform')
  public get innerWidth(): number {
    return window.innerWidth;
  }
  @runIf('checkPlatform')
  public getComputedStyle(elt: Element, _pseudoElt?: string | null): CSSStyleDeclaration {
    return window.getComputedStyle(elt)
  }
}
