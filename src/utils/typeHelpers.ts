type SnakeCase<S extends string> =
    S extends `${infer T}${infer U}`
        ? U extends Uncapitalize<U>
            ? `${Lowercase<T>}${SnakeCase<U>}`
            : `${Lowercase<T>}_${SnakeCase<U>}`
        : S

export type ToSnakeCaseKeys<T> = {
    [K in keyof T as SnakeCase<Extract<K, string>>]: T[K]
}
