import { Step3Preferences } from "./index.tsx";
import { Preferences } from "../../types/form.ts";

type MockForm = Preferences;

type Props = {
    values: MockForm;
    errors: Partial<Record<keyof MockForm, string>>;
    onChange: <K extends keyof MockForm>(field: K, value: MockForm[K]) => void;
}

export const Step3PreferencesStory = (props: Props) => {
    return <Step3Preferences {...props} />
}
