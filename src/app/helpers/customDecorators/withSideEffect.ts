export function withSideEffect<T extends object, Args extends unknown[], R>(
    methodName: keyof T & string
): (originalMethod: (...args: Args) => R) => (this: T, ...args: Args) => R {
    return function (originalMethod) {
        return function (this: T, ...args: Args): R {
            const result = originalMethod.apply(this, args);
            (this[methodName] as (...args: unknown[]) => void).call(this);
            return result;
        };
    };
}