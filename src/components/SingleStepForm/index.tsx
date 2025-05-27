import { FieldConfig } from "../../types/fields.ts";
import { useState } from "react";
import { buildFormDefaults } from "../../utils/buildFormDefaults.ts";
import { buildSchemaFromFields } from "../../utils/buildSchemaFromFields.ts";
import { validate } from "../../validation";
import { FieldRenderer } from "../FieldRenderer";

type Props<T> = {
    fields: FieldConfig<T>[];
    onSubmit: (data: T) => void;
}

export const SingleStepForm = <T, >({fields, onSubmit}: Props<T>) => {
    const [values, setValues] = useState(() => buildFormDefaults(fields) as T);
    const [errors, setErrors] = useState<Partial<Record<keyof T, string
    >>>({});

    const onChange = <K extends keyof T>(key: K, value: T[K]) => {
        setValues((prev) => ({ ...prev, [key]: value }));
        setErrors((prev) => ({ ...prev, [key]: undefined })); // Clear error for the field
    }

    const handleSubmit = () => {
        const schema = buildSchemaFromFields(fields);
        const result = validate(values, schema);

        if (Object.keys(result).length > 0) {
            setErrors(result);
            return;
        }

        onSubmit(values);
    }

    return (
        <form>
            {
                fields.map((field) => {
                    return <FieldRenderer key={field.key as string} field={field} value={values[field.key]} error={errors[field.key]} onChange={onChange} values={values} />
                })
            }
            <button type="button" onClick={handleSubmit}>
                送出
            </button>
        </form>
    );
}
