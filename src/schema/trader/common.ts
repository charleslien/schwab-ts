import { z } from "zod";

const datetimeSchema = z.iso.datetime().transform((date) => new Date(date));

export const AccountNumberHashSchema = z.strictObject({
  accountNumber: z.string(),
  hashValue: z.string(),
});
export type AccountNumberHash = z.infer<typeof AccountNumberHashSchema>;

export const sessionSchema = z.enum(["NORMAL", "AM", "PM", "SEAMLESS"]);
export type session = z.infer<typeof sessionSchema>;

export const durationSchema = z.enum([
  "DAY",
  "GOOD_TILL_CANCEL",
  "FILL_OR_KILL",
  "IMMEDIATE_OR_CANCEL",
  "END_OF_WEEK",
  "END_OF_MONTH",
  "NEXT_END_OF_MONTH",
  "UNKNOWN",
]);
export type duration = z.infer<typeof durationSchema>;

export const orderTypeSchema = z.enum([
  "MARKET",
  "LIMIT",
  "STOP",
  "STOP_LIMIT",
  "TRAILING_STOP",
  "CABINET",
  "NON_MARKETABLE",
  "MARKET_ON_CLOSE",
  "EXERCISE",
  "TRAILING_STOP_LIMIT",
  "NET_DEBIT",
  "NET_CREDIT",
  "NET_ZERO",
  "LIMIT_ON_CLOSE",
  "UNKNOWN",
]);
export type orderType = z.infer<typeof orderTypeSchema>;

/** Same as orderType, but does not have UNKNOWN since this type is not allowed as an input */
export const orderTypeRequestSchema = z.enum([
  "MARKET",
  "LIMIT",
  "STOP",
  "STOP_LIMIT",
  "TRAILING_STOP",
  "CABINET",
  "NON_MARKETABLE",
  "MARKET_ON_CLOSE",
  "EXERCISE",
  "TRAILING_STOP_LIMIT",
  "NET_DEBIT",
  "NET_CREDIT",
  "NET_ZERO",
  "LIMIT_ON_CLOSE",
]);
export type orderTypeRequest = z.infer<typeof orderTypeRequestSchema>;

export const complexOrderStrategyTypeSchema = z.enum([
  "NONE",
  "COVERED",
  "VERTICAL",
  "BACK_RATIO",
  "CALENDAR",
  "DIAGONAL",
  "STRADDLE",
  "STRANGLE",
  "COLLAR_SYNTHETIC",
  "BUTTERFLY",
  "CONDOR",
  "IRON_CONDOR",
  "VERTICAL_ROLL",
  "COLLAR_WITH_STOCK",
  "DOUBLE_DIAGONAL",
  "UNBALANCED_BUTTERFLY",
  "UNBALANCED_CONDOR",
  "UNBALANCED_IRON_CONDOR",
  "UNBALANCED_VERTICAL_ROLL",
  "MUTUAL_FUND_SWAP",
  "CUSTOM",
]);
export type complexOrderStrategyType = z.infer<
  typeof complexOrderStrategyTypeSchema
>;

export const requestedDestinationSchema = z.enum([
  "INET",
  "ECN_ARCA",
  "CBOE",
  "AMEX",
  "PHLX",
  "ISE",
  "BOX",
  "NYSE",
  "NASDAQ",
  "BATS",
  "C2",
  "AUTO",
]);
export type requestedDestination = z.infer<typeof requestedDestinationSchema>;

export const stopPriceLinkBasisSchema = z.enum([
  "MANUAL",
  "BASE",
  "TRIGGER",
  "LAST",
  "BID",
  "ASK",
  "ASK_BID",
  "MARK",
  "AVERAGE",
]);
export type stopPriceLinkBasis = z.infer<typeof stopPriceLinkBasisSchema>;

export const stopPriceLinkTypeSchema = z.enum(["VALUE", "PERCENT", "TICK"]);
export type stopPriceLinkType = z.infer<typeof stopPriceLinkTypeSchema>;

