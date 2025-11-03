import { z } from "zod";
import { OrderSchema } from "../schema/trader/order";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export type GetOrderRequest = {
  /** The encrypted ID of the account */
  accountNumber: string;

  /** The ID of the order being retrieved. */
  orderId: number;
};

export const getOrderRequestSchema: z.ZodType<RequestOutput, GetOrderRequest> =
  z
    .object({
      accountNumber: z.string(),
      orderId: z.number(),
    })
    .transform<RequestOutput>(({ accountNumber, orderId }) => ({
      endpoint: `/trader/v1/accounts/${accountNumber}/orders/${orderId}`,
      queryParams: {
        accountNumber,
        orderId: orderId.toString(),
      },
    }));

export const getOrderResponseSchema = fetchResponseSchema(OrderSchema);
export type GetOrderResponse = z.infer<typeof getOrderResponseSchema>;

/** Get a specific order by its ID, for a specific account */
export const getOrder = generateEndpointWrapper({
  requestSchema: getOrderRequestSchema,
  responseSchema: getOrderResponseSchema,
  method: "GET",
});
