import { FieldConfig, FormStepProps, Preferences } from "../../types/form.ts";
import { themeOptions } from "../../constants/themeOptions.ts";
import { FieldRenderer } from "../FieldRenderer";

const fields: FieldConfig<Preferences>[] = [
    {
        key: 'newsletter',
        label: '訂閱電子報',
        component: 'checkbox',
    },
    {
        key: 'theme',
        label: '主題',
        component: 'select',
        options: themeOptions,
    },
]

export const Step3Preferences = ({values, errors, onChange}: FormStepProps<Preferences>) => {
    return (
        <div>
            <h2>偏好設定</h2>
            {
                fields.map((field) => (
                    <FieldRenderer key={field.key as string}
                                   field={field}
                                   value={values[field.key]}
                                   error={errors[field.key]}
                                   onChange={onChange}
                    />
                ))
            }
        </div>
    );
};
