import { BasicInfo, FormStepProps } from '../../types/form'
import StepRenderer from "../StepRenderer";
import { basicInfoFields } from "../../constants/formFieldConfigs.ts";


export const Step1BasicInfo = (props: FormStepProps<BasicInfo>) => {
    return (
        <>
            <h2>基本資料</h2>
            <StepRenderer {...props} fields={basicInfoFields} />
        </>
    );
};
