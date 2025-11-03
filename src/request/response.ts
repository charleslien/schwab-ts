import z from "zod";
import {
  ServiceErrorSchema,
  UnauthorizedErrorSchema,
} from "../schema/trader/error";
import { responseHeadersSchema } from "../schema/trader/header";

export function fetchResponseSchema<Output, Input>(
  responseJson: z.ZodType<Output, Input>
) {
  return z
    .discriminatedUnion("code", [
      z.object({
        code: z.literal(200),
        json: responseJson,
      }),
      z.object({
        code: z.literal(400),
        json: ServiceErrorSchema,
      }),
      z.object({
        code: z.literal(401),
        json: UnauthorizedErrorSchema,
      }),
      z.object({
        code: z.literal(403),
        json: ServiceErrorSchema,
      }),
      z.object({
        code: z.literal(404),
        json: ServiceErrorSchema,
      }),
      z.object({
        code: z.literal(500),
        json: ServiceErrorSchema,
      }),
      z.object({
        code: z.literal(503),
        json: ServiceErrorSchema,
      }),
    ])
    .and(
      z.object({
        headers: responseHeadersSchema,
      })
    );
}
