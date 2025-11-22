import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogConfigurationOrderByWithRelationInputSchema } from './TestCatalogConfigurationOrderByWithRelationInputSchema';
import { BiomarkerOrderByWithRelationInputSchema } from './BiomarkerOrderByWithRelationInputSchema';

export const TestConfigBiomarkerOrderByWithRelationInputSchema: z.ZodType<Prisma.TestConfigBiomarkerOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  hgncId: z.lazy(() => SortOrderSchema).optional(),
  action: z.lazy(() => SortOrderSchema).optional(),
  transcriptReference: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  reportTier: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isReportable: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  displayOrder: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationOrderByWithRelationInputSchema).optional(),
  biomarker: z.lazy(() => BiomarkerOrderByWithRelationInputSchema).optional(),
});

export default TestConfigBiomarkerOrderByWithRelationInputSchema;
