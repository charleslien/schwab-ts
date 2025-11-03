import { z } from "zod";

import { assetType, assetTypeSchema } from "./asset-type";
import { datetimeSchema } from "./datetime";

export const UserDetailsSchema = z.looseObject({
  cdDomainId: z.string(),
  login: z.string(),
  type: z.enum([
    "ADVISOR_USER",
    "BROKER_USER",
    "CLIENT_USER",
    "SYSTEM_USER",
    "UNKNOWN",
  ]),
  userId: z.int(),
  systemUserName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  brokerRepCode: z.string(),
});
export type UserDetails = z.infer<typeof UserDetailsSchema>;

export const TransactionTypeSchema = z.enum([
  "TRADE",
  "RECEIVE_AND_DELIVER",
  "DIVIDEND_OR_INTEREST",
  "ACH_RECEIPT",
  "ACH_DISBURSEMENT",
  "CASH_RECEIPT",
  "CASH_DISBURSEMENT",
  "ELECTRONIC_FUND",
  "WIRE_OUT",
  "WIRE_IN",
  "JOURNAL",
  "MEMORANDUM",
  "MARGIN_CALL",
  "MONEY_MARKET",
  "SMA_ADJUSTMENT",
]);
export type TransactionType = z.infer<typeof TransactionTypeSchema>;

export const TransactionCashEquivalentSchema = z.looseObject({
  assetType: z.enum([
    "EQUITY",
    "OPTION",
    "INDEX",
    "MUTUAL_FUND",
    "CASH_EQUIVALENT",
    "FIXED_INCOME",
    "CURRENCY",
    "COLLECTIVE_INVESTMENT",
  ]),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string(),
  instrumentId: z.int(),
  netChange: z.number(),
  type: z.enum(["SWEEP_VEHICLE", "SAVINGS", "MONEY_MARKET_FUND", "UNKNOWN"]),
});
export type TransactionCashEquivalent = z.infer<
  typeof TransactionCashEquivalentSchema
>;

export const CollectiveInvestmentSchema = z.looseObject({
  assetType: z.enum([
    "EQUITY",
    "OPTION",
    "INDEX",
    "MUTUAL_FUND",
    "CASH_EQUIVALENT",
    "FIXED_INCOME",
    "CURRENCY",
    "COLLECTIVE_INVESTMENT",
  ]),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string(),
  instrumentId: z.int(),
  netChange: z.number(),
  type: z.enum([
    "UNIT_INVESTMENT_TRUST",
    "EXCHANGE_TRADED_FUND",
    "CLOSED_END_FUND",
    "INDEX",
    "UNITS",
  ]),
});
export type CollectiveInvestment = z.infer<typeof CollectiveInvestmentSchema>;

export const CurrencySchema = z.looseObject({
  assetType: z.enum([
    "EQUITY",
    "OPTION",
    "INDEX",
    "MUTUAL_FUND",
    "CASH_EQUIVALENT",
    "FIXED_INCOME",
    "CURRENCY",
    "COLLECTIVE_INVESTMENT",
  ]),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string(),
  instrumentId: z.int(),
  netChange: z.number(),
});
export type Currency = z.infer<typeof CurrencySchema>;

export const TransactionEquitySchema = z.looseObject({
  assetType: z.enum([
    "EQUITY",
    "OPTION",
    "INDEX",
    "MUTUAL_FUND",
    "CASH_EQUIVALENT",
    "FIXED_INCOME",
    "CURRENCY",
    "COLLECTIVE_INVESTMENT",
  ]),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string(),
  instrumentId: z.int(),
  netChange: z.number(),
  type: z.enum([
    "COMMON_STOCK",
    "PREFERRED_STOCK",
    "DEPOSITORY_RECEIPT",
    "PREFERRED_DEPOSITORY_RECEIPT",
    "RESTRICTED_STOCK",
    "COMPONENT_UNIT",
    "RIGHT",
    "WARRANT",
    "CONVERTIBLE_PREFERRED_STOCK",
    "CONVERTIBLE_STOCK",
    "LIMITED_PARTNERSHIP",
    "WHEN_ISSUED",
    "UNKNOWN",
  ]),
});
export type TransactionEquity = z.infer<typeof TransactionEquitySchema>;

