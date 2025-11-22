import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogConfigurationOrderByWithRelationInputSchema } from './TestCatalogConfigurationOrderByWithRelationInputSchema';

export const TestConfigCptCodeOrderByWithRelationInputSchema: z.ZodType<Prisma.TestConfigCptCodeOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  cptCode: z.lazy(() => SortOrderSchema).optional(),
  modifier: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPrimary: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  configuration: z.lazy(() => TestCatalogConfigurationOrderByWithRelationInputSchema).optional(),
});

export default TestConfigCptCodeOrderByWithRelationInputSchema;
