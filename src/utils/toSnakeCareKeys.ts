export function toSnakeCaseKeys<T extends Record<string, any>>(obj: T): Record<string, any> {
    const result: Record<string, any> = {};

    for (const key in obj) {
        const snakeKey = key.replace(/([A-Z])/g, (m) => `_${m.toLowerCase()}`)
        result[snakeKey] = obj[key];
    }

    return result;
}
