import { basicInfoFields, preferencesFields, profileFields } from "./formFieldConfigs.ts";
import { BasicInfo, FormValues, Preferences, ProfileInfo } from "../types/form.ts";
import { Step } from "../types/form.ts";
import { buildSchemaFromFields } from "../utils/buildSchemaFromFields.ts";
import { buildFormDefaults } from "../utils/buildFormDefaults.ts";
import { FieldConfig } from "../types/fields.ts";
import { ValidationSchema } from "../validation";

export const allFields = {
    1: basicInfoFields,
    2: profileFields,
    3: preferencesFields,
} satisfies {
    1: FieldConfig<BasicInfo>[];
    2: FieldConfig<ProfileInfo>[];
    3: FieldConfig<Preferences>[];
}

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
