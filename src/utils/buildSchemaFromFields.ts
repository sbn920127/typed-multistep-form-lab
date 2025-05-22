import { FieldConfig } from "../types/form.ts";
import { ValidationSchema } from "../validation";

export const buildSchemaFromFields = <T>(fields: FieldConfig<T>[]): ValidationSchema<T> => {
    const result = {} as ValidationSchema<T>;
    fields.forEach((f) => {
        if (f.validators) {
            result[f.key] = f.validators;
        }
    })
    return result;
}
