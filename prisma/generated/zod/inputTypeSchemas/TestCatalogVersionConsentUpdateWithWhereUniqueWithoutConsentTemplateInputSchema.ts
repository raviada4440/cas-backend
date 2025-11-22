import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUpdateWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutConsentTemplateInputSchema';

export const TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutConsentTemplateInputSchema) ]),
});

export default TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema;
