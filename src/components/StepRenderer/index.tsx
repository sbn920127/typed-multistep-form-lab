import { FieldRenderer } from "../FieldRenderer";
import { FieldConfig } from "../../types/fields.ts";
import { FormErrors } from "../../types/form.ts";

type Props<T> = {
    fields: FieldConfig<T>[];
    values: T;
    errors: FormErrors<T>;
    onChange: <K extends keyof T>(key: K, value: T[K]) => void;
}

const StepRenderer = <T, > ({ fields, values, errors, onChange }: Props<T>) => {
    return (
        <>
            {fields.map((field: FieldConfig<T>) => {
                if (field.visible && !field.visible(values)) return null;

                return (
                    <FieldRenderer
                        key={field.key as string}
                        field={field}
                        value={values[field.key]}
                        error={errors[field.key]}
                        onChange={onChange}
                        values={values}
                    />
                );
            })}
        </>
    )
}

export default StepRenderer;
