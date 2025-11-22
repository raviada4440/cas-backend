import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LabOrderSponsoredTestConsentScalarWhereInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema), z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema), z.lazy(() => LabOrderSponsoredTestConsentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  sponsoredCasandraTestId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  providerName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  providerNpi: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  consentAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default LabOrderSponsoredTestConsentScalarWhereInputSchema;
