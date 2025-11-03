import { z } from "zod";
import {
  TransactionSchema,
  TransactionTypeSchema,
} from "../schema/trader/transaction";
import { generateEndpointWrapper } from "./factory";
import { fetchResponseSchema } from "./response";

import type { TransactionType } from "../schema/trader/transaction";
import type { RequestOutput } from "./factory";

export type GetTransactionsRequest = {
  /** The encrypted ID of the account */
  accountNumber: string;

  /** Specifies that no transactions entered before this time should be returned. */
  startDate: Date;

  /** Specifies that no transactions entered after this time should be returned. */
  endDate: Date;

  /** It filters all the transaction activities based on the symbol specified. */
  symbol?: string;

  /** Specifies that only transactions of this status should be returned. */
  types: TransactionType;
};

export const getTransactionsRequestSchema: z.ZodType<
  RequestOutput,
  GetTransactionsRequest
> = z
  .object({
    accountNumber: z.string(),
    startDate: z.date(),
    endDate: z.date(),
    symbol: z.string().optional(),
    types: TransactionTypeSchema,
  })
  .transform<RequestOutput>(
    ({ accountNumber, startDate, endDate, symbol, types }) => ({
      endpoint: `/trader/v1/accounts/${accountNumber}/transactions`,
      queryParams: {
        accountNumber,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        ...(symbol ? { symbol } : {}),
        types,
      },
    })
  );

export const getTransactionsResponseSchema = fetchResponseSchema(
  z.array(TransactionSchema)
);
export type GetTransactionsResponse = z.infer<
  typeof getTransactionsResponseSchema
>;

/** Get all transactions information for a specific account.
 *
 * All transactions for a specific account. Maximum number of transactions in
 * response is 3000. Maximum date range is 1 year.
 */
export const getTransactions = generateEndpointWrapper({
  requestSchema: getTransactionsRequestSchema,
  responseSchema: getTransactionsResponseSchema,
  method: "GET",
});
