import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogConfigurationOrderByWithRelationInputSchema } from './TestCatalogConfigurationOrderByWithRelationInputSchema';
import { LoincOrderByWithRelationInputSchema } from './LoincOrderByWithRelationInputSchema';

export const TestConfigResultLoincOrderByWithRelationInputSchema: z.ZodType<Prisma.TestConfigResultLoincOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  resultCode: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  resultCodeName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  uom: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  loincCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationOrderByWithRelationInputSchema).optional(),
  loinc: z.lazy(() => LoincOrderByWithRelationInputSchema).optional(),
});

export default TestConfigResultLoincOrderByWithRelationInputSchema;
