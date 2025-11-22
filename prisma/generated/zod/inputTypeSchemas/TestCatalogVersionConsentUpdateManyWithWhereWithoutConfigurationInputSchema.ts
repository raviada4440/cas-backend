import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentScalarWhereInputSchema } from './TestCatalogVersionConsentScalarWhereInputSchema';
import { TestCatalogVersionConsentUpdateManyMutationInputSchema } from './TestCatalogVersionConsentUpdateManyMutationInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateManyWithoutConfigurationInputSchema } from './TestCatalogVersionConsentUncheckedUpdateManyWithoutConfigurationInputSchema';

export const TestCatalogVersionConsentUpdateManyWithWhereWithoutConfigurationInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateManyWithWhereWithoutConfigurationInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateManyWithoutConfigurationInputSchema) ]),
});

export default TestCatalogVersionConsentUpdateManyWithWhereWithoutConfigurationInputSchema;
