import { fieldLabelMap } from "../../constants/fieldLabelMap.ts";
import { useFormController } from "../../hooks/useFormController.ts";


export const FormWrapper = () => {
    const {
        step,
        formData,
        errors,
        updateField,
        handleNext,
        handleBack,
        handleSubmit,
        currentStepConfig,
    } = useFormController();

    const StepComponent  = currentStepConfig.component;

    return (
        <div>
            {
                Object.keys(errors).length > 0 && (
                    <div style={{background: '#ffe5e5', color: '#900', padding: '1rem', marginBottom: '1rem'}}>
                        表單有錯誤，請檢查下列欄位：
                        <ul>
                            {Object.entries(errors).map(([key, msg]) => (

                                <li key={key}>{fieldLabelMap[key as keyof typeof fieldLabelMap]}: {msg}</li>
                            ))}
                        </ul>
                    </div>
                )
            }
            <StepComponent values={formData} errors={errors} onChange={updateField} />
            <div style={{marginTop: '1rem'}}>
                {step > 1 && <button onClick={handleBack}>上一步</button>}
                {step < 3 && <button onClick={handleNext}>下一步</button>}
                {step === 3 && <button onClick={handleSubmit}>送出</button>}
            </div>
        </div>
    )
};

