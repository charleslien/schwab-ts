import { z } from "zod";
import { AccountNumberHashSchema } from "../schema/trader/account";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export const getAccountNumbersRequestSchema = z
  .undefined()
  .transform<RequestOutput>(() => ({
    endpoint: "/trader/v1/accounts/accountNumbers",
  }));
export type GetAccountNumbersRequest = z.input<
  typeof getAccountNumbersRequestSchema
>;

export const getAccountNumbersResponseSchema = fetchResponseSchema(
  z.array(AccountNumberHashSchema)
);
export type GetAccountNumbersResponse = z.infer<
  typeof getAccountNumbersResponseSchema
>;

/** Get list of account numbers and their encrypted values
 *
 * Account numbers in plain text cannot be used outside of headers or
 * request/response bodies. As the first step consumers must invoke this
 * service to retrieve the list of plain text/encrypted value pairs, and use
 * encrypted account values for all subsequent calls for any accountNumber
 * request.
 */
export const getAccountNumbers = generateEndpointWrapper({
  requestSchema: getAccountNumbersRequestSchema,
  responseSchema: getAccountNumbersResponseSchema,
  method: "GET",
});
