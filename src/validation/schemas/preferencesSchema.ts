import {ValidationSchema} from "../types.ts";
import {Preferences} from "../../types/form.ts";

export const preferencesSchema: ValidationSchema<Preferences> = {
    newsletter: [
        (v) => typeof v !== "boolean" ? "請選擇是否訂閱電子報" : undefined,
    ],
    theme: [
        (value) => {
            const validThemes = ["light", "dark"];
            if (!validThemes.includes(value as string)) {
                return "請選擇有效的主題";
            }
            return undefined;
        },
    ],
}
