import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionCreateNestedOneWithoutCptCodesInputSchema } from './TestCatalogVersionCreateNestedOneWithoutCptCodesInputSchema';

export const TestCatalogVersionCptCodeCreateInputSchema: z.ZodType<Prisma.TestCatalogVersionCptCodeCreateInput> = z.strictObject({
  id: z.string().optional(),
  cptCode: z.string(),
  modifier: z.string().optional().nullable(),
  isPrimary: z.boolean().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutCptCodesInputSchema),
});

export default TestCatalogVersionCptCodeCreateInputSchema;
