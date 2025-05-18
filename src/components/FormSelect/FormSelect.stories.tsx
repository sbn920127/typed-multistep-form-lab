import type{ Meta, StoryObj} from '@storybook/react';
import {FormSelectStory } from "./FormSelect.story-wrapper.tsx";

const meta: Meta<typeof FormSelectStory> = {
    title: 'Fields/FormSelect',
    component: FormSelectStory,
}

export default meta;
type Story = StoryObj<typeof FormSelectStory>;

export const Default: Story = {
    args: {
        name: 'color',
        label: '選擇顏色',
        value: 'red',
        options: [
            { value: 'red', label: '紅色' },
            { value: 'blue', label: '藍色' },
            { value: 'green', label: '綠色' },
        ],
        onChange: (key, value) => {
            console.log(key, value);
        },
    },
};

