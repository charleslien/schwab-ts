import { z } from "zod";

export const datetimeSchema = z.coerce.date();
