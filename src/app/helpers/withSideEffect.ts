export function withSideEffect(methodName: string): Function {
    return function (originalMethod: any, _context: ClassMethodDecoratorContext) {
        return function (this: any, ...args: any[]) {
            const result = originalMethod.apply(this, args);
            this[methodName].call(this);
            return result;
        }
    };
}