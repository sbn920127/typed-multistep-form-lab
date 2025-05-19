import { Meta, StoryObj } from "@storybook/react";
import { FormWrapper} from "./index.tsx";

const meta: Meta<typeof FormWrapper> = {
    title: "Form/FormWrapper",
    component: FormWrapper,
};

export default meta;

type Story = StoryObj<typeof FormWrapper>;

export const Default: Story = {
    render: () => <FormWrapper />,
};