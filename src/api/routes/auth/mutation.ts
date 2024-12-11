import { useMutation } from "@tanstack/react-query";
import { MUTATION_KEYS } from "../../config/mutation-keys";
import { authRoute } from ".";


export interface RegisterUserInput {
    name: string;
    email: string;
    password: string;
    country: string;
}

export interface LoginUserInput {
    email: string;
    password: string;
}

export const useRegisterUser = () => {
    return useMutation({
        mutationKey: [MUTATION_KEYS.REGISTER_USER],
        mutationFn: async (user: RegisterUserInput) => await authRoute.post("/register", user),
    });
};

export const useLoginUser = () => {
    return useMutation({
        mutationKey: [MUTATION_KEYS.REGISTER_USER],
        mutationFn: async (user: LoginUserInput) => await authRoute.post("/login", user),
    });
};