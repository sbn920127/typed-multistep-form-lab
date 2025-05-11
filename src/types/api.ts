import {ToSnakeCaseKeys} from "../utils/typeHelpers.ts";
import {FormValues} from "./form.ts";

export type ApiFormPayload = ToSnakeCaseKeys<FormValues>;

