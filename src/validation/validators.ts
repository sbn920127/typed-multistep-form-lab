type Validator<T> = (value: T[keyof T], allValues: T) => string | undefined

export type ValidationSchema<T> = {
    [K in keyof T]?: Validator<T>[]
}

export function validate<T>(values: T, schema: ValidationSchema<T> ): Partial<Record<keyof T, string>> {
    const errors: Partial<Record<keyof T, string>> = {}

    for (const key in schema) {
        const rules = schema[key]
        const value = values[key as keyof T]
        if (!rules) continue

        for (const rule of rules) {
            const error = rule(value, values)
            if (error) {
                errors[key as keyof T] = error
                break // 一欄只顯示一個錯誤
            }
        }
    }

    return errors
}
