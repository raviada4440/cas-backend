import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincScalarWhereInputSchema } from './TestCatalogVersionResultLoincScalarWhereInputSchema';
import { TestCatalogVersionResultLoincUpdateManyMutationInputSchema } from './TestCatalogVersionResultLoincUpdateManyMutationInputSchema';
import { TestCatalogVersionResultLoincUncheckedUpdateManyWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUncheckedUpdateManyWithoutLoincInputSchema';

export const TestCatalogVersionResultLoincUpdateManyWithWhereWithoutLoincInputSchema: z.ZodType<Prisma.TestCatalogVersionResultLoincUpdateManyWithWhereWithoutLoincInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionResultLoincScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionResultLoincUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionResultLoincUncheckedUpdateManyWithoutLoincInputSchema) ]),
});

export default TestCatalogVersionResultLoincUpdateManyWithWhereWithoutLoincInputSchema;
