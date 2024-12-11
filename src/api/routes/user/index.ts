import { createHttpClient } from "../../config/http-client";
export const userRoute = createHttpClient(`${import.meta.env.BASE_URL}/users`);