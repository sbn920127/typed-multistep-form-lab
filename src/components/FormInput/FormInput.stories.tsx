import type{ Meta, StoryObj} from '@storybook/react';
import {FormInputStory} from "./FormInput.story-wrapper.tsx";

const meta: Meta<typeof FormInputStory> = {
    title: 'Fields/FormInput',
    component: FormInputStory,
}

export default meta;
type Story = StoryObj<typeof FormInputStory>;

export const Default: Story = {
    args: {
        label: 'Email',
        name: 'email',
        value: '',
        error: '',
        type: 'text',
        onChange: (key, value) => {
            console.log(key, value);
        },
    },
};

export const WithLabel: Story = {
    args: {
        label: 'Email',
        name: 'email',
        value: '',
        error: '',
        type: 'text',
        onChange: (value) => console.log(value),
    },
}

