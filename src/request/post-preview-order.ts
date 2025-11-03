import { z } from "zod";
import { OrderSchema } from "../schema/trader/order";
import { PreviewOrderSchema } from "../schema/trader/preview-order";
import { generateEndpointWrapper, RequestOutput } from "./factory";
import { fetchResponseSchema } from "./response";

export type PostPreviewOrderRequest = {
  /** The encrypted ID of the account */
  accountNumber: string;

  /** The new Order Object. */
  order: z.input<typeof OrderSchema>;
};

export const postPreviewOrderRequestSchema: z.ZodType<
  RequestOutput,
  PostPreviewOrderRequest
> = z
  .object({
    accountNumber: z.string(),
    order: OrderSchema,
  })
  .transform<RequestOutput>(({ accountNumber, order }) => ({
    endpoint: `/trader/v1/accounts/${accountNumber}/previewOrder`,
    queryParams: {
      accountNumber,
    },
    body: order,
  }));

export const postPreviewOrderResponseSchema =
  fetchResponseSchema(PreviewOrderSchema);
export type PostPreviewOrderResponse = z.infer<
  typeof postPreviewOrderResponseSchema
>;

/** Preview an order for a specific account. */
export const postPreviewOrder = generateEndpointWrapper({
  requestSchema: postPreviewOrderRequestSchema,
  responseSchema: postPreviewOrderResponseSchema,
  method: "POST",
});
