import { z } from "zod";
import { assetTypeSchema } from "./asset-type";
import { datetimeSchema } from "./datetime";
import {
  complexOrderStrategyTypeSchema,
  durationSchema,
  instructionSchema,
  orderStrategyTypeSchema,
  orderTypeSchema,
  sessionSchema,
} from "./order";

export const OrderBalanceSchema = z.looseObject({
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

export const settlementInstructionSchema = z.enum([
  "REGULAR",
  "CASH",
  "NEXT_DAY",
  "UNKNOWN",
]);
export type settlementInstruction = z.infer<typeof settlementInstructionSchema>;

export const amountIndicatorSchema = z.enum([
  "DOLLARS",
  "SHARES",
  "ALL_SHARES",
  "PERCENTAGE",
  "UNKNOWN",
]);
export type amountIndicator = z.infer<typeof amountIndicatorSchema>;

export const OrderLegSchema = z.looseObject({
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

export const OrderStrategySchema = z.looseObject({
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

export const OrderValidationDetailSchema = z.looseObject({
  validationRuleName: z.string(),
  message: z.string(),
  activityMessage: z.string(),
  originalSeverity: APIRuleActionSchema,
  overrideName: z.string(),
  overrideSeverity: APIRuleActionSchema,
});
export type OrderValidationDetail = z.infer<typeof OrderValidationDetailSchema>;

export const OrderValidationResultSchema = z.looseObject({
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

export const CommissionValueSchema = z.looseObject({
  value: z.number(),
  type: FeeTypeSchema,
});
export type CommissionValue = z.infer<typeof CommissionValueSchema>;

export const CommissionLegSchema = z.looseObject({
  commissionValues: z.array(CommissionValueSchema),
});
export type CommissionLeg = z.infer<typeof CommissionLegSchema>;

export const CommissionSchema = z.looseObject({
  commissionLegs: z.array(CommissionLegSchema),
});
export type Commission = z.infer<typeof CommissionSchema>;

export const FeeValueSchema = z.looseObject({
  value: z.number(),
  type: FeeTypeSchema,
});
export type FeeValue = z.infer<typeof FeeValueSchema>;

export const FeeLegSchema = z.looseObject({
  feeValues: z.array(FeeValueSchema),
});
export type FeeLeg = z.infer<typeof FeeLegSchema>;

export const FeesSchema = z.looseObject({
  feeLegs: z.array(FeeLegSchema),
});
export type Fees = z.infer<typeof FeesSchema>;

export const CommissionAndFeeSchema = z.looseObject({
  commission: CommissionSchema,
  fee: FeesSchema,
  trueCommission: CommissionSchema,
});
export type CommissionAndFee = z.infer<typeof CommissionAndFeeSchema>;

export const PreviewOrderSchema = z.looseObject({
  orderId: z.int(),
  orderStrategy: OrderStrategySchema,
  orderValidationResult: OrderValidationResultSchema,
  commissionAndFee: CommissionAndFeeSchema,
});
export type PreviewOrder = z.infer<typeof PreviewOrderSchema>;
