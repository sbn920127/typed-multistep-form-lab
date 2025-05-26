import { FieldConfig } from "../../types/fields.ts";
import { FormInput } from "../FormInput";
import { FormSelect } from "../FormSelect";
import { FormCheckbox } from "../FormCheckbox";
import { FormRadioGroup } from "../FormRadioGroup";

type Props<T, K extends keyof T> = {
    field: FieldConfig<T> & { key: K };
    value: T[K];
    error?: string;
    onChange: (key: K, value: T[K]) => void;
    values: T;
};

export function FieldRenderer<T, K extends keyof T>({field, value, error, onChange, values}: Props<T, K>) {
    const {
        key,
        label,
        component,
        type,
        options,
        disabled,
        readonly,
    } = field;

    const isDisabled = disabled?.(values);
    const isReadonly = readonly?.(values);


    switch (component) {
        case 'input':
            return (
                <FormInput name={key} label={label} type={type || 'text'} value={value} error={error} onChange={onChange} disabled={isDisabled} readOnly={isReadonly} />
            )
        case 'select':
            return (
                <FormSelect name={key} label={label} value={value} error={error} onChange={onChange} options={options ?? []} disabled={isDisabled} readOnly={isReadonly} />
            )
        case 'checkbox':
            return (
                <FormCheckbox name={key} label={label} value={value} error={error} onChange={onChange} disabled={isDisabled} readOnly={isReadonly} />
            )
        case 'radio':
            return (
                <FormRadioGroup name={key} label={label} value={value} error={error} onChange={onChange} options={options ?? []} disabled={isDisabled} readOnly={isReadonly} />
            )
        default:
            return null;
    }
}
