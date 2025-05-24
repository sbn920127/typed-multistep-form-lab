import type { Validator } from "../validation/types";

export type Option = {
    label: string
    value: string | number
}

export type FieldComponentType = "input" | "select" | "checkbox" | "radio";

export type FieldConfig<T> = {
    key: keyof T;
    label: string;
    component: FieldComponentType;
    type?: string;
    options?: Option[];
    defaultValue?: T[keyof T];
    validators?: Validator<T>[];
};
