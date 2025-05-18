import type { Meta, StoryObj } from '@storybook/react';
import { Step1BasicInfoStory } from "./Step1BasicInfo.stories-wrapper.tsx";

const meta: Meta = {
    title: 'Steps/Step1BasicInfo',
    component: Step1BasicInfoStory,
};

export default meta;

type Story = StoryObj<typeof Step1BasicInfoStory>;

export const Default: Story = {
    args: {
        values: {
            email: '',
            password: '',
            confirmPassword: '',
        },
        errors: {},
        onChange: (key, value) => {
            console.log(key, value);
        },
    },
};
