export function mapApiFieldErrors<T>(apiErrors: Record<string, string>): Partial<Record<keyof T, string>> {
    const result: Partial<Record<keyof T, string>> = {};

    for (const key in apiErrors) {
        const camelKey = key.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
        result[camelKey as keyof T] = apiErrors[key];
    }

    return result;
}
