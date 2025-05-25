import { FormStepProps, ProfileInfo } from "../../types/form.ts";
import { genderOptions } from "../../constants/genderOptions.ts";
import { FieldRenderer } from "../FieldRenderer";
import { militaryServiceOptions } from "../../constants/militaryServiceOptions.ts";
import { FieldConfig } from "../../types/fields.ts";

const fields: FieldConfig<ProfileInfo>[] = [
    {
        key: 'fullName',
        label: '姓名',
        component: 'input',
        type: 'text',
    },
    {
        key: 'nickname',
        label: '暱稱',
        component: 'input',
        type: 'text',
    },
    {
        key: 'birthday',
        label: '生日',
        component: 'input',
        type: 'date',
    },
    {
        key: 'gender',
        label: '性別',
        component: 'radio',
        options: genderOptions,
    },
    {
        key: "militaryService",
        label: "兵役狀況",
        component: "select",
        defaultValue: "",
        options: militaryServiceOptions,
        visible: (values: ProfileInfo) => values.gender === genderOptions[0].value, // ✅ 只有男生時顯示
    },
]


export const Step2ProfileInfo = ({values, errors, onChange}: FormStepProps<ProfileInfo>) => {
    return (
        <div>
            <h2>個人資料</h2>
            {fields.map((field) => (
                <FieldRenderer
                    key={field.key as string}
                    field={field}
                    value={values[field.key]}
                    error={errors[field.key]}
                    onChange={onChange}
                    values={values}
                />
            ))}
        </div>
    );
};
