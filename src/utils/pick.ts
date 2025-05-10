export function pick<T extends object>(obj: T, keys: (keyof T)[]): Partial<T> {
    const result: Partial<T> = {};
    keys.forEach(key => {
        result[key] = obj[key];
    })
    return result;
}
