

export abstract class TypeScriptUtils {
    static isString(value: unknown) {
        return value !== null && typeof value === 'string';
    }

    static isStringNotEmpty(value: unknown) {
        return this.isString(value) &&  (value as string).trim() !== '';
    }
}