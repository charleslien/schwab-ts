import { z } from "zod";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export type DeleteOrderRequest = {
  /** The encrypted ID of the account */
  accountNumber: string;

  /** The ID of the order being retrieved. */
  orderId: number;
};

export const deleteOrderRequestSchema: z.ZodType<
  RequestOutput,
  DeleteOrderRequest
> = z
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

export const deleteOrderResponseSchema = fetchResponseSchema(z.undefined());
export type DeleteOrderResponse = z.infer<typeof deleteOrderResponseSchema>;

/** Cancel a specific order for a specific account */
export const deleteOrder = generateEndpointWrapper({
  requestSchema: deleteOrderRequestSchema,
  responseSchema: deleteOrderResponseSchema,
  method: "DELETE",
});
