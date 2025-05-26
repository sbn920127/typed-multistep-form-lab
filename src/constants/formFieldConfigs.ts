import { BasicInfo, Preferences, ProfileInfo } from "../types/form.ts";
import { themeOptions } from "./themeOptions.ts";
import { genderOptions } from "./genderOptions.ts";
import { emailFormat, matchField, minLength, required } from "../validation";
import { FieldConfig } from "../types/fields.ts";
import { militaryServiceOptions } from "./militaryServiceOptions.ts";

export const basicInfoFields: FieldConfig<BasicInfo>[] = [
    {
        key: "email",
        label: "Email",
        type: "email",
        component: "input",
        defaultValue: "",
        validators: [required(), emailFormat()]
    },
    {
        key: "password",
        label: "密碼",
        type: "password",
        component: "input",
        defaultValue: "",
        validators: [required(), minLength(6)]
    },
    {
        key: "confirmPassword",
        label: "確認密碼",
        component: "input",
        type: "password",
        defaultValue: "",
        validators: [required(), matchField("password")]
    },
];

export const profileFields: FieldConfig<ProfileInfo>[] = [
    {key: "fullName", label: "姓名", component: "input", type: 'text', defaultValue: "", validators: [required()]},
    {key: "nickname", label: "暱稱", component: "input", type: 'text', defaultValue: ""},
    {key: "birthday", label: "生日", component: "input", type: "date", defaultValue: "", validators: [required()]},
    {
        key: "gender",
        label: "性別",
        component: "radio",
        defaultValue: "",
        options: genderOptions,
        validators: [required()]
    },
    {
        key: "militaryService",
        label: "兵役狀況",
        component: "select",
        defaultValue: "",
        options: militaryServiceOptions,
        visible: (values: ProfileInfo) => values.gender === genderOptions[0].value, // ✅ 只有男生時顯示
    },
];

export const preferencesFields: FieldConfig<Preferences>[] = [
    {key: "newsletter", label: "訂閱電子報", component: "checkbox", defaultValue: false},
    {
        key: "theme",
        label: "主題",
        component: "select",
        defaultValue: "",
        options: themeOptions,
        validators: [required()]
    },
];
