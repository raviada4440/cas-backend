import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincScalarWhereInputSchema } from './TestCatalogVersionResultLoincScalarWhereInputSchema';
import { TestCatalogVersionResultLoincUpdateManyMutationInputSchema } from './TestCatalogVersionResultLoincUpdateManyMutationInputSchema';
import { TestCatalogVersionResultLoincUncheckedUpdateManyWithoutVersionInputSchema } from './TestCatalogVersionResultLoincUncheckedUpdateManyWithoutVersionInputSchema';

export const TestCatalogVersionResultLoincUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionResultLoincUpdateManyWithWhereWithoutVersionInputSchema;
