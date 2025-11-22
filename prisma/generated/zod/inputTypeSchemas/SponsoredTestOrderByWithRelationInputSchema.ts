import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { LabOrderSponsoredTestConsentOrderByRelationAggregateInputSchema } from './LabOrderSponsoredTestConsentOrderByRelationAggregateInputSchema';
import { LabOrderByWithRelationInputSchema } from './LabOrderByWithRelationInputSchema';
import { SponsoredProgramOrderByWithRelationInputSchema } from './SponsoredProgramOrderByWithRelationInputSchema';
import { TestCatalogOrderByWithRelationInputSchema } from './TestCatalogOrderByWithRelationInputSchema';

export const SponsoredTestOrderByWithRelationInputSchema: z.ZodType<Prisma.SponsoredTestOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  testId: z.lazy(() => SortOrderSchema).optional(),
  labTestId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  sponsoredProgramId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  labId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  casandraTestId: z.lazy(() => SortOrderSchema).optional(),
  category: z.lazy(() => SortOrderSchema).optional(),
  subCategory: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentOrderByRelationAggregateInputSchema).optional(),
  lab: z.lazy(() => LabOrderByWithRelationInputSchema).optional(),
  sponsoredProgram: z.lazy(() => SponsoredProgramOrderByWithRelationInputSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogOrderByWithRelationInputSchema).optional(),
});

export default SponsoredTestOrderByWithRelationInputSchema;
