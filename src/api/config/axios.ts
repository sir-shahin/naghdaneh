import axios from "axios";
import type { z } from "zod";

import { useGlobalStore } from "@/stores";

import { handleApiError } from "@/api/utils";

declare module "axios" {
  export interface AxiosRequestConfig {
    schema?: z.ZodType<any>;
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
