import React from "react";
import { BasicInfo, FormStepProps, Preferences, ProfileInfo } from "../types/form.ts";
import { Step1BasicInfo } from "../components/Step1BasicInfo";
import { Step2ProfileInfo } from "../components/Step2ProfileInfo";
import { Step3Preferences } from "../components/Step3Preferences";

type StepConfig<T> = {
    id: number;
    fields: (keyof T)[];
    component: React.FC<FormStepProps<T>>;
}

export const formSteps: [StepConfig<BasicInfo>, StepConfig<ProfileInfo>, StepConfig<Preferences>] = [
    {
        id: 1,
        component: Step1BasicInfo,
        fields: ['email', 'password', 'confirmPassword'],
    },
    {
        id: 2,
        component: Step2ProfileInfo,
        fields: ['fullName', 'birthday', 'gender'],
    },
    {
        id: 3,
        component: Step3Preferences,
        fields: ['newsletter', 'theme'],
    }
]
