import {GenderValue} from "../constants/genderOptions.ts";
import {ThemeValue} from "../constants/themeOptions.ts";

export type BasicInfo = {
    email: string
    password: string
    confirmPassword: string
}

export type ProfileInfo = {
    fullName: string
    birthday: string
    gender: GenderValue
}

export type Preferences = {
    newsletter: boolean
    theme: ThemeValue
}

export type FormValues  = BasicInfo & ProfileInfo & Preferences

export type FormErrors<T> = {
    [key in keyof T]?: string
}

export type FormStepProps<T> = {
    values: T
    errors: FormErrors<T>
    onChange: <K extends keyof T>(field: keyof T, value: T[K]) => void
}

export type Option = {label: string; value: string | number}




