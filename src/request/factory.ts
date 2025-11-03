import type { z } from "zod";

const SCHWAB_API_URL = "https://api.schwabapi.com";

type EndpointWrapper<Request, Response> = (
  params: (Request extends undefined
    ? { request?: undefined }
    : { request: Request }) & { authToken?: string }
) => Promise<Response>;

export function generateEndpointWrapper<
  Request,
  ParsedRequest extends {
    endpoint: string;
    searchParams?: Record<string, string>;
    headers?: Record<string, string>;
  },
  Response extends {
    code: number;
    headers: Record<string, any>;
    json: any;
  }
>(params: {
  requestSchema: z.ZodType<ParsedRequest, Request>;
  responseSchema: z.ZodType<Response>;
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
}): EndpointWrapper<Request, Response> {
  const { requestSchema, responseSchema, method } = params;

  const endpointWrapper: EndpointWrapper<Request, Response> = async (input) => {
    const { endpoint, searchParams, headers } = requestSchema.parse(
      input.request
    );

    const url = new URL(endpoint, SCHWAB_API_URL);
    for (const [key, value] of Object.entries(searchParams ?? {})) {
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
    });

    return responseSchema.parse({
      code: response.status,
      headers: JSON.parse(JSON.stringify(response.headers)),
      json: await response.json(),
    });
  };

  return endpointWrapper;
}
