import { z } from "zod";
import { TransactionSchema } from "../schema/trader/transaction";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export type GetTransactionRequest = {
  /** The encrypted ID of the account */
  accountNumber: string;

  /** The ID of the transaction being retrieved. */
  transactionId: number;
};

export const getTransactionRequestSchema: z.ZodType<
  RequestOutput,
  GetTransactionRequest
> = z
  .object({
    accountNumber: z.string(),
    transactionId: z.number(),
  })
  .transform<RequestOutput>(({ accountNumber, transactionId }) => ({
    endpoint: `/trader/v1/accounts/${accountNumber}/transactions/${transactionId}`,
    queryParams: {
      accountNumber,
      transactionId: transactionId.toString(),
    },
  }));

export const getTransactionResponseSchema = fetchResponseSchema(
  z.array(TransactionSchema)
);
export type GetTransactionResponse = z.infer<
  typeof getTransactionResponseSchema
>;

/** Get a specific transaction by its ID, for a specific account */
export const getTransaction = generateEndpointWrapper({
  requestSchema: getTransactionRequestSchema,
  responseSchema: getTransactionResponseSchema,
  method: "GET",
});
