import {FieldProps} from "../types/components.ts";

const FormInput = <T, K extends keyof T>({ label, name, value, error, type = 'text', onChange }: FieldProps<T, K>) => {
    return (
        <div>
            <label>
                {label}：
                <input
                    type={type}
                    value={value as string}
                    onChange={(e) => onChange(name, e.target.value as T[K])}
                />
                {error && <span style={{ color: 'red' }}>{error}</span>}
            </label>
        </div>
    )
}

export default FormInput
