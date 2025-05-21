export const themeOptions = [
    { label: '淺色', value: 'light' },
    { label: '深色', value: 'dark' },
];

export type ThemeValue = typeof themeOptions[number]['value']
