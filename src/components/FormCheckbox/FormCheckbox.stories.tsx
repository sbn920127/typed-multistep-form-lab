import { Meta, StoryObj } from "@storybook/react";
import { FormCheckboxStory } from "./FormCheckbox.stories-wrapper.tsx";

const meta: Meta<typeof FormCheckboxStory> = {
    title: 'Fields/FormCheckbox',
    component: FormCheckboxStory,
}

export default meta;

type Story = StoryObj<typeof FormCheckboxStory>;
export const Default: Story = {
    args: {
        name: 'agree',
        label: '同意條款',
        value: false,
        error: '',
        onChange: (key, value) => {
            console.log(key, value);
        },
    },
};
