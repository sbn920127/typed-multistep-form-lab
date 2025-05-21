import { FieldConfig } from "../../types/form.ts";
import { FormInput } from "../FormInput";
import { FormSelect } from "../FormSelect";
import { FormCheckbox } from "../FormCheckbox";
import { FormRadioGroup } from "../FormRadioGroup";

type Props<T> = {
    field: FieldConfig<T>;
    value: T[keyof T];
    error?: string;
    onChange: (key: keyof T, value: T[keyof T]) => void;
};

export function FieldRenderer<T>({field, value, error, onChange}: Props<T>) {
    switch (field.component) {
        case 'input':
            return (
                <FormInput name={field.key} label={field.label} type={field.type || 'text'} value={value as string} error={error} onChange={onChange} />
            )
        case 'select':
            return (
                <FormSelect name={field.key} label={field.label} value={value as string} error={error} onChange={onChange} options={field.options ?? []} />
            )
        case 'checkbox':
            return (
                <FormCheckbox name={field.key} label={field.label} value={value as string} error={error} onChange={onChange} />
            )
        case 'radio':
            return (
                <FormRadioGroup name={field.key} label={field.label} value={value as string} error={error} onChange={onChange} options={field.options ?? []} />
            )
        default:
            return null;
    }
}
