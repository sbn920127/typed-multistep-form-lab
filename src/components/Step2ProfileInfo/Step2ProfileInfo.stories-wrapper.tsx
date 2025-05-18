import { Step2ProfileInfo } from "./index.tsx";
import { ProfileInfo } from "../../types/form.ts";

type MockForm = ProfileInfo;

type Props = {
    values: MockForm;
    errors: Partial<Record<keyof MockForm, string>>;
    onChange: <K extends keyof MockForm>(field: K, value: MockForm[K]) => void;
}

export const Step2ProfileInfoStory = (props: Props) => {
    return <Step2ProfileInfo {...props} />
}
