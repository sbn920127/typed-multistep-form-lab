import { BasicInfo, FormStepProps } from '../../types/form'
import { FieldRenderer } from "../FieldRenderer";
import { FieldConfig } from "../../types/fields.ts";

const fields: FieldConfig<BasicInfo>[] = [
    {
        key: 'email',
        label: 'Email',
        type: 'email',
        component: 'input',
    },
    {
        key: 'password',
        label: '密碼',
        type: 'password',
        component: 'input',
    },
    {
        key: 'confirmPassword',
        label: '確認密碼',
        type: 'password',
        component: 'input',
    },
]

export const Step1BasicInfo = ({values, errors, onChange}: FormStepProps<BasicInfo>) => {
    return (
        <>
            <h2>基本資料</h2>
            {
                fields.map(field => (
                    <FieldRenderer key={field.key as string}
                                   field={field}
                                   value={values[field.key]}
                                   error={errors[field.key]}
                                   onChange={onChange}
                                   values={values}
                    />
                ))
            }
        </>
    );
};
