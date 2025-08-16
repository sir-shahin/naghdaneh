import axios from "axios";
import { enqueueSnackbar } from "notistack";

import { useGlobalStore } from "@/stores";

import { API_ENDPOINTS } from "../config";

export const handleApiError = (error: any) => {
  if (axios.isCancel(error) || error.message === "Request aborted") {
    console.warn(error);
    return "";
  }

  if (error?.response?.status === 401 && !error?.config?.url?.includes(API_ENDPOINTS.LOGIN())) {
    useGlobalStore.getState().logout();
    return "Unauthenticated";
  }

  const log = {
    message: error?.schemaErrorMessage || error?.response?.data?.message || error?.message || "",
    config: error?.response?.config || error.config,
    request: error?.response?.request || error.request,
    responseData: error?.response?.data,
    responseHeaders: error?.response?.headers,
    responseStatus: error?.response?.status,
    responseStatusText: error?.response?.statusText,
    schemaError: error?.schemaError,
  };

  //TODO: send collected log to sentry
  console.log(log);

  enqueueSnackbar(log.message, { variant: "error" });

  return log.message;
};
