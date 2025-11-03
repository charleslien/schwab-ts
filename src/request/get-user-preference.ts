import { z } from "zod";
import {
  responseHeaderSchema,
  ServiceErrorSchema,
} from "../schema/trader/common";
import { UserPreferenceSchema } from "../schema/trader/user-preference";
import { fromSchema } from "./factory";

export const getUserPreferenceRequestSchema = z.undefined().transform(() => ({
  endpoint: "/trader/v1/userPreference",
}));
export type GetUserPreferenceRequest = z.input<
  typeof getUserPreferenceRequestSchema
>;

export const getUserPreferenceResponseSchema = z
  .discriminatedUnion("code", [
    z.object({
      code: z.literal(200),
      json: z.array(UserPreferenceSchema),
    }),
    z.object({
      code: z.literal(400),
      json: ServiceErrorSchema,
    }),
    z.object({
      code: z.literal(401),
      json: ServiceErrorSchema,
    }),
    z.object({
      code: z.literal(403),
      json: ServiceErrorSchema,
    }),
    z.object({
      code: z.literal(500),
      json: ServiceErrorSchema,
    }),
  ])
  .and(
    z.object({
      headers: responseHeaderSchema,
    })
  );
export type GetUserPreferenceResponse = z.infer<
  typeof getUserPreferenceResponseSchema
>;

export const getUserPreference = fromSchema({
  requestSchema: getUserPreferenceRequestSchema,
  responseSchema: getUserPreferenceResponseSchema,
  method: "GET",
});
