import { z } from "zod";
import { OrderSchema } from "../schema/trader/order";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export type PostOrderRequest = {
  /** The encrypted ID of the account */
  accountNumber: string;

  /** The new Order Object. */
  order: z.input<typeof OrderSchema>;
};

export const postOrderRequestSchema: z.ZodType<
  RequestOutput,
  PostOrderRequest
> = z
  .object({
    accountNumber: z.string(),
    order: OrderSchema,
  })
  .transform<RequestOutput>(({ accountNumber, order }) => ({
    endpoint: `/trader/v1/accounts/${accountNumber}/orders`,
    queryParams: {
      accountNumber,
    },
    body: order,
  }));

export const postOrderResponseSchema = fetchResponseSchema(
  z.array(OrderSchema)
);
export type PostOrderResponse = z.infer<typeof postOrderResponseSchema>;

/** Place order for a specific account. */
export const postOrder = generateEndpointWrapper({
  requestSchema: postOrderRequestSchema,
  responseSchema: postOrderResponseSchema,
  method: "POST",
});
