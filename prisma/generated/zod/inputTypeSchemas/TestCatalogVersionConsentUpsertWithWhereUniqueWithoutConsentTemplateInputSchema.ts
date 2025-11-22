import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUpdateWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentUncheckedUpdateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUncheckedUpdateWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema';

export const TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConsentTemplateInput> = z.strictObject({
  where: z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedUpdateWithoutConsentTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema) ]),
});

export default TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema;
