import { inject, Injectable, } from '@angular/core';
import { IS_BROWSER } from '../tokens/platform.tokens';
import { IMockWindow } from './interfaces/mockWindow';

@Injectable({
  providedIn: 'root'
})
export class NativeWindowService {
  private readonly mockWindow: IMockWindow = {
    matchMedia: () => ({
      matches: false,
      media: '',
      onchange: null,
      addListener: (): void => {
        console.log('mock method');
      },
      removeListener: (): void => {
        console.log('mock method');
      },
      addEventListener: (): void => {
        console.log('mock method');
      },
      removeEventListener: (): void => {
        console.log('mock method');
      },
      dispatchEvent: () => false,
    }),
    innerWidth: 0,
    getComputedStyle: () => ({} as CSSStyleDeclaration),
  };
  private readonly isBrowser: boolean = inject(IS_BROWSER);

  public get window(): Window | IMockWindow {
    if (this.isBrowser) return window;
    return this.mockWindow;
  }

  public matchMedia(query: string): MediaQueryList {
    return this.window.matchMedia(query);
  }

  public getInnerWidth(): number {
    return this.window.innerWidth;
  }

  public getComputedStyle(elt: Element): CSSStyleDeclaration {
    return this.window.getComputedStyle(elt);
  }
}
