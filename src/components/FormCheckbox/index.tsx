import {FieldProps} from "../../types/components.ts";

export const FormCheckbox = <T, K extends keyof T>({
    label,
    name,
    value,
    onChange,
    error
}: FieldProps<T, K>) => {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={value as boolean}
                    onChange={(e) => onChange(name, e.target.checked as T[K])}
                />
                {label}
            </label>
            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    )
}
