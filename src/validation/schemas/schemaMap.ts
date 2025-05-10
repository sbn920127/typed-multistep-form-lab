import {basicInfoSchema} from "./basicInfoSchema.ts";
import {preferencesSchema} from "./preferencesSchema.ts";
import {profileInfoSchema} from "./profileInfoSchema.ts";

export const schemaMap = {
    1: basicInfoSchema,
    2: profileInfoSchema,
    3: preferencesSchema,
}
