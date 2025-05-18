import { FormRadioGroup } from "./index.tsx";
import type { FieldProps } from "../../types/components.ts";
import type { Option } from "../../types/form.ts";

type MockForm = {
    gender: string;
}

type StoryFieldProps = FieldProps<MockForm, 'gender'> & {
    options: readonly Option[];
};

export const FormRadioGroupStory = (props: StoryFieldProps) => {
    return <FormRadioGroup<MockForm, 'gender'> {...props} />
}
