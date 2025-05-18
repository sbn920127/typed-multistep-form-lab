import { FormStepProps, FormValues, ProfileInfo } from "../../types/form.ts";
import { FormInput } from "../FormInput";
import { FormRadioGroup } from "../FormRadioGroup";
import { genderOptions } from "../../constants/genderOptions.ts";


export const Step2ProfileInfo = ({values, errors, onChange}: FormStepProps<ProfileInfo>) => {
    return (
        <div>
            <h2>個人資料</h2>
            <FormInput<FormValues, 'fullName'> label={'姓名'} name={'fullName'} value={values.fullName}
                                               error={errors.fullName}
                                               onChange={onChange}/>
            <FormInput<FormValues, 'birthday'> label={'生日'} name={'birthday'} value={values.birthday}
                                               error={errors.birthday} type={'date'}
                                               onChange={onChange}/>
            <FormRadioGroup<FormValues, 'gender'> label={'性別'} name={'gender'} value={values.gender}
                                                  error={errors.gender} options={genderOptions} onChange={onChange}/>
        </div>
    );
};