export const TransactionFixedIncomeSchema = z.looseObject({
  assetType: z.enum([
    "EQUITY",
    "OPTION",
    "INDEX",
    "MUTUAL_FUND",
    "CASH_EQUIVALENT",
    "FIXED_INCOME",
    "CURRENCY",
    "COLLECTIVE_INVESTMENT",
  ]),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string(),
  instrumentId: z.int(),
  netChange: z.number(),
  type: z.enum([
    "BOND_UNIT",
    "CERTIFICATE_OF_DEPOSIT",
    "CONVERTIBLE_BOND",
    "COLLATERALIZED_MORTGAGE_OBLIGATION",
    "CORPORATE_BOND",
    "GOVERNMENT_MORTGAGE",
    "GNMA_BONDS",
    "MUNICIPAL_ASSESSMENT_DISTRICT",
    "MUNICIPAL_BOND",
    "OTHER_GOVERNMENT",
    "SHORT_TERM_PAPER",
    "US_TREASURY_BOND",
    "US_TREASURY_BILL",
    "US_TREASURY_NOTE",
    "US_TREASURY_ZERO_COUPON",
    "AGENCY_BOND",
    "WHEN_AS_AND_IF_ISSUED_BOND",
    "ASSET_BACKED_SECURITY",
    "UNKNOWN",
  ]),
  maturityDate: datetimeSchema,
  factor: z.number(),
  multiplier: z.number(),
  variableRate: z.number(),
});
export type TransactionFixedIncome = z.infer<
  typeof TransactionFixedIncomeSchema
>;

export const ForexSchema = z.looseObject({
  assetType: z.enum([
    "EQUITY",
    "OPTION",
    "INDEX",
    "MUTUAL_FUND",
    "CASH_EQUIVALENT",
    "FIXED_INCOME",
    "CURRENCY",
    "COLLECTIVE_INVESTMENT",
  ]),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string(),
  instrumentId: z.int(),
  netChange: z.number(),
  type: z.enum(["STANDARD", "NBBO", "UNKNOWN"]),
  baseCurrency: CurrencySchema,
  counterCurrency: CurrencySchema,
});
export type Forex = z.infer<typeof ForexSchema>;

export const FutureSchema = z.looseObject({
  activeContract: z.boolean().default(false),
  type: z.enum(["STANDARD", "UNKNOWN"]),
  expirationDate: datetimeSchema,
  lastTradingDate: datetimeSchema,
  firstNoticeDate: datetimeSchema,
  multiplier: z.number(),
});
export type Future = z.infer<typeof FutureSchema>;

export const IndexSchema = z.looseObject({
  activeContract: z.boolean().default(false),
  type: z.enum(["BROAD_BASED", "NARROW_BASED", "UNKNOWN"]),
});
export type Index = z.infer<typeof IndexSchema>;

export const TransactionMutualFundSchema = z.looseObject({
  assetType: z.enum([
    "EQUITY",
    "OPTION",
    "INDEX",
    "MUTUAL_FUND",
    "CASH_EQUIVALENT",
    "FIXED_INCOME",
    "CURRENCY",
    "COLLECTIVE_INVESTMENT",
  ]),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string(),
  instrumentId: z.int(),
  netChange: z.number(),
  fundFamilyName: z.string(),
  fundFamilySymbol: z.string(),
  fundGroup: z.string(),
  type: z.enum([
    "NOT_APPLICABLE",
    "OPEN_END_NON_TAXABLE",
    "OPEN_END_TAXABLE",
    "NO_LOAD_NON_TAXABLE",
    "NO_LOAD_TAXABLE",
    "UNKNOWN",
  ]),
  exchangeCutoffTime: datetimeSchema,
  purchaseCutoffTime: datetimeSchema,
  redemptionCutoffTime: datetimeSchema,
});
export type TransactionMutualFund = z.infer<typeof TransactionMutualFundSchema>;

export type TransactionAPIOptionDeliverable = {
  rootSymbol: string;
  strikePercent: number;
  deliverableNumber: number;
  deliverableUnits: number;
  deliverable: TransactionInstrument;
  assetType: assetType;
};
export const TransactionAPIOptionDeliverableSchema: z.ZodType<TransactionAPIOptionDeliverable> =
  z.looseObject({
    rootSymbol: z.string(),
    strikePercent: z.int(),
    deliverableNumber: z.int(),
    deliverableUnits: z.number(),
    deliverable: z.lazy(() => TransactionInstrumentSchema),
    assetType: assetTypeSchema,
  });

