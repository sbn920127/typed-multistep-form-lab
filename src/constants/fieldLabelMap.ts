export const fieldLabelMap = {
    email: 'Email',
    password: '密碼',
    confirmPassword: '確認密碼',
    fullName: '姓名',
    birthday: '生日',
    gender: '性別',
    newsletter: '訂閱電子報',
    theme: '主題偏好',
} as const satisfies Record<string, string>;
