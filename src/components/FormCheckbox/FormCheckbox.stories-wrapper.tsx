import { FormCheckbox} from "./index.tsx";
import type { FieldProps } from "../../types/components.ts";

type MockForm = {
    agree: boolean;
}

type StoryFieldProps = FieldProps<MockForm, 'agree'>;

export const FormCheckboxStory = (props: StoryFieldProps) => {
    return <FormCheckbox<MockForm, 'agree'> {...props} />
}


