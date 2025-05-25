import { FormSelect } from "./index.tsx";
import type { FieldProps } from "../../types/components.ts";
import type { Option } from "../../types/fields.ts";

type MockForm = {
    color: string;
}

type StoryFieldProps = FieldProps<MockForm, 'color'> & {
    options: readonly Option[];
};

export const FormSelectStory = (props: StoryFieldProps) => {
    return <FormSelect<MockForm, 'color'> {...props} />
}
