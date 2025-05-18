import {FormInput} from "./index.tsx";
import type {FieldProps} from "../../types/components.ts";

type MockForm = {
    email: string;
}

type StoryFieldProps = FieldProps<MockForm, 'email'>;

export const FormInputStory = (props: StoryFieldProps) => {
    return <FormInput<MockForm, 'email'> {...props} />
}
