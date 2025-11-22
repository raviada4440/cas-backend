import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderLoincScalarWhereInputSchema } from './TestCatalogVersionOrderLoincScalarWhereInputSchema';
import { TestCatalogVersionOrderLoincUpdateManyMutationInputSchema } from './TestCatalogVersionOrderLoincUpdateManyMutationInputSchema';
import { TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutVersionInputSchema } from './TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutVersionInputSchema';

export const TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionOrderLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionOrderLoincUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionOrderLoincUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionOrderLoincUpdateManyWithWhereWithoutVersionInputSchema;
