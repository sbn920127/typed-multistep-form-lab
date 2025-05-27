import { SingleStepForm } from "./index.tsx";
import { required, emailFormat } from '../../validation';
import { FieldConfig } from "../../types/fields.ts";

type TestData = {
    email: string;
    age: number;
};

const testFields: FieldConfig<TestData>[] = [
    {
        key: 'email',
        label: 'Email',
        component: 'input',
        type: 'email',
        defaultValue: '',
        validators: [required(), emailFormat()],
    },
    {
        key: 'age',
        label: '年齡',
        component: 'input',
        type: 'number',
        defaultValue: 18,
    },
];

export default {
    title: 'Forms/SingleStepForm',
    component: SingleStepForm,
};

export const Basic = () => (
    <SingleStepForm<TestData>
        fields={testFields}
        onSubmit={(data) => console.log('送出資料：', data)}
    />
);
