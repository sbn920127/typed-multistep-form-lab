import { BasicInfo, FieldConfig, Preferences, ProfileInfo } from "../types/form.ts";
import { themeOptions } from "./themeOptions.ts";
import { genderOptions } from "./genderOptions.ts";
import { emailFormat, matchField, minLength, required } from "../validation";

export const basicInfoFields: FieldConfig<BasicInfo>[] = [
    { key: "email", label: "Email", component: "input", type: "email", defaultValue: "", validators: [required(), emailFormat()] },
    { key: "password", label: "密碼", component: "input", type: "password", defaultValue: "", validators: [required(), minLength(6)] },
    { key: "confirmPassword", label: "確認密碼", component: "input", type: "password", defaultValue: "", validators: [required(), matchField("password")] },
];

export const profileFields: FieldConfig<ProfileInfo>[] = [
    { key: "fullName", label: "姓名", component: "input", defaultValue: "", validators: [required()] },
    { key: "birthday", label: "生日", component: "input", type: "date", defaultValue: "", validators: [required()] },
    { key: "gender", label: "性別", component: "radio", defaultValue: "", options: genderOptions, validators: [required()] },
];

export const preferencesFields: FieldConfig<Preferences>[] = [
    { key: "newsletter", label: "訂閱電子報", component: "checkbox", defaultValue: false },
    { key: "theme", label: "主題", component: "select", defaultValue: "", options: themeOptions, validators: [required()] },
];
