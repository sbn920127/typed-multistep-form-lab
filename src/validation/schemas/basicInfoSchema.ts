import {ValidationSchema} from "../types.ts";
import {BasicInfo} from "../../types/form.ts";

export const basicInfoSchema: ValidationSchema<BasicInfo> = {
    email: [
        (v) => !v ? '請輸入 Email' : undefined,
        (v) => !String(v).includes('@') ? 'Email 格式錯誤' : undefined,
    ],
    password: [
        (v) => !v ? '請輸入密碼' : undefined,
        (v) => String(v).length < 6 ? '密碼至少 6 字' : undefined,
    ],
    confirmPassword: [
        (v) => !v ? '請再次輸入密碼' : undefined,
        (v, all) => v !== all.password ? '兩次密碼不一致' : undefined,
    ],
}
