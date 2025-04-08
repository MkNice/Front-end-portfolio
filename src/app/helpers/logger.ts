export function logger(message = "LOG:") {
    return function (originalMethod: Function, context: ClassMethodDecoratorContext) {
        const methodName = String(context.name);
        return function (this: ThisType<unknown>, ...args: unknown[]) {
            console.log(`${message} Method name call'${methodName}'.`);
            console.log(`With args:`, args);
            const result = originalMethod.call(this, ...args);
            console.log(`${message} Return method`, result)
            return result;
        }
    }
}