import {Option} from "../types/form.ts";
import {FieldProps} from "../types/components.ts";

type RadioGroupProps<T, K extends keyof T> = FieldProps<T, K> & {
    options: readonly Option[]
}

const FormRadioGroup = <T, K extends keyof T>({
    label,
    name,
    value,
    options,
    onChange,
    error
}: RadioGroupProps<T, K>) => {
    return (
        <fieldset style={{border: 'none', marginBottom: '1rem'}}>
            <legend>{label}</legend>
            {options.map((option) => {
                console.log(value, option.value);
                return (
                    <label key={option.value}>
                        <input
                            type="radio"
                            name={String(name)}
                            value={option.value}
                            checked={value === option.value}
                            onChange={() => onChange(name, option.value as T[K])}
                        />
                        {option.label}
                    </label>
                )
            })}
            {error && <span style={{color: 'red'}}>{error}</span>}
        </fieldset>
    )
}

export default FormRadioGroup
