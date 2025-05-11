import {Option} from "../types/form.ts";
import {FieldProps} from "../types/components.ts";

type SelectProps<T, K extends keyof T> = FieldProps<T, K> & {
    options: readonly Option[]
}

const FormSelect = <T, K extends keyof T>({
    label,
    name,
    value,
    options,
    onChange,
    error
}: SelectProps<T, K>) => {
    return (
        <div>
            <label>
                {label}：
                <select
                    value={value as string | number}
                    onChange={(e) => onChange(name, e.target.value as T[K])}
                >
                    {options.map((option) => {
                        console.log(value, option.value);
                        return (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        )
                    })}
                </select>
            </label>
            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    )
}

export default FormSelect
