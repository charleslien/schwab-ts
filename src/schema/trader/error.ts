import { z } from "zod";

export const UnauthorizedErrorSchema = z.looseObject({
  errors: z.array(
    z.object({
      id: z.string(),
      status: z.number(),
      title: z.string(),
      detail: z.string(),
    })
  ),
});
export type UnauthorizedError = z.infer<typeof UnauthorizedErrorSchema>;

export const ServiceErrorSchema = z.looseObject({
  message: z.string(),
  errors: z.array(z.string()).optional(),
});
export type ServiceError = z.infer<typeof ServiceErrorSchema>;
