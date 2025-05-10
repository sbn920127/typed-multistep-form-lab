export const genderOptions = [
    { label: '男', value: 1 },
    { label: '女', value: 2 },
    { label: '其他', value: 3 },
] as const

export type GenderValue = typeof genderOptions[number]['value']


