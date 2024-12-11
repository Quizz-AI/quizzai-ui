
import axios, { AxiosInstance } from "axios";
import { redirect } from "react-router-dom";

export interface HttpClient extends AxiosInstance {
  url: string;
}

export const createHttpClient = (url: string, parent?: HttpClient) => {
  const baseUrl = parent ? parent.url + url : url;

  const httpClient = axios.create({
    baseURL: baseUrl,
    headers: {
      "content-type": "application/json; charset=UTF-8",
      Accept: "application/json",
    },
  }) as HttpClient;

  httpClient.url = baseUrl;

  httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        401 === error.response.status &&
        window.location.pathname !== "/login"
      ) {
        redirect("/login");
      } else {
        return Promise.reject(error);
      }
    },
  );

  httpClient.interceptors.request.use(async (config: any) => {
    const token = await auth.currentUser?.getToken();
    if (config.headers && token && !httpClient.url.includes("/auth")) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  });
  return httpClient;
};
