import type { z } from "zod";

const SCHWAB_API_URL = "https://api.apischwab.com";

export function fromSchema<
  Request,
  ParsedRequest extends {
    searchParams?: Record<string, string>;
    endpoint: string;
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
}): (
  ...requests: Request extends undefined ? [] : [Request]
) => Promise<Response> {
  const { requestSchema, responseSchema, method } = params;

  async function wrapper(
    ...requests: Request extends undefined ? [] : [Request]
  ): Promise<Response> {
    const { searchParams, endpoint } = requestSchema.parse(requests[0]);

    const url = new URL(endpoint, SCHWAB_API_URL);
    for (const [key, value] of Object.entries(searchParams ?? {})) {
      url.searchParams.set(key, value);
    }

    const response = await fetch(url, {
      method,
    });

    return responseSchema.parse({
      code: response.status,
      headers: response.headers,
      json: await response.json(),
    });
  }

  return wrapper;
}
