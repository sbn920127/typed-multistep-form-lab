export type FieldProps <T, K extends keyof T> = {
    name: K
    type?: string
    label: string
    value: T[K]
    onChange: (key: K, value: T[K]) => void
    error?: string
}
