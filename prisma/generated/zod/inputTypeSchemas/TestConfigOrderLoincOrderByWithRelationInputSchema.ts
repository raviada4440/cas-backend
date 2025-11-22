import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TestCatalogConfigurationOrderByWithRelationInputSchema } from './TestCatalogConfigurationOrderByWithRelationInputSchema';
import { LoincOrderByWithRelationInputSchema } from './LoincOrderByWithRelationInputSchema';

export const TestConfigOrderLoincOrderByWithRelationInputSchema: z.ZodType<Prisma.TestConfigOrderLoincOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  loincCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationOrderByWithRelationInputSchema).optional(),
  loinc: z.lazy(() => LoincOrderByWithRelationInputSchema).optional(),
});

export default TestConfigOrderLoincOrderByWithRelationInputSchema;
