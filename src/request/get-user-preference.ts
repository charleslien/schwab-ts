import { z } from "zod";
import { UserPreferenceSchema } from "../schema/trader/user-preference";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export const getUserPreferenceRequestSchema: z.ZodType<
  RequestOutput,
  undefined
> = z.undefined().transform<RequestOutput>(() => ({
  endpoint: "/trader/v1/userPreference",
}));
export type GetUserPreferenceRequest = z.input<
  typeof getUserPreferenceRequestSchema
>;

export const getUserPreferenceResponseSchema =
  fetchResponseSchema(UserPreferenceSchema);
export type GetUserPreferenceResponse = z.infer<
  typeof getUserPreferenceResponseSchema
>;

export const getUserPreference = generateEndpointWrapper({
  requestSchema: getUserPreferenceRequestSchema,
  responseSchema: getUserPreferenceResponseSchema,
  method: "GET",
});
