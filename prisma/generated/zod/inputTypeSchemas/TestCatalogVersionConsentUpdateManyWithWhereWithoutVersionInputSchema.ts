import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentScalarWhereInputSchema } from './TestCatalogVersionConsentScalarWhereInputSchema';
import { TestCatalogVersionConsentUpdateManyMutationInputSchema } from './TestCatalogVersionConsentUpdateManyMutationInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateManyWithoutVersionInputSchema } from './TestCatalogVersionConsentUncheckedUpdateManyWithoutVersionInputSchema';

export const TestCatalogVersionConsentUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default TestCatalogVersionConsentUpdateManyWithWhereWithoutVersionInputSchema;
