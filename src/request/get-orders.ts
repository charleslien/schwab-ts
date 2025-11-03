import { z } from "zod";
import { OrderSchema, status, statusSchema } from "../schema/trader/order";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export type GetOrdersRequest = {
  /** The encrypted ID of the account */
  accountNumber: string;

  /** The max number of orders to retrieve. Default is 3000. */
  maxResults?: number;

  /** Specifies that no orders entered before this time should be returned. */
  fromEnteredTime: Date;

  /** Specifies that no orders entered after this time should be returned. */
  toEnteredTime: Date;

  /** Specifies that only orders of this status should be returned. */
  status: status;
};

export const getOrdersRequestSchema: z.ZodType<
  RequestOutput,
  GetOrdersRequest
> = z
  .object({
    accountNumber: z.string(),
    maxResults: z.number().default(3000),
    fromEnteredTime: z.date(),
    toEnteredTime: z.date(),
    status: statusSchema,
  })
  .transform<RequestOutput>(
    ({
      accountNumber,
      maxResults,
      fromEnteredTime,
      toEnteredTime,
      status,
    }) => ({
      endpoint: `/trader/v1/accounts/${accountNumber}/orders`,
      queryParams: {
        accountNumber,
        maxResults: maxResults.toString(),
        fromEnteredTime: fromEnteredTime.toISOString(),
        toEnteredTime: toEnteredTime.toISOString(),
        status,
      },
    })
  );

export const getOrdersResponseSchema = fetchResponseSchema(
  z.array(OrderSchema)
);
export type GetOrdersResponse = z.infer<typeof getOrdersResponseSchema>;

/** Get all orders for a specific account.
 *
 * All orders for a specific account. Orders retrieved can be filtered based on
 * input parameters below. Maximum date range is 1 year.
 */
export const getOrders = generateEndpointWrapper({
  requestSchema: getOrdersRequestSchema,
  responseSchema: getOrdersResponseSchema,
  method: "GET",
});
