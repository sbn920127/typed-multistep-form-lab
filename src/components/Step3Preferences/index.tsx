import { FormStepProps, Preferences } from "../../types/form.ts";
import StepRenderer from "../StepRenderer";
import { preferencesFields } from "../../constants/formFieldConfigs.ts";

export const Step3Preferences = (props: FormStepProps<Preferences>) => {
    return (
        <div>
            <h2>偏好設定</h2>
            <StepRenderer {...props} fields={preferencesFields} />
        </div>
    );
};
