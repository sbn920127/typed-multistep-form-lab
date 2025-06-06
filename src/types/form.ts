import {GenderValue} from "../constants/genderOptions.ts";
import {ThemeValue} from "../constants/themeOptions.ts";
import { formSteps } from "../constants/formSteps.ts";
import { MilitaryServiceValue } from "../constants/militaryServiceOptions.ts";

export type BasicInfo = {
    email: string,
    password: string,
    confirmPassword: string,
}

export type ProfileInfo = {
    fullName: string,
    nickname: string,
    birthday: string,
    gender: GenderValue,
    militaryService: MilitaryServiceValue,
}

export type Preferences = {
    newsletter: boolean,
    theme: ThemeValue,
}

export type FormValues  = BasicInfo & ProfileInfo & Preferences

export type FormErrors<T> = {
    [key in keyof T]?: string
}

export type FormStepProps<T> = {
    values: T,
    errors: FormErrors<T>,
    onChange: <K extends keyof T>(field: keyof T, value: T[K]) => void,
}

export type Step = typeof formSteps[number]['id'];




