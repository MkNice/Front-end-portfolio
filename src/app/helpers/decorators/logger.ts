export function logger<T extends object, Args extends unknown[], R>(message: string = "LOG:")
    : (originalMethod: (...args: Args) => R, context: ClassMethodDecoratorContext<T, (...args: Args) => R>) => (this: T, ...args: Args) => R {
    return function (originalMethod, context) {
        const methodName = String(context.name);
        return function (this, ...args) {
            console.log(`${message} Method name call'${methodName}'.`);
            console.log(`With args:`, args);
            const result = originalMethod.call(this, ...args);
            console.log(`${message} Return method`, result)
            return result;
        }
    }
}