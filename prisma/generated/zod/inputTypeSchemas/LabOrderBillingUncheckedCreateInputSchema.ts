import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const LabOrderBillingUncheckedCreateInputSchema: z.ZodType<Prisma.LabOrderBillingUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  labOrderId: z.string().optional().nullable(),
  billToId: z.string().optional().nullable(),
  healthPlanId: z.string().optional().nullable(),
  patientStatus: z.string().optional().nullable(),
  sponsoredTestCouponCode: z.string().optional().nullable(),
  billingType: z.string().optional().nullable(),
  insuranceProvider: z.string().optional().nullable(),
  policyNumber: z.string().optional().nullable(),
  planName: z.string().optional().nullable(),
  groupNumber: z.string().optional().nullable(),
  benefitsId: z.string().optional().nullable(),
  insuredName: z.string().optional().nullable(),
  relationToPatient: z.string().optional().nullable(),
  insuredDob: z.date().optional().nullable(),
  insuredPhone: z.string().optional().nullable(),
  insurerState: z.string().optional().nullable(),
  referralAuthNumber: z.string().optional().nullable(),
  copayAmount: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  deductibleAmount: z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default LabOrderBillingUncheckedCreateInputSchema;
