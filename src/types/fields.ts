import type { Validator } from "../validation/types";

export type Option = {
    label: string
    value: string | number
}

export type FieldComponentType = "input" | "select" | "checkbox" | "radio";

export type FieldConfig<T, K extends keyof T = keyof T> = {
    key: K;
    label: string;
    component: FieldComponentType;
    type?: string;
    options?: Option[];
    defaultValue?: T[K];
    validators?: Validator<T>[];
    visible?: (values: T) => boolean;
    disabled?: (values: T) => boolean;
    readonly?: (values: T) => boolean;
};
