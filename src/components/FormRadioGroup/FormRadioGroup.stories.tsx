import type { Meta, StoryObj } from '@storybook/react';
import { FormRadioGroupStory } from "./FormRadioGroup.story-wrapper.tsx";

const meta: Meta<typeof FormRadioGroupStory> = {
    title: 'Fields/FormRadioGroup',
    component: FormRadioGroupStory,
}

export default meta;

type Story = StoryObj<typeof FormRadioGroupStory>;

export const Default: Story = {
    args: {
        name: 'gender',
        label: '選擇性別',
        value: '女',
        options: [
            { value: '男', label: '男' },
            { value: '女', label: '女' },
            { value: '其他', label: '其他' },
        ],
        onChange: (key, value) => {
            console.log(key, value);
        },
    }
};
