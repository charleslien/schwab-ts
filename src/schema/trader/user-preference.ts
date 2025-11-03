import { z } from "zod";

// ------- From documentation -------

export const UserPreferenceAccountSchema = z.looseObject({
  accountNumber: z.string(),
  primaryAccount: z.boolean().default(false),
  type: z.string(),
  nickName: z.string(),
  accountColor: z.enum(["Green", "Blue"]),
  displayAcctId: z.string(),
  autoPositionEffect: z.boolean().default(false),
});
export type UserPreferenceAccount = z.infer<typeof UserPreferenceAccountSchema>;

export const StreamerInfoSchema = z.strictObject({
  streamerSocketUrl: z.string(),
  schwabClientCustomerId: z.string(),
  schwabClientCorrelId: z.string(),
  schwabClientChannel: z.string(),
  schwabClientFunctionId: z.string(),
});
export type StreamerInfo = z.infer<typeof StreamerInfoSchema>;

export const OfferSchema = z.strictObject({
  level2Permissions: z.boolean().default(false),
  mktDataPermission: z.string(),
});
export type Offer = z.infer<typeof OfferSchema>;

export const UserPreferenceSchema = z.strictObject({
  accounts: z.array(UserPreferenceAccountSchema),
  streamerInfo: z.array(StreamerInfoSchema),
  offers: z.array(OfferSchema),
});
export type UserPreference = z.infer<typeof UserPreferenceSchema>;
