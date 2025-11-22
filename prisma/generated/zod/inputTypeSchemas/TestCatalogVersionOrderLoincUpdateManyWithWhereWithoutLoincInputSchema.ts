import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincScalarWhereInputSchema } from './TestCatalogVersionOrderLoincScalarWhereInputSchema';
import { TestCatalogVersionOrderLoincUpdateManyMutationInputSchema } from './TestCatalogVersionOrderLoincUpdateManyMutationInputSchema';
import { TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutLoincInputSchema } from './TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutLoincInputSchema';

export const TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutLoincInputSchema) ]),
});

export default TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutLoincInputSchema;
