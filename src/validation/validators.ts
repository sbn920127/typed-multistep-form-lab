import { Validator } from './types';

export function required<T>(): Validator<T> {
    return (value) => value === '' || value === undefined ? '必填' : undefined;
}

export function emailFormat<T>(): Validator<T> {
    return (value) =>
        value && !/.+@.+/.test(value.toString()) ? '信箱格式錯誤' : undefined;
}

export function minLength<T>(min: number): Validator<T> {
    return (value) =>
        value && value.toString().length < min
            ? `至少 ${min} 字`
            : undefined;
}

export function matchField<T, K extends keyof T>(
    key: K
): Validator<T> {
    return (value, allValues) =>
        value === allValues[key] ? undefined : '兩次輸入不一致';
}

