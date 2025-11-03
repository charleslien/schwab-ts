import type { z } from "zod";

const SCHWAB_API_URL = "https://api.schwabapi.com";

export type RequestOutput = {
  endpoint: string;
  queryParams?: Record<string, string>;
  body?: any;
  headers?: Record<string, string>;
};

type EndpointWrapper<Request, Response> = (
  params: (Request extends undefined
    ? { request?: undefined }
    : { request: Request }) & { authToken?: string }
) => Promise<Response>;

export function generateEndpointWrapper<
  ReqInput,
  ReqOutput extends RequestOutput,
  ResOutput extends {
    code: number;
    headers: Record<string, any>;
    json: any;
  }
>(params: {
  requestSchema: z.ZodType<ReqOutput, ReqInput>;
  responseSchema: z.ZodType<ResOutput>;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}): EndpointWrapper<ReqInput, ResOutput> {
  const { requestSchema, responseSchema, method } = params;

  const endpointWrapper: EndpointWrapper<ReqInput, ResOutput> = async (
    input
  ) => {
    const { endpoint, queryParams, body, headers } = requestSchema.parse(
      input.request
    );

    const url = new URL(endpoint, SCHWAB_API_URL);
    for (const [key, value] of Object.entries(queryParams ?? {})) {
      url.searchParams.set(key, value);
    }

    const response = await fetch(url, {
      method,
      headers: {
        ...headers,
        ...(input.authToken
          ? { Authorization: `Bearer ${input.authToken}` }
          : {}),
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });

    const text = await response.text();
    return responseSchema.parse({
      code: response.status,
      headers: JSON.parse(JSON.stringify(response.headers)),
      json: text ? JSON.parse(text) : undefined,
    });
  };

  return endpointWrapper;
}
