import {ValidationSchema} from "../../validation/types.ts";
import {FormValues} from "../../types/form.ts";
import {required, emailFormat, minLength, matchField} from "../../validation/validators.ts";
import {Step} from "./types.ts";

export const schemaMap: Record<Step, ValidationSchema<Partial<FormValues>>> = {
    1: {
        email: [required(), emailFormat()],
        password: [required(), minLength(6)],
        confirmPassword: [required(), matchField('password')],
    },
    2: {
        fullName: [required()],
        birthday: [required()],
        gender: [required()],
    },
    3: {
        newsletter: [],
        theme: [required()],
    }
}
