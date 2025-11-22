import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema';

export const TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema) ]),
});

export default TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInputSchema;
