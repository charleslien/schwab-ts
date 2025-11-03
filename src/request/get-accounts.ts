import { z } from "zod";
import { AccountSchema } from "../schema/trader/account";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export const getAccountsRequestSchema: z.ZodType<RequestOutput, undefined> = z
  .undefined()
  .transform<RequestOutput>(() => ({
    endpoint: `/trader/v1/accounts`,
    queryParams: {
      fields: "positions",
    },
  }));

export const getAccountsResponseSchema = fetchResponseSchema(
  z.array(AccountSchema)
);
export type GetAccountsResponse = z.infer<typeof getAccountsResponseSchema>;

/** Get linked account(s) balances and positions for the logged in user.
 *
 * All the linked account information for the user logged in. The balances on
 * these accounts are displayed by default however the positions on these
 * accounts will be displayed based on the "positions" flag.
 */
export const getAccounts = generateEndpointWrapper({
  requestSchema: getAccountsRequestSchema,
  responseSchema: getAccountsResponseSchema,
  method: "GET",
});
