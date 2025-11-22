import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionBiomarkerOrderByRelationAggregateInputSchema } from './TestCatalogVersionBiomarkerOrderByRelationAggregateInputSchema';
import { TestConfigBiomarkerOrderByRelationAggregateInputSchema } from './TestConfigBiomarkerOrderByRelationAggregateInputSchema';

export const BiomarkerOrderByWithRelationInputSchema: z.ZodType<Prisma.BiomarkerOrderByWithRelationInput> = z.strictObject({
  hgncId: z.lazy(() => SortOrderSchema).optional(),
  hgncStatus: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  hgncApprovedSymbol: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  hgncApprovedName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerOrderByRelationAggregateInputSchema).optional(),
  configOverrides: z.lazy(() => TestConfigBiomarkerOrderByRelationAggregateInputSchema).optional(),
});

export default BiomarkerOrderByWithRelationInputSchema;
