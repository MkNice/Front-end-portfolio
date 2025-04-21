export function runIf<T extends object, Args extends unknown[], R>(
  methodName: keyof T & string
): (originalMethod: (...args: Args) => R) => (this: T, ...args: Args) => R | void {
  return function (originalMethod) {
    return function (this: T, ...args: Args): R | void {
      const isPassed = (this[methodName] as (...args: unknown[]) => boolean).call(this);
      console.warn('runIf decorator', this[methodName], isPassed);
      if (!isPassed) return;
      const result = originalMethod.apply(this, args);
      return result;
    };
  };
}