import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SponsoredTestNullableScalarRelationFilterSchema } from './SponsoredTestNullableScalarRelationFilterSchema';
import { SponsoredTestWhereInputSchema } from './SponsoredTestWhereInputSchema';
import { LabOrderNullableScalarRelationFilterSchema } from './LabOrderNullableScalarRelationFilterSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';

export const LabOrderSponsoredTestConsentWhereInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderSponsoredTestConsentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderSponsoredTestConsentWhereInputSchema), z.lazy(() => LabOrderSponsoredTestConsentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  sponsoredCasandraTestId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  providerName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  providerNpi: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  consentAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  sponsoredTest: z.union([ z.lazy(() => SponsoredTestNullableScalarRelationFilterSchema), z.lazy(() => SponsoredTestWhereInputSchema) ]).optional().nullable(),
  labOrder: z.union([ z.lazy(() => LabOrderNullableScalarRelationFilterSchema), z.lazy(() => LabOrderWhereInputSchema) ]).optional().nullable(),
});

export default LabOrderSponsoredTestConsentWhereInputSchema;
