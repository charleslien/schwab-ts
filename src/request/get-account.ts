import { z } from "zod";
import { AccountSchema } from "../schema/trader/account";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export type GetAccountRequest = {
  /** The encrypted ID of the account */
  accountNumber: string;
};
export const getAccountRequestSchema: z.ZodType<
  RequestOutput,
  GetAccountRequest
> = z
  .object({
    accountNumber: z.string(),
  })
  .transform<RequestOutput>(({ accountNumber }) => ({
    endpoint: `/trader/v1/accounts/${accountNumber}`,
    queryParams: {
      accountNumber: accountNumber,
      fields: "positions",
    },
  }));

export const getAccountResponseSchema = fetchResponseSchema(AccountSchema);
export type GetAccountResponse = z.infer<typeof getAccountResponseSchema>;

/** Get specific account balance and positions for the logged in user.
 *
 * Specific account information with balances and positions. The balance
 * information on these accounts is displayed by default but Positions will be
 * returned based on the "positions" flag.
 */
export const getAccount = generateEndpointWrapper({
  requestSchema: getAccountRequestSchema,
  responseSchema: getAccountResponseSchema,
  method: "GET",
});
