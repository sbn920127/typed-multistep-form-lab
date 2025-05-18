import {Step1BasicInfo } from "./index.tsx";
import type { BasicInfo } from "../../types/form.ts";

type MockFormValues = BasicInfo;

type Props = {
    values: MockFormValues;
    errors: Partial<Record<keyof MockFormValues, string>>;
    onChange: (field: keyof MockFormValues, value: string) => void;
}

export const Step1BasicInfoStory = (props: Props) => {
    return <Step1BasicInfo {...props} />
}

