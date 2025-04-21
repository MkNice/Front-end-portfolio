import { inject, PLATFORM_ID, InjectionToken } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const IS_BROWSER = new InjectionToken<boolean>(
  'IS_BROWSER',
  {
    providedIn: 'root',
    factory: (): boolean => isPlatformBrowser(inject(PLATFORM_ID))
  }
);
