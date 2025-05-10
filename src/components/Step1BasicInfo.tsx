import {BasicInfo, FormStepProps, FormValues} from '../types/form'
import FormInput from "./FormInput.tsx";

const Step1BasicInfo = ({values, errors, onChange}: FormStepProps<BasicInfo>) => {
    return (
        <div>
            <h2>基本資料</h2>
            <FormInput<FormValues, 'email'> label={"Email"} name={'email'} value={values.email} error={errors.email} type={'email'} onChange={onChange} />
            <FormInput<FormValues, 'password'> label={'密碼'} name={'password'} value={values.password} error={errors.password} type={'password'} onChange={onChange} />
            <FormInput<FormValues, 'confirmPassword'> label={'確認密碼'} name={'confirmPassword'} value={values.confirmPassword} error={errors.confirmPassword} type={'password'} onChange={onChange} />
        </div>
    );
};

export default Step1BasicInfo;
