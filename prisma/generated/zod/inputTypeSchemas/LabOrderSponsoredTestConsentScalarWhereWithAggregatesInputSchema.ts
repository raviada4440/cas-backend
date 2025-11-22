import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const LabOrderSponsoredTestConsentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LabOrderSponsoredTestConsentScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderSponsoredTestConsentScalarWhereWithAggregatesInputSchema), z.lazy(() => LabOrderSponsoredTestConsentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderSponsoredTestConsentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderSponsoredTestConsentScalarWhereWithAggregatesInputSchema), z.lazy(() => LabOrderSponsoredTestConsentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  sponsoredCasandraTestId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  providerName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  providerNpi: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  consentAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default LabOrderSponsoredTestConsentScalarWhereWithAggregatesInputSchema;