export const stopPriceOffsetSchema = z.number();
export type stopPriceOffset = z.infer<typeof stopPriceOffsetSchema>;

export const stopTypeSchema = z.enum([
  "STANDARD",
  "BID",
  "ASK",
  "LAST",
  "MARK",
]);
export type stopType = z.infer<typeof stopTypeSchema>;

export const priceLinkBasisSchema = z.enum([
  "MANUAL",
  "BASE",
  "TRIGGER",
  "LAST",
  "BID",
  "ASK",
  "ASK_BID",
  "MARK",
  "AVERAGE",
]);
export type priceLinkBasis = z.infer<typeof priceLinkBasisSchema>;

export const priceLinkTypeSchema = z.enum(["VALUE", "PERCENT", "TICK"]);
export type priceLinkType = z.infer<typeof priceLinkTypeSchema>;

export const taxLotMethodSchema = z.enum([
  "FIFO",
  "LIFO",
  "HIGH_COST",
  "LOW_COST",
  "AVERAGE_COST",
  "SPECIFIC_LOT",
  "LOSS_HARVESTER",
]);
export type taxLotMethod = z.infer<typeof taxLotMethodSchema>;

export const specialInstructionSchema = z.enum([
  "ALL_OR_NONE",
  "DO_NOT_REDUCE",
  "ALL_OR_NONE_DO_NOT_REDUCE",
]);
export type specialInstruction = z.infer<typeof specialInstructionSchema>;

export const orderStrategyTypeSchema = z.enum([
  "SINGLE",
  "CANCEL",
  "RECALL",
  "PAIR",
  "FLATTEN",
  "TWO_DAY_SWAP",
  "BLAST_ALL",
  "OCO",
  "TRIGGER",
]);
export type orderStrategyType = z.infer<typeof orderStrategyTypeSchema>;

export const statusSchema = z.enum([
  "AWAITING_PARENT_ORDER",
  "AWAITING_CONDITION",
  "AWAITING_STOP_CONDITION",
  "AWAITING_MANUAL_REVIEW",
  "ACCEPTED",
  "AWAITING_UR_OUT",
  "PENDING_ACTIVATION",
  "QUEUED",
  "WORKING",
  "REJECTED",
  "PENDING_CANCEL",
  "CANCELED",
  "PENDING_REPLACE",
  "REPLACED",
  "FILLED",
  "EXPIRED",
  "NEW",
  "AWAITING_RELEASE_TIME",
  "PENDING_ACKNOWLEDGEMENT",
  "PENDING_RECALL",
  "UNKNOWN",
]);
export type status = z.infer<typeof statusSchema>;

export const amountIndicatorSchema = z.enum([
  "DOLLARS",
  "SHARES",
  "ALL_SHARES",
  "PERCENTAGE",
  "UNKNOWN",
]);
export type amountIndicator = z.infer<typeof amountIndicatorSchema>;

export const settlementInstructionSchema = z.enum([
  "REGULAR",
  "CASH",
  "NEXT_DAY",
  "UNKNOWN",
]);
export type settlementInstruction = z.infer<typeof settlementInstructionSchema>;

export const OrderBalanceSchema = z.strictObject({
  orderValue: z.number(),
  projectedAvailableFund: z.number(),
  projectedBuyingPower: z.number(),
  projectedCommission: z.number(),
});
export type OrderBalance = z.infer<typeof OrderBalanceSchema>;

export const apiOrderStatusSchema = z.enum([
  "AWAITING_PARENT_ORDER",
  "AWAITING_CONDITION",
  "AWAITING_STOP_CONDITION",
  "AWAITING_MANUAL_REVIEW",
  "ACCEPTED",
  "AWAITING_UR_OUT",
  "PENDING_ACTIVATION",
  "QUEUED",
  "WORKING",
  "REJECTED",
  "PENDING_CANCEL",
  "CANCELED",
  "PENDING_REPLACE",
  "REPLACED",
  "FILLED",
  "EXPIRED",
  "NEW",
  "AWAITING_RELEASE_TIME",
  "PENDING_ACKNOWLEDGEMENT",
  "PENDING_RECALL",
  "UNKNOWN",
]);
export type apiOrderStatus = z.infer<typeof apiOrderStatusSchema>;

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

export const instructionSchema = z.enum([
  "BUY",
  "SELL",
  "BUY_TO_COVER",
  "SELL_SHORT",
  "BUY_TO_OPEN",
  "BUY_TO_CLOSE",
  "SELL_TO_OPEN",
  "SELL_TO_CLOSE",
  "EXCHANGE",
  "SELL_SHORT_EXEMPT",
]);
export type instruction = z.infer<typeof instructionSchema>;

export const OrderLegSchema = z.strictObject({
  askPrice: z.number(),
  bidPrice: z.number(),
  lastPrice: z.number(),
  markPrice: z.number(),
  projectedCommission: z.number(),
  quantity: z.number(),
  finalSymbol: z.string(),
  legId: z.int(),
  assetType: assetTypeSchema,
  instruction: instructionSchema,
});
export type OrderLeg = z.infer<typeof OrderLegSchema>;

export const OrderStrategySchema = z.strictObject({
  accountNumber: z.string(),
  advancedOrderType: z.enum([
    "NONE",
    "OTO",
    "OCO",
    "OTOCO",
    "OT2OCO",
    "OT3OCO",
    "BLAST_ALL",
    "OTA",
    "PAIR",
  ]),
  closeTime: datetimeSchema,
  enteredTime: datetimeSchema,
  orderBalance: OrderBalanceSchema,
  orderStrategyType: orderStrategyTypeSchema,
  orderVersion: z.int(),
  session: sessionSchema,
  status: apiOrderStatusSchema,
  allOrNone: z.boolean(),
  discretionary: z.boolean(),
  duration: durationSchema,
  filledQuantity: z.number(),
  orderType: orderTypeSchema,
  orderValue: z.number(),
  price: z.number(),
  quantity: z.number(),
  remainingQuantity: z.number(),
  sellNonMarginableFirst: z.boolean(),
  settlementInstruction: settlementInstructionSchema,
  strategy: complexOrderStrategyTypeSchema,
  amountIndicator: amountIndicatorSchema,
  orderLegs: z.array(OrderLegSchema),
});
export type OrderStrategy = z.infer<typeof OrderStrategySchema>;

export const APIRuleActionSchema = z.enum([
  "ACCEPT",
  "ALERT",
  "REJECT",
  "REVIEW",
  "UNKNOWN",
]);
export type APIRuleAction = z.infer<typeof APIRuleActionSchema>;

export const OrderValidationDetailSchema = z.strictObject({
  validationRuleName: z.string(),
  message: z.string(),
  activityMessage: z.string(),
  originalSeverity: APIRuleActionSchema,
  overrideName: z.string(),
  overrideSeverity: APIRuleActionSchema,
});
export type OrderValidationDetail = z.infer<typeof OrderValidationDetailSchema>;

export const OrderValidationResultSchema = z.strictObject({
  alerts: z.array(OrderValidationDetailSchema),
  accepts: z.array(OrderValidationDetailSchema),
  rejects: z.array(OrderValidationDetailSchema),
  reviews: z.array(OrderValidationDetailSchema),
  warns: z.array(OrderValidationDetailSchema),
});
export type OrderValidationResult = z.infer<typeof OrderValidationResultSchema>;

