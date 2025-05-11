import {useState} from "react";
import {FormValues, FormErrors, Step} from "../types/form.ts";
import Step1BasicInfo from "./Step1BasicInfo.tsx";
import Step2ProfileInfo from "./Step2ProfileInfo.tsx";
import Step3Preferences from "./Step3Preferences.tsx";
import {schemaMap} from "../validation/schemas/schemaMap.ts";
import {pick} from "../utils/pick.ts";
import {validate, ValidationSchema} from "../validation/validators.ts";
import {ToSnakeCaseKeys} from "../utils/typeHelpers.ts";
import {submitForm} from "../api/submitForm.ts";
import {mapApiFieldErrors} from "../utils/mapFieldErrors.ts";
import {toSnakeCaseKeys} from "../utils/toSnakeCareKeys.ts";
import {fieldLabelMap} from "../constants/fieldLabelMap.ts";


const initialForm: FormValues = {
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    birthday: "",
    gender: 1,
    newsletter: false,
    theme: "light",
}

const FormWrapper = () => {
    const [step, setStep] = useState<Step>(1);
    const [formData, setFormData] = useState<FormValues>(initialForm);
    const [errors, setErrors] = useState<FormErrors<FormValues>>({});

    const updateField = <K extends keyof FormValues>(key: K, value: FormValues[K]): void => {
        setFormData((prev) => ({...prev, [key]: value}))
        setErrors((prev) => ({...prev, [key]: undefined}))
    }

    const next = () => {
        const currentSchema = schemaMap[step];
        const stepKeys = Object.keys(currentSchema) as (keyof FormValues)[];
        const stepValues = pick(formData, stepKeys);
        const stepErrors = validate(stepValues, currentSchema as ValidationSchema<typeof stepValues>);

        if (Object.keys(stepErrors).length > 0) {
            setErrors((prev) => ({...prev, ...stepErrors}));
            return;
        }

        setErrors((prev) => {
            const newErrors = {...prev};
            stepKeys.forEach((key) => delete newErrors[key])
            return newErrors;
        })

        setStep((s) => Math.min(s + 1, 3) as Step)
        window.scrollTo({top: 0, behavior: 'smooth'})
    };
    const back = () => {
        setStep((s) => Math.max(s - 1, 1) as Step)
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    const handleSubmit = async () => {
        // 合併所有 schema
        const allSchemas = Object.values(schemaMap)
        const fullSchema = Object.assign({}, ...allSchemas)
        const allErrors = validate(formData, fullSchema)

        if (Object.keys(allErrors).length > 0) {
            setErrors(allErrors)
            return
        }

        const payload = toSnakeCaseKeys(formData) as ToSnakeCaseKeys<FormValues>;

        const res = await submitForm(payload);
        if (!res.success) {
            const mappedErrors = mapApiFieldErrors<FormValues>(res.error.fieldErrors);
            setErrors(mappedErrors);
            return;
        }

        console.log('送出成功：', formData)
        alert('送出成功！')
    }


    return (
        <div>
            {
                Object.keys(errors).length > 0 && (
                    <div style={{background: '#ffe5e5', color: '#900', padding: '1rem', marginBottom: '1rem'}}>
                        🚨 表單有錯誤，請檢查下列欄位：
                        <ul>
                            {Object.entries(errors).map(([key, msg]) => (

                                <li key={key}>{fieldLabelMap[key as keyof typeof fieldLabelMap]}: {msg}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
            {step === 1 && (
                <Step1BasicInfo
                    values={formData}
                    errors={errors}
                    onChange={updateField}/>
            )}
            {step === 2 && (
                <Step2ProfileInfo
                    values={formData}
                    errors={errors}
                    onChange={updateField}/>
            )}
            {step === 3 && (
                <Step3Preferences
                    values={formData}
                    errors={errors}
                    onChange={updateField}/>
            )}

            <div style={{marginTop: '1rem'}}>
                {step > 1 && <button onClick={back}>上一步</button>}
                {step < 3 && <button onClick={next}>下一步</button>}
                {step === 3 && <button onClick={handleSubmit}>送出</button>}
            </div>
        </div>
    )
};

export default FormWrapper;