export type TransactionOption = {
  assetType:
    | "EQUITY"
    | "OPTION"
    | "INDEX"
    | "MUTUAL_FUND"
    | "CASH_EQUIVALENT"
    | "FIXED_INCOME"
    | "CURRENCY"
    | "COLLECTIVE_INVESTMENT";
  cusip: string;
  symbol: string;
  description: string;
  instrumentId: number;
  netChange: number;
  expirationDate: Date;
  optionDeliverables: TransactionAPIOptionDeliverable[];
  optionPremiumMultiplier: number;
  putCall: "PUT" | "CALL" | "UNKNOWN";
  strikePrice: number;
  type: "VANILLA" | "BINARY" | "BARRIER" | "UNKNOWN";
  underlyingSymbol: string;
  underlyingCusip: string;
  deliverable: TransactionInstrument;
};
export const TransactionOptionSchema: z.ZodType<TransactionOption> =
  z.looseObject({
    assetType: z.enum([
      "EQUITY",
      "OPTION",
      "INDEX",
      "MUTUAL_FUND",
      "CASH_EQUIVALENT",
      "FIXED_INCOME",
      "CURRENCY",
      "COLLECTIVE_INVESTMENT",
    ]),
    cusip: z.string(),
    symbol: z.string(),
    description: z.string(),
    instrumentId: z.int(),
    netChange: z.number(),
    expirationDate: datetimeSchema,
    optionDeliverables: z.array(TransactionAPIOptionDeliverableSchema),
    optionPremiumMultiplier: z.int(),
    putCall: z.enum(["PUT", "CALL", "UNKNOWN"]),
    strikePrice: z.number(),
    type: z.enum(["VANILLA", "BINARY", "BARRIER", "UNKNOWN"]),
    underlyingSymbol: z.string(),
    underlyingCusip: z.string(),
    deliverable: z.lazy(() => TransactionInstrumentSchema),
  });

export const ProductSchema = z.looseObject({
  assetType: z.enum([
    "EQUITY",
    "OPTION",
    "INDEX",
    "MUTUAL_FUND",
    "CASH_EQUIVALENT",
    "FIXED_INCOME",
    "CURRENCY",
    "COLLECTIVE_INVESTMENT",
  ]),
  cusip: z.string(),
  symbol: z.string(),
  description: z.string(),
  instrumentId: z.int(),
  netChange: z.number(),
  type: z.enum(["TBD", "UNKNOWN"]),
});
export type Product = z.infer<typeof ProductSchema>;

export type TransactionInstrument =
  | TransactionCashEquivalent
  | CollectiveInvestment
  | Currency
  | TransactionEquity
  | TransactionFixedIncome
  | Forex
  | Future
  | Index
  | TransactionMutualFund
  | TransactionOption
  | Product;
export const TransactionInstrumentSchema = z.union([
  TransactionCashEquivalentSchema,
  CollectiveInvestmentSchema,
  CurrencySchema,
  TransactionEquitySchema,
  TransactionFixedIncomeSchema,
  ForexSchema,
  FutureSchema,
  IndexSchema,
  TransactionMutualFundSchema,
  TransactionOptionSchema,
  ProductSchema,
]);

export const TransferItemSchema = z.looseObject({
  instrument: TransactionInstrumentSchema,
  amount: z.number(),
  cost: z.number(),
  price: z.number(),
  feeType: z.enum([
    "COMMISSION",
    "SEC_FEE",
    "STR_FEE",
    "R_FEE",
    "CDSC_FEE",
    "OPT_REG_FEE",
    "ADDITIONAL_FEE",
    "MISCELLANEOUS_FEE",
    "FUTURES_EXCHANGE_FEE",
    "LOW_PROCEEDS_COMMISSION",
    "BASE_CHARGE",
    "GENERAL_CHARGE",
    "GST_FEE",
    "TAF_FEE",
    "INDEX_OPTION_FEE",
    "UNKNOWN",
  ]),
  positionEffect: z.enum(["OPENING", "CLOSING", "AUTOMATIC", "UNKNOWN"]),
});
export type TransferItem = z.infer<typeof TransferItemSchema>;

export const TransactionSchema = z.looseObject({
  activityId: z.int(),
  time: datetimeSchema,
  user: UserDetailsSchema,
  description: z.string(),
  accountNumber: z.string(),
  type: TransactionTypeSchema,
  status: z.enum(["VALID", "INVALID", "PENDING", "UNKNOWN"]),
  subAccount: z.enum(["CASH", "MARGIN", "SHORT", "DIV", "INCOME", "UNKNOWN"]),
  tradeDate: datetimeSchema,
  settlementDate: datetimeSchema,
  positionId: z.int(),
  orderId: z.int(),
  netAmount: z.number(),
  activityType: z.enum([
    "ACTIVITY_CORRECTION",
    "EXECUTION",
    "ORDER_ACTION",
    "TRANSFER",
    "UNKNOWN",
  ]),
  transferItems: z.array(TransferItemSchema),
});
export type Transaction = z.infer<typeof TransactionSchema>;
