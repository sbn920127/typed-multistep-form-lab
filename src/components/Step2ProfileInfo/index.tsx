import { FormStepProps, ProfileInfo } from "../../types/form.ts";
import StepRenderer from "../StepRenderer";
import { profileFields } from "../../constants/formFieldConfigs.ts";


export const Step2ProfileInfo = (props: FormStepProps<ProfileInfo>) => {
    return (
        <div>
            <h2>個人資料</h2>
            <StepRenderer {...props} fields={profileFields} />
        </div>
    );
};
