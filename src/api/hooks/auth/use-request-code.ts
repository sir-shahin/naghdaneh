import type { AxiosError } from "axios";
import { createMutation } from "react-query-kit";
import type { z } from "zod";

import { API_ENDPOINTS, axiosInstance } from "@/api/config";
import { SuccessResponseSchema } from "@/api/schemas";

type Variables = { mobile: string };
type Response = z.infer<typeof SuccessResponseSchema>;

export const useRequestCode = createMutation<Response, Variables, AxiosError>({
  mutationFn: async (variables) =>
    axiosInstance({
      url: API_ENDPOINTS.REQUEST_CODE(),
      method: "POST",
      data: variables,
      schema: SuccessResponseSchema,
    }),
});
