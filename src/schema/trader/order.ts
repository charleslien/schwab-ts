import { z } from "zod";
import { AccountsInstrumentSchema } from "./accounts-instrument";
import { datetimeSchema } from "./datetime";

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

export const OrderLegCollectionSchema = z.looseObject({
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

export const ExecutionLegSchema = z.looseObject({
  legId: z.int(),
  price: z.number(),
  quantity: z.number(),
  mismarkedQuantity: z.number(),
  instrumentId: z.int(),
  time: datetimeSchema,
});
export type ExecutionLeg = z.infer<typeof ExecutionLegSchema>;

export const OrderActivitySchema = z.looseObject({
  activityType: z.enum(["EXECUTION", "ORDER_ACTION"]),
  executionType: z.literal("FILL"),
  quantity: z.number(),
  orderRemainingQuantity: z.number(),
  executionLegs: z.array(ExecutionLegSchema),
});
export type OrderActivity = z.infer<typeof OrderActivitySchema>;

/** Missing from docs */
export const ReplacingOrderSchema = z.looseObject({});
export type ReplacingOrder = z.infer<typeof ReplacingOrderSchema>;

/** Missing from docs */
export const ChildOrderSchema = z.looseObject({});
export type ChildOrder = z.infer<typeof ChildOrderSchema>;

export const OrderSchema = z.looseObject({
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
