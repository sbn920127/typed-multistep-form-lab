import { FieldConfig } from "../types/form.ts";

export const buildFormDefaults = <T>(fields: FieldConfig<T>[]): Partial<T> => {
    const result = {} as Partial<T>;
    fields.forEach((f) => {
        result[f.key] = f.defaultValue ?? '';
    })
    return result;
}


