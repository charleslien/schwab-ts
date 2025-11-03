import { z } from "zod";

export const responseHeadersSchema = z.looseObject({
  "schwab-client-correlid": z.string(),
});
export type Headers = z.infer<typeof responseHeadersSchema>;
