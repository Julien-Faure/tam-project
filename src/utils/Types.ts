export function isUndefined(value: any): boolean {
    return value === undefined;
}

export function isNotUndefined(value: any): boolean {
    return !isUndefined(value);
}

export function isDate(value: any): boolean {
    return value instanceof Date && isFinite(+value);
}

export function orDefault<T>(value: T | undefined, defaultValue: T): T {
    return value !== undefined ? value : defaultValue;
}

export function isNull(value: any): boolean {
    return value === null;
}

export function isNotNull(value: any): boolean {
    return !isNull(value);
}