import {FormStepProps, FormValues, Preferences} from "../../types/form.ts";
import FormCheckbox from "../FormCheckbox";
import FormSelect from "../FormSelect";
import {themeOptions} from "../../constants/themeOptions.ts";

const Step3Preferences = ({values, errors, onChange} : FormStepProps<Preferences> ) => {
    return (
        <div>
            <h2>偏好設定</h2>
            <FormCheckbox<FormValues, 'newsletter'> label={'訂閱電子報'} name={'newsletter'} value={values.newsletter} error={errors.newsletter} onChange={onChange} />
            <FormSelect<FormValues, 'theme'> label={'主題'} name={'theme'} value={values.theme} error={errors.theme} options={themeOptions} onChange={onChange} />
        </div>
    );
};

export default Step3Preferences;
