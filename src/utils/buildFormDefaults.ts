import { FieldConfig } from "../types/fields.ts";

export const buildFormDefaults = <T>(fields: FieldConfig<T, keyof T>[]): Partial<T> => {
    return fields.reduce((acc, field) => {
        acc[field.key] = field.defaultValue;
        return acc;
    }, {} as Partial<T>);
}


