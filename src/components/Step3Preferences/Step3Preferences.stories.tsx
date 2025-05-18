import type { Meta, StoryObj } from '@storybook/react';
import { Step3PreferencesStory } from "./Step3Preferences.stories-wrapper.tsx";

const meta: Meta = {
    title: 'Steps/Step3Preferences',
    component: Step3PreferencesStory,
};

export default meta;

type Story = StoryObj<typeof Step3PreferencesStory>;

export const Default: Story = {
    args: {
        values: {
            newsletter: false,
            theme: 'light',
        },
        errors: {},
        onChange: (key, value) => {
            console.log(key, value);
        },
    },
};
