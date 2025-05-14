import { Validator } from './types'
import { FormValues } from '../types/form'
export function required<T>(): Validator<Partial<T>> {
    return (value) => value === '' || value === undefined ? '必填' : undefined
}

export function emailFormat<T>(): Validator<Partial<T>> {
    return (value) => {
        if (value !== undefined && value !== null) {
            return /.+@.+/.test(value.toString()) ? undefined : '信箱格式錯誤'
        }
    }
}

export function minLength<T>(min: number): Validator<Partial<T>> {
    return (value) => {
        if (value !== undefined && value !== null) {
            return  value.toString().length >= min ? undefined : `至少 ${min} 字`;
        }
    }
}

export function matchField<K extends keyof FormValues>(key: K): Validator<Partial<FormValues>> {
    return (value, allValues) => value === allValues[key] ? undefined : '兩次輸入不一致'
}