export const FeeTypeSchema = z.enum([
  "COMMISSION",
  "SEC_FEE",
  "STR_FEE",
  "R_FEE",
  "CDSC_FEE",
  "OPT_REG_FEE",
  "ADDITIONAL_FEE",
  "MISCELLANEOUS_FEE",
  "FTT",
  "FUTURES_CLEARING_FEE",
  "FUTURES_DESK_OFFICE_FEE",
  "FUTURES_EXCHANGE_FEE",
  "FUTURES_GLOBEX_FEE",
  "FUTURES_NFA_FEE",
  "FUTURES_PIT_BROKERAGE_FEE",
  "FUTURES_TRANSACTION_FEE",
  "LOW_PROCEEDS_COMMISSION",
  "BASE_CHARGE",
  "GENERAL_CHARGE",
  "GST_FEE",
  "TAF_FEE",
  "INDEX_OPTION_FEE",
  "TEFRA_TAX",
  "STATE_TAX",
  "UNKNOWN",
]);
export type FeeType = z.infer<typeof FeeTypeSchema>;

export const CommissionValueSchema = z.strictObject({
  value: z.number(),
  type: FeeTypeSchema,
});
export type CommissionValue = z.infer<typeof CommissionValueSchema>;

export const CommissionLegSchema = z.strictObject({
  commissionValues: z.array(CommissionValueSchema),
});
export type CommissionLeg = z.infer<typeof CommissionLegSchema>;

export const CommissionSchema = z.strictObject({
  commissionLegs: z.array(CommissionLegSchema),
});
export type Commission = z.infer<typeof CommissionSchema>;

export const FeeValueSchema = z.strictObject({
  value: z.number(),
  type: FeeTypeSchema,
});
export type FeeValue = z.infer<typeof FeeValueSchema>;

export const FeeLegSchema = z.strictObject({
  feeValues: z.array(FeeValueSchema),
});
export type FeeLeg = z.infer<typeof FeeLegSchema>;

export const FeesSchema = z.strictObject({
  feeLegs: z.array(FeeLegSchema),
});
export type Fees = z.infer<typeof FeesSchema>;

export const CommissionAndFeeSchema = z.strictObject({
  commission: CommissionSchema,
  fee: FeesSchema,
  trueCommission: CommissionSchema,
});
export type CommissionAndFee = z.infer<typeof CommissionAndFeeSchema>;

