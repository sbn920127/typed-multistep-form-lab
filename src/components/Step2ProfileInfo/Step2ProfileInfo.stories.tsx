import type { Meta, StoryObj } from '@storybook/react';
import { Step2ProfileInfoStory } from "./Step2ProfileInfo.stories-wrapper.tsx";

const meta: Meta = {
    title: 'Steps/Step2ProfileInfo',
    component: Step2ProfileInfoStory
};

export default meta;

type Story = StoryObj<typeof Step2ProfileInfoStory>;

export const Default: Story = {
    args: {
        values: {
            fullName: '',
            birthday: '',
            gender: 1,
        },
        errors: {},
        onChange: (key, value) => {
            console.log(key, value);
        },
    },
};
