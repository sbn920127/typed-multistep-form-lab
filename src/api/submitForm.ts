import {ApiFormPayload} from "../types/api.ts";

type ApiResponse<T> =
    | { success: true; data: T }
    | { success: false; error: { fieldErrors: Record<string, string> } };

export async function submitForm(data: ApiFormPayload): Promise<ApiResponse<null>> {
    console.log('[發送資料]', data);

    // 模擬失敗情境
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: false,
                error: {
                    fieldErrors: {
                        email: '信箱已存在',
                        confirm_password: '密碼不一致',
                    },
                },
            });
        }, 800);
    });
}
