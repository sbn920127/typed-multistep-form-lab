import { FormRadioGroup } from "./index.tsx";
import type { FieldProps } from "../../types/components.ts";
import type { Option } from "../../types/form.ts";

type MockForm = {
    gender: string;
}

type StoryFieldProps = FieldProps<MockForm 'gender'> ;

export const FormInputStory = (props: StoryFieldProps) => {
    return <FormInput<MockForm, 'gender'> {...props} />
}
