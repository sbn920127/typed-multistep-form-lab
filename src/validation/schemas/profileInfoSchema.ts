import {ValidationSchema} from "../../validation/validators.ts";
import {ProfileInfo} from "../../types/form.ts";

export const profileInfoSchema: ValidationSchema<ProfileInfo> = {
    fullName: [
        (v) => !v ? "請輸入姓名" : undefined,
        (v) => v.length < 2 ? "姓名至少 2 個字元" : undefined,
    ],
    birthday: [
        (v) => !v ? "請輸入生日" : undefined,
        (v) => isNaN(Date.parse(v)) ? "生日格式錯誤" : undefined,
    ],
    gender: [
        (v) => !v ? "請選擇性別" : undefined,
    ],
}
