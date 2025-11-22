import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentScalarWhereInputSchema } from './TestCatalogVersionConsentScalarWhereInputSchema';
import { TestCatalogVersionConsentUpdateManyMutationInputSchema } from './TestCatalogVersionConsentUpdateManyMutationInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateManyWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUncheckedUpdateManyWithoutConsentTemplateInputSchema';

export const TestCatalogVersionConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateManyWithWhereWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateManyMutationInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateManyWithoutConsentTemplateInputSchema) ]),
});

export default TestCatalogVersionConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema;
