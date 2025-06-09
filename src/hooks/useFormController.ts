import { useState } from "react";
import type { FormErrors, FormValues, Step } from "../types/form.ts";
import { formSteps } from "../constants/formSteps.ts";
import { pick } from "../utils/pick.ts";
import { validate } from "../validation";
import { toSnakeCaseKeys } from "../utils/toSnakeCareKeys.ts";
import type { ToSnakeCaseKeys } from "../utils/typeHelpers.ts";
import { submitForm } from "../api/submitForm.ts";
import { mapApiFieldErrors } from "../utils/mapFieldErrors.ts";
import { schemaMap, formDefaultValues, allFields } from "../constants/metadata.ts";


export const useFormController = () => {
    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState<FormValues>(formDefaultValues);
    const [errors, setErrors] = useState<FormErrors<FormValues>>({});

    const updateField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
        setFormData((prev) => ({...prev, [key]: value}));
        setErrors((prev) => ({...prev, [key]: undefined}));
    }

    const currentStepConfig = formSteps.find(s => s.id === step)!;

    const handleNext = () => {
        const stepFields = allFields[step];
        const stepKeys = stepFields.map(f => f.key) as (keyof FormValues)[];
        const currentSchema = schemaMap[step];
        const stepValues = pick(formData, stepKeys);
        const stepErrors = validate(stepValues, currentSchema);

        if (Object.keys(stepErrors).length > 0) {
            setErrors((prev) => ({...prev, ...stepErrors}));
            return;
        }

        setErrors((prev) => {
            const newErrors = {...prev};
            stepKeys.forEach((key) => delete newErrors[key]);
            return newErrors;
        })

        setStep((s) => Math.min(s + 1, formSteps.length));
    }

    const handleBack = () => {
        setStep((s) => Math.max(s - 1, 1));
    }

    const handleSubmit = async () => {
        const allSchemas = Object.values(schemaMap);
        const fullSchema = Object.assign({}, ...allSchemas);
        const allErrors = validate(formData, fullSchema);

        if (Object.keys(allErrors).length > 0) {
            setErrors(allErrors);
            return;
        }

        const payload = toSnakeCaseKeys(formData) as ToSnakeCaseKeys<FormValues>;

        const res = await submitForm(payload);
        if (!res.success) {
            const mappedErrors = mapApiFieldErrors<FormValues>(res.error.fieldErrors);
            setErrors(mappedErrors);
            return;
        }

        console.log("成功送出！", formData);
        alert("送出成功！");
    }

    return {
        step,
        formData,
        errors,
        updateField,
        handleNext,
        handleBack,
        handleSubmit,
        currentStepConfig
    }
}
