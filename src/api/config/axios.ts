import axios from "axios";
import type { z } from "zod";

import { useGlobalStore } from "@/stores";

import { handleApiError } from "@/api/utils";

declare module "axios" {
  export interface AxiosRequestConfig {
    schema?: z.ZodType<unknown>;
  }
}

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  timeout: 20000,
  timeoutErrorMessage: "Request timed out. Please check your internet connection and try again.",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "en",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const fullURL = axios.getUri(config);
    const isInternalRequest = config.baseURL && fullURL.startsWith(config.baseURL);

    if (isInternalRequest) {
      const token = useGlobalStore.getState().token;

      if (token) {
        config.headers.Authorization = token && "Bearer " + token;
      }
    }

    return config;
  },
  (error) => {
    const message = handleApiError(error);
    return Promise.reject({ ...error, message });
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    const data = response.data;
    const schema = response.config.schema;

    if (schema) {
      const parseResult = schema.safeParse(data);

      if (parseResult.success === false) {
        const message = handleApiError({
          schemaErrorMessage:
            "Something went wrong processing your request. Please try again later. If the issue continues, contact support for assistance.",
          schemaError: JSON.stringify(parseResult.error),
          response: response,
        });

        return Promise.reject(Error(message));
      }
    }

    return data;
  },
  (error) => {
    const message = handleApiError(error);
    return Promise.reject({ ...error, message });
  },
);
