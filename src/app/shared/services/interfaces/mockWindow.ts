export interface IMockWindow {
    matchMedia: (query: string) => MediaQueryList;
    innerWidth: number;
    getComputedStyle: (elt: Element) => CSSStyleDeclaration;
}
