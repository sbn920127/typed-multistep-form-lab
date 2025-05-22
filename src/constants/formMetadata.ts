import { basicInfoFields, preferencesFields, profileFields } from "./formFieldconfigs.ts";
import { FieldConfig } from "../types/form.ts";
import { Step } from "../components/FormWrapper/types.ts";
import { buildFormDefaults } from "../utils/buildFormDefaults.ts";
import { buildSchemaFromFields } from "../utils/buildSchemaFromFields.ts";

export const allFields = {
    1: basicInfoFields,
    2: profileFields,
    3: preferencesFields,
} satisfies Record<Step, FieldConfig<never>[]>;

export const formDefaultValues = Object.assign({}, ...Object.values(allFields).map(buildFormDefaults));

export const schemaMap = Object.fromEntries(Object.entries(allFields).map(([step, fields]) => [Number(step), buildSchemaFromFields(fields)]));
