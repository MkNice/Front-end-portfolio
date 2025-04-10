export function runIf(methodName: string): Function {
    return function (originalMethod: Function, _context: ClassMethodDecoratorContext) {
        return function (this: any, ...args: unknown[]) {
            const isPassed = this[methodName].call(this);
            if (!isPassed) {
                return;
            }
            const result = originalMethod.apply(this, args);
            return result;
        }
    };
}