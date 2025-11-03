import { z } from "zod";
import { OrderSchema } from "../schema/trader/order";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export type PutOrderRequest = {
  /** The encrypted ID of the account */
  accountNumber: string;

  /** The ID of the order being retrieved. */
  orderId: number;

  /** The Order Object. */
  order: z.input<typeof OrderSchema>;
};

export const putOrderRequestSchema: z.ZodType<RequestOutput, PutOrderRequest> =
  z
    .object({
      accountNumber: z.string(),
      orderId: z.number(),
      order: OrderSchema,
    })
    .transform<RequestOutput>(({ accountNumber, orderId, order }) => ({
      endpoint: `/trader/v1/accounts/${accountNumber}/orders/${orderId}`,
      queryParams: {
        accountNumber,
        orderId: orderId.toString(),
      },
      body: order,
    }));

export const putOrderResponseSchema = fetchResponseSchema(z.undefined());
export type PutOrderResponse = z.infer<typeof putOrderResponseSchema>;

/** Place order for a specific account. */
export const putOrder = generateEndpointWrapper({
  requestSchema: putOrderRequestSchema,
  responseSchema: putOrderResponseSchema,
  method: "PUT",
});
