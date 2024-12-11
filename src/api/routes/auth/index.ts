import { createHttpClient } from "../../config/http-client";

export const authRoute = createHttpClient(`${import.meta.env.BASE_URL}/auth`);