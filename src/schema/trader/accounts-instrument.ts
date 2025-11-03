import { z } from "zod";
import { assetTypeSchema } from "./asset-type";
import { datetimeSchema } from "./datetime";

export const AccountCashEquivalentSchema = z.looseObject({
  assetType: z.literal("CASH_EQUIVALENT"),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string().optional(),
  instrumentId: z.int().optional(),
  netChange: z.number(),
  type: z.enum(["SWEEP_VEHICLE", "SAVINGS", "MONEY_MARKET_FUND", "UNKNOWN"]),
});
export type AccountCashEquivalent = z.infer<typeof AccountCashEquivalentSchema>;

export const AccountEquitySchema = z.looseObject({
  assetType: z.literal("EQUITY"),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string().optional(),
  instrumentId: z.int().optional(),
  netChange: z.number(),
});
export type AccountEquity = z.infer<typeof AccountEquitySchema>;

export const AccountFixedIncomeSchema = z.looseObject({
  assetType: z.literal("FIXED_INCOME"),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string(),
  maturityDate: datetimeSchema,
  variableRate: z.number(),

  instrumentId: z.int().optional(),
  netChange: z.number().optional(),
  factor: z.number().optional(),
});
export type AccountFixedIncome = z.infer<typeof AccountFixedIncomeSchema>;

export const AccountMutualFundSchema = z.looseObject({
  assetType: z.literal("MUTUAL_FUND"),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string().optional(),
  instrumentId: z.int().optional(),
  netChange: z.number(),
});
export type AccountMutualFund = z.infer<typeof AccountMutualFundSchema>;

export const AccountAPIOptionDeliverableSchema = z.looseObject({
  symbol: z.string(),
  deliverableUnits: z.number(),
  apiCurrencyType: z.enum(["USD", "CAD", "EUR", "JPY"]),
  assetType: assetTypeSchema,
});
export type AccountAPIOptionDeliverable = z.infer<
  typeof AccountAPIOptionDeliverableSchema
>;

export const AccountOptionSchema = z.looseObject({
  assetType: z.literal("OPTION"),
  cusip: z.string(),
  symbol: z.string(),
  type: z.enum(["VANILLA", "BINARY", "BARRIER", "UNKNOWN"]),
  putCall: z.enum(["PUT", "CALL", "UNKNOWN"]),
  underlyingSymbol: z.string(),

  description: z.string().optional(),
  instrumentId: z.int().optional(),
  netChange: z.number().optional(),
  optionDeliverables: AccountAPIOptionDeliverableSchema.optional(),
  optionMultiplier: z.int().optional(),
});
export type AccountOption = z.infer<typeof AccountOptionSchema>;

/** Missing in docs */
export const AccountCollectiveInvestmentSchema = z.looseObject({
  assetType: z.literal("COLLECTIVE_INVESTMENT"),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string().optional(),
  type: z.enum(["EXCHANGE_TRADED_FUND"]),
});

export const AccountsInstrumentSchema = z.discriminatedUnion("assetType", [
  AccountCashEquivalentSchema,
  AccountEquitySchema,
  AccountFixedIncomeSchema,
  AccountMutualFundSchema,
  AccountOptionSchema,
  AccountCollectiveInvestmentSchema,
]);
export type AccountsInstrument = z.infer<typeof AccountsInstrumentSchema>;
