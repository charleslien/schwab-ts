import z from "zod";

export const assetTypeSchema = z.enum([
  "EQUITY",
  "MUTUAL_FUND",
  "OPTION",
  "FUTURE",
  "FOREX",
  "INDEX",
  "CASH_EQUIVALENT",
  "FIXED_INCOME",
  "PRODUCT",
  "CURRENCY",
  "COLLECTIVE_INVESTMENT",
]);
export type assetType = z.infer<typeof assetTypeSchema>;
