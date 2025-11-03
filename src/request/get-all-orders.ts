import { z } from "zod";
import { OrderSchema, status, statusSchema } from "../schema/trader/order";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export type GetAllOrdersRequest = {
  /** The max number of orders to retrieve. Default is 3000. */
  maxResults?: number;

  /** Specifies that no orders entered before this time should be returned. */
  fromEnteredTime: Date;

  /** Specifies that no orders entered after this time should be returned. */
  toEnteredTime: Date;

  /** Specifies that only orders of this status should be returned. */
  status: status;
};

export const getAllOrdersRequestSchema: z.ZodType<
  RequestOutput,
  GetAllOrdersRequest
> = z
  .object({
    maxResults: z.number().default(3000),
    fromEnteredTime: z.date(),
    toEnteredTime: z.date(),
    status: statusSchema,
  })
  .transform<RequestOutput>(
    ({ maxResults, fromEnteredTime, toEnteredTime, status }) => ({
      endpoint: `/trader/v1/accounts/orders`,
      queryParams: {
        maxResults: maxResults.toString(),
        fromEnteredTime: fromEnteredTime.toISOString(),
        toEnteredTime: toEnteredTime.toISOString(),
        status,
      },
    })
  );

export const getAllOrdersResponseSchema = fetchResponseSchema(
  z.array(OrderSchema)
);
export type GetAllOrdersResponse = z.infer<typeof getAllOrdersResponseSchema>;

/** Get all orders for all accounts */
export const getAllOrders = generateEndpointWrapper({
  requestSchema: getAllOrdersRequestSchema,
  responseSchema: getAllOrdersResponseSchema,
  method: "GET",
});