export const AccountCashEquivalentSchema = z.strictObject({
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
export type AccountCashEquivalent = z.infer<typeof AccountCashEquivalentSchema>;

export const AccountEquitySchema = z.strictObject({
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
export type AccountEquity = z.infer<typeof AccountEquitySchema>;

export const AccountFixedIncomeSchema = z.strictObject({
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
  maturityDate: datetimeSchema,
  factor: z.number(),
  variableRate: z.number(),
});
export type AccountFixedIncome = z.infer<typeof AccountFixedIncomeSchema>;

export const AccountMutualFundSchema = z.strictObject({
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
export type AccountMutualFund = z.infer<typeof AccountMutualFundSchema>;

export const AccountAPIOptionDeliverableSchema = z.strictObject({
  symbol: z.string(),
  deliverableUnits: z.number(),
  apiCurrencyType: z.enum(["USD", "CAD", "EUR", "JPY"]),
  assetType: assetTypeSchema,
});
export type AccountAPIOptionDeliverable = z.infer<
  typeof AccountAPIOptionDeliverableSchema
>;

export const AccountOptionSchema = z.strictObject({
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
  optionDeliverables: AccountAPIOptionDeliverableSchema,
  putCall: z.enum(["PUT", "CALL", "UNKNOWN"]),
  optionMultiplier: z.int(),
  type: z.enum(["VANILLA", "BINARY", "BARRIER", "UNKNOWN"]),
  underlyingSymbol: z.string(),
});
export type AccountOption = z.infer<typeof AccountOptionSchema>;

export const AccountsInstrumentSchema = z.union([
  AccountCashEquivalentSchema,
  AccountEquitySchema,
  AccountFixedIncomeSchema,
  AccountMutualFundSchema,
  AccountOptionSchema,
]);
export type AccountsInstrument = z.infer<typeof AccountsInstrumentSchema>;

export const PositionSchema = z.strictObject({
  shortQuantity: z.number(),
  averagePrice: z.number(),
  currentDayProfitLoss: z.number(),
  currentDayProfitLossPercentage: z.number(),
  longQuantity: z.number(),
  settledLongQuantity: z.number(),
  settledShortQuantity: z.number(),
  agedQuantity: z.number(),
  instrument: AccountsInstrumentSchema,
  marketValue: z.number(),
  maintenanceRequirement: z.number(),
  averageLongPrice: z.number(),
  averageShortPrice: z.number(),
  taxLotAverageLongPrice: z.number(),
  taxLotAverageShortPrice: z.number(),
  longOpenProfitLoss: z.number(),
  shortOpenProfitLoss: z.number(),
  previousSessionLongQuantity: z.number(),
  previousSessionShortQuantity: z.number(),
  currentDayCost: z.number(),
});
export type Position = z.infer<typeof PositionSchema>;

export const MarginInitialBalanceSchema = z.strictObject({
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
  isInCall: z.number(),
  unsettledCash: z.number(),
  pendingDeposits: z.number(),
  marginBalance: z.number(),
  shortBalance: z.number(),
  accountValue: z.number(),
});
export type MarginInitialBalance = z.infer<typeof MarginInitialBalanceSchema>;

export const MarginBalanceSchema = z.strictObject({
  availableFunds: z.number(),
  availableFundsNonMarginableTrade: z.number(),
  buyingPower: z.number(),
  buyingPowerNonMarginableTrade: z.number(),
  dayTradingBuyingPower: z.number(),
  dayTradingBuyingPowerCall: z.number(),
  equity: z.number(),
  equityPercentage: z.number(),
  longMarginValue: z.number(),
  maintenanceCall: z.number(),
  maintenanceRequirement: z.number(),
  marginBalance: z.number(),
  regTCall: z.number(),
  shortBalance: z.number(),
  shortMarginValue: z.number(),
  sma: z.number(),
  isInCall: z.number(),
  stockBuyingPower: z.number(),
  optionBuyingPower: z.number(),
});
export type MarginBalance = z.infer<typeof MarginBalanceSchema>;

export const MarginAccountSchema = z.strictObject({
  type: z.enum(["CASH", "MARGIN"]),
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
export type MarginAccountSchema = z.infer<typeof MarginAccountSchema>;

export const CashInitialBalanceSchema = z.strictObject({
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
  isInCall: z.number(),
  unsettledCash: z.number(),
  cashDebitCallValue: z.number(),
  pendingDeposits: z.number(),
  accountValue: z.number(),
});
export type CashInitialBalance = z.infer<typeof CashInitialBalanceSchema>;

export const CashBalanceSchema = z.strictObject({
  cashAvailableForTrading: z.number(),
  cashAvailableForWithdrawal: z.number(),
  cashCall: z.number(),
  longNonMarginableMarketValue: z.number(),
  totalCash: z.number(),
  cashDebitCallValue: z.number(),
  unsettledCash: z.number(),
});
export type CashBalance = z.infer<typeof CashBalanceSchema>;

export const CashAccountSchema = z.strictObject({
  type: z.enum(["CASH", "MARGIN"]),
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

export const SecuritiesAccountSchema = z.union([
  MarginAccountSchema,
  CashAccountSchema,
]);
export type SecuritiesAccount = z.infer<typeof SecuritiesAccountSchema>;

export const AccountSchema = z.strictObject({
  securitiesAccount: SecuritiesAccountSchema,
});
export type Account = z.infer<typeof AccountSchema>;

export const DateParamSchema = z.strictObject({
  date: datetimeSchema,
});

export const OrderLegCollectionSchema = z.strictObject({
  orderLegType: z.enum([
    "EQUITY",
    "OPTION",
    "INDEX",
    "MUTUAL_FUND",
    "CASH_EQUIVALENT",
    "FIXED_INCOME",
    "CURRENCY",
    "COLLECTIVE_INVESTMENT",
  ]),
  legId: z.int(),
  instrument: AccountsInstrumentSchema,
  instruction: instructionSchema,
  positionEffect: z.enum(["OPENING", "CLOSING", "AUTOMATIC"]),
  quantity: z.number(),
  quantityType: z.enum(["ALL_SHARES", "DOLLARS", "SHARES"]),
  divCapGains: z.enum(["REINVEST", "PAYOUT"]),
  toSymbol: z.string(),
});
export type OrderLegCollection = z.infer<typeof OrderLegCollectionSchema>;

export const ExecutionLegSchema = z.strictObject({
  legId: z.int(),
  price: z.number(),
  quantity: z.number(),
  mismarkedQuantity: z.number(),
  instrumentId: z.int(),
  time: datetimeSchema,
});
export type ExecutionLeg = z.infer<typeof ExecutionLegSchema>;

export const OrderActivitySchema = z.strictObject({
  activityType: z.enum(["EXECUTION", "ORDER_ACTION"]),
  executionType: z.literal("FILL"),
  quantity: z.number(),
  orderRemainingQuantity: z.number(),
  executionLegs: z.array(ExecutionLegSchema),
});
export type OrderActivity = z.infer<typeof OrderActivitySchema>;

/** Not found in docs */
export const ReplacingOrderSchema = z.strictObject({});
export type ReplacingOrder = z.infer<typeof ReplacingOrderSchema>;

/** Not found in docs */
export const ChildOrderSchema = z.strictObject({});
export type ChildOrder = z.infer<typeof ChildOrderSchema>;

export const OrderSchema = z.strictObject({
  session: sessionSchema,
  duration: durationSchema,
  orderType: orderTypeSchema,
  cancelTime: datetimeSchema,
  complexOrderStrategyType: complexOrderStrategyTypeSchema,
  quantity: z.number(),
  filledQuantity: z.number(),
  remainingQuantity: z.number(),
  requestedDestination: requestedDestinationSchema,
  destinationLinkName: z.string(),
  releaseTime: datetimeSchema,
  stopPrice: z.number(),
  stopPriceLinkBasis: stopPriceLinkBasisSchema,
  stopPriceLinkType: stopPriceLinkTypeSchema,
  stopPriceOffset: z.number(),
  stopType: stopTypeSchema,
  priceLinkBasis: priceLinkBasisSchema,
  priceLinkType: priceLinkTypeSchema,
  price: z.number(),
  taxLotMethod: taxLotMethodSchema,
  orderLegCollection: z.array(OrderLegCollectionSchema),
  activationPrice: z.number(),
  specialInstruction: specialInstructionSchema,
  orderStrategyType: orderStrategyTypeSchema,
  orderId: z.int(),
  cancelable: z.boolean().default(false),
  editable: z.boolean().default(false),
  status: statusSchema,
  enteredTime: datetimeSchema,
  closeTime: datetimeSchema,
  tag: z.string(),
  accountNumber: z.int(),
  orderActivityCollection: z.array(OrderActivitySchema),
  replacingOrderCollection: z.array(ReplacingOrderSchema),
  childOrderStrategies: z.array(ChildOrderSchema),
  statusDescription: z.string(),
});
export type Order = z.infer<typeof OrderSchema>;

export const OrderRequestSchema = z.strictObject({
  session: sessionSchema,
  duration: durationSchema,
  orderType: orderTypeRequestSchema,
  cancelTime: datetimeSchema,
  complexOrderStrategyType: complexOrderStrategyTypeSchema,
  quantity: z.number(),
  filledQuantity: z.number(),
  remainingQuantity: z.number(),
  destinationLinkName: z.string(),
  releaseTime: datetimeSchema,
  stopPrice: z.number(),
  stopPriceLinkBasis: stopPriceLinkBasisSchema,
  stopPriceLinkType: stopPriceLinkTypeSchema,
  stopPriceOffset: z.number(),
  stopType: stopTypeSchema,
  priceLinkBasis: priceLinkBasisSchema,
  priceLinkType: priceLinkTypeSchema,
  price: z.number(),
  taxLotMethod: taxLotMethodSchema,
  orderLegCollection: z.array(OrderLegCollectionSchema),
  activationPrice: z.number(),
  specialInstruction: specialInstructionSchema,
  orderStrategyType: orderStrategyTypeSchema,
  orderId: z.int(),
  cancelable: z.boolean().default(false),
  editable: z.boolean().default(false),
  status: statusSchema,
  enteredTime: datetimeSchema,
  closeTime: datetimeSchema,
  accountNumber: z.int(),
  orderActivityCollection: z.array(OrderActivitySchema),
  replacingOrderCollection: z.array(ReplacingOrderSchema),
  childOrderStrategies: z.array(ChildOrderSchema),
  statusDescription: z.string(),
});
export type OrderRequest = z.infer<typeof OrderRequestSchema>;

export const PreviewOrderSchema = z.strictObject({
  orderId: z.int(),
  orderStrategy: OrderStrategySchema,
  orderValidationResult: OrderValidationResultSchema,
  commissionAndFee: CommissionAndFeeSchema,
});
export type PreviewOrder = z.infer<typeof PreviewOrderSchema>;

export const ServiceErrorSchema = z.strictObject({
  errors: z.array(
    z.object({
      id: z.string(),
      status: z.number(),
      title: z.string(),
      detail: z.string(),
    })
  ),
});
export type ServiceError = z.infer<typeof ServiceErrorSchema>;

export const SecuritiesAccountBaseSchema = z.strictObject({
  type: z.enum(["CASH", "MARGIN"]),
  accountNumber: z.string(),
  roundTrips: z.int(),
  isDayTrader: z.boolean().default(false),
  isClosingOnlyRestricted: z.boolean().default(false),
  pfcbFlag: z.boolean().default(false),
  positions: z.array(PositionSchema),
});
export type SecuritiesAccountBase = z.infer<typeof SecuritiesAccountBaseSchema>;

export const TransactionBaseInstrumentSchema = z.strictObject({
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
export type TransactionBaseInstrument = z.infer<
  typeof TransactionBaseInstrumentSchema
>;

export const AccountsBaseInstrumentSchema = z.strictObject({
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
export type AccountsBaseInstrument = z.infer<
  typeof AccountsBaseInstrumentSchema
>;

export const TransactionCashEquivalentSchema = z.strictObject({
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

export const CollectiveInvestmentSchema = z.strictObject({
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

export const CurrencySchema = z.strictObject({
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

export const TransactionEquitySchema = z.strictObject({
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

export const TransactionFixedIncomeSchema = z.strictObject({
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

export const ForexSchema = z.strictObject({
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

export const TransactionMutualFundSchema = z.strictObject({
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
  z.strictObject({
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
  z.strictObject({
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

export const ProductSchema = z.strictObject({
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

export const IndexSchema = z.strictObject({
  activeContract: z.boolean().default(false),
  type: z.enum(["BROAD_BASED", "NARROW_BASED", "UNKNOWN"]),
});
export type Index = z.infer<typeof IndexSchema>;

export const FutureSchema = z.strictObject({
  activeContract: z.boolean().default(false),
  type: z.enum(["STANDARD", "UNKNOWN"]),
  expirationDate: datetimeSchema,
  lastTradingDate: datetimeSchema,
  firstNoticeDate: datetimeSchema,
  multiplier: z.number(),
});
export type Future = z.infer<typeof FutureSchema>;

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

export const UserDetailsSchema = z.strictObject({
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

export const TransferItemSchema = z.strictObject({
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

export const TransactionSchema = z.strictObject({
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

// ------- Response -------

export const responseHeaderSchema = z.object({
  "schwab-client-correlid": z.string(),
});
export type Header = z.infer<typeof responseHeaderSchema>;
