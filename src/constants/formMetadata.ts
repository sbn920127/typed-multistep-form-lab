import { basicInfoFields, preferencesFields, profileFields } from "./formFieldConfigs.ts";
import { FormValues } from "../types/form.ts";
import { Step } from "../types/form.ts";
import { buildSchemaFromFields } from "../utils/buildSchemaFromFields.ts";
import { buildFormDefaults } from "../utils/buildFormDefaults.ts";
import { ValidationSchema } from "../validation";
import { FieldConfig } from "../types/fields.ts";

export const allFields: Record<Step, FieldConfig<any>[]> = {
    1: basicInfoFields,
    2: profileFields,
    3: preferencesFields,
};

export const formDefaultValues: FormValues = Object.assign(
    {},
    ...Object.values(allFields).map(buildFormDefaults)
);

export const schemaMap: Record<Step, ValidationSchema<Partial<FormValues>>> = Object.fromEntries(
    Object.entries(allFields).map(([step, fields]) => [
        Number(step),
        buildSchemaFromFields(fields),
    ])
) as Record<Step, ValidationSchema<Partial<FormValues>>>;
