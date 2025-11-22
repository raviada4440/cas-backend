import { Prisma } from '@prisma/client';
import Decimal from 'decimal.js';
import { z } from 'zod';
import { LabOrderBillingWhereInputSchema } from './LabOrderBillingWhereInputSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DecimalNullableFilterSchema } from './DecimalNullableFilterSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderNullableScalarRelationFilterSchema } from './LabOrderNullableScalarRelationFilterSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderBillingWhereUniqueInputSchema: z.ZodType<Prisma.LabOrderBillingWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => LabOrderBillingWhereInputSchema), z.lazy(() => LabOrderBillingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderBillingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderBillingWhereInputSchema), z.lazy(() => LabOrderBillingWhereInputSchema).array() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  billToId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  healthPlanId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  patientStatus: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  sponsoredTestCouponCode: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  billingType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  insuranceProvider: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  policyNumber: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  planName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  groupNumber: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  benefitsId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  insuredName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  relationToPatient: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  insuredDob: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  insuredPhone: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  insurerState: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  referralAuthNumber: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  copayAmount: z.union([ z.lazy(() => DecimalNullableFilterSchema), z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  deductibleAmount: z.union([ z.lazy(() => DecimalNullableFilterSchema), z.union([z.number(),z.string(),z.instanceof(Decimal),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }) ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrder: z.union([ z.lazy(() => LabOrderNullableScalarRelationFilterSchema), z.lazy(() => LabOrderWhereInputSchema) ]).optional().nullable(),
}));

export default LabOrderBillingWhereUniqueInputSchema;
