import { z } from "zod";
import { AccountsInstrumentSchema } from "./accounts-instrument";

export const AccountNumberHashSchema = z.looseObject({
  accountNumber: z.string(),
  hashValue: z.string(),
});
export type AccountNumberHash = z.infer<typeof AccountNumberHashSchema>;

export const PositionSchema = z
  .looseObject({
    averagePrice: z.number(),
    currentDayProfitLoss: z.number(),
    currentDayProfitLossPercentage: z.number(),
    instrument: AccountsInstrumentSchema,
    marketValue: z.number(),
    maintenanceRequirement: z.number(),
    currentDayCost: z.number(),
  })
  .and(
    z.union([
      z.object({
        longQuantity: z.literal(0),
        settledLongQuantity: z.literal(0),

        shortQuantity: z.number(),
        settledShortQuantity: z.number(),
        averageShortPrice: z.number(),
        taxLotAverageShortPrice: z.number(),
        shortOpenProfitLoss: z.number(),
        previousSessionShortQuantity: z.number(),
      }),
      z.object({
        shortQuantity: z.literal(0),
        settledShortQuantity: z.literal(0),

        longQuantity: z.number(),
        settledLongQuantity: z.number(),
        averageLongPrice: z.number(),
        taxLotAverageLongPrice: z.number(),
        longOpenProfitLoss: z.number(),
        previousSessionLongQuantity: z.number(),
      }),
    ])
  );
export type Position = z.infer<typeof PositionSchema>;

export const MarginInitialBalanceSchema = z.looseObject({
  accruedInterest: z.number(),
  availableFundsNonMarginableTrade: z.number(),
  bondValue: z.number(),
  buyingPower: z.number(),
  cashBalance: z.number(),
  cashAvailableForTrading: z.number(),
  cashReceipts: z.number(),
  dayTradingBuyingPower: z.number(),
  dayTradingBuyingPowerCall: z.number(),
  dayTradingEquityCall: z.number(),
  equity: z.number(),
  equityPercentage: z.number(),
  liquidationValue: z.number(),
  longMarginValue: z.number(),
  longOptionMarketValue: z.number(),
  longStockValue: z.number(),
  maintenanceCall: z.number(),
  maintenanceRequirement: z.number(),
  margin: z.number(),
  marginEquity: z.number(),
  moneyMarketFund: z.number(),
  mutualFundValue: z.number(),
  regTCall: z.number(),
  shortMarginValue: z.number(),
  shortOptionMarketValue: z.number(),
  shortStockValue: z.number(),
  totalCash: z.number(),
  isInCall: z.boolean(),
  unsettledCash: z.number().default(0),
  pendingDeposits: z.number(),
  marginBalance: z.number(),
  shortBalance: z.number(),
  accountValue: z.number(),
});
export type MarginInitialBalance = z.infer<typeof MarginInitialBalanceSchema>;

export const MarginBalanceSchema = z.looseObject({
  availableFunds: z.number(),
  availableFundsNonMarginableTrade: z.number(),
  buyingPower: z.number(),
  buyingPowerNonMarginableTrade: z.number().optional(),
  dayTradingBuyingPower: z.number(),
  dayTradingBuyingPowerCall: z.number().optional(),
  equity: z.number().optional(),
  equityPercentage: z.number().optional(),
  longMarginValue: z.number().optional(),
  maintenanceCall: z.number(),
  maintenanceRequirement: z.number().optional(),
  marginBalance: z.number().optional(),
  regTCall: z.number(),
  shortBalance: z.number().optional(),
  shortMarginValue: z.number().optional(),
  sma: z.number().optional(),
  isInCall: z.boolean().optional(),
  stockBuyingPower: z.number().optional(),
  optionBuyingPower: z.number().optional(),
});
export type MarginBalance = z.infer<typeof MarginBalanceSchema>;

export const MarginAccountSchema = z.looseObject({
  type: z.literal("MARGIN"),
  accountNumber: z.string(),
  roundTrips: z.int(),
  isDayTrader: z.boolean().default(false),
  isClosingOnlyRestricted: z.boolean().default(false),
  pfcbFlag: z.boolean().default(false),
  positions: z.array(PositionSchema),
  initialBalances: MarginInitialBalanceSchema,
  currentBalances: MarginBalanceSchema,
  projectedBalances: MarginBalanceSchema,
});
export type MarginAccount = z.infer<typeof MarginAccountSchema>;

export const CashInitialBalanceSchema = z.looseObject({
  accruedInterest: z.number(),
  cashAvailableForTrading: z.number(),
  cashAvailableForWithdrawal: z.number(),
  cashBalance: z.number(),
  bondValue: z.number(),
  cashReceipts: z.number(),
  liquidationValue: z.number(),
  longOptionMarketValue: z.number(),
  longStockValue: z.number(),
  moneyMarketFund: z.number(),
  mutualFundValue: z.number(),
  shortOptionMarketValue: z.number(),
  shortStockValue: z.number(),
  isInCall: z.boolean(),
  unsettledCash: z.number(),
  cashDebitCallValue: z.number(),
  pendingDeposits: z.number(),
  accountValue: z.number(),
});
export type CashInitialBalance = z.infer<typeof CashInitialBalanceSchema>;

export const CashBalanceSchema = z.looseObject({
  cashAvailableForTrading: z.number(),
  cashAvailableForWithdrawal: z.number(),
  cashCall: z.number(),
  longNonMarginableMarketValue: z.number(),
  totalCash: z.number(),
  cashDebitCallValue: z.number(),
  unsettledCash: z.number(),
});
export type CashBalance = z.infer<typeof CashBalanceSchema>;

export const CashAccountSchema = z.looseObject({
  type: z.literal("CASH"),
  accountNumber: z.string(),
  roundTrips: z.int(),
  isDayTrader: z.boolean().default(false),
  isClosingOnlyRestricted: z.boolean().default(false),
  pfcbFlag: z.boolean().default(false),
  positions: z.array(PositionSchema),
  initialBalances: CashInitialBalanceSchema,
  currentBalances: CashBalanceSchema,
  projectedBalances: CashBalanceSchema,
});
export type CashAccount = z.infer<typeof CashAccountSchema>;

export const SecuritiesAccountSchema = z.discriminatedUnion("type", [
  MarginAccountSchema,
  CashAccountSchema,
]);
export type SecuritiesAccount = z.infer<typeof SecuritiesAccountSchema>;

const AggregatedBalanceSchema = z.looseObject({
  currentLiquidationValue: z.number(),
  liquidationValue: z.number(),
});

export const AccountSchema = z.looseObject({
  securitiesAccount: SecuritiesAccountSchema,
  aggregatedBalance: AggregatedBalanceSchema,
});
export type Account = z.infer<typeof AccountSchema>;
