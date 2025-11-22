import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentCreateManyConsentTemplateInputEnvelopeSchema } from './TestCatalogVersionConsentCreateManyConsentTemplateInputEnvelopeSchema';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';

export const TestCatalogVersionConsentCreateNestedManyWithoutConsentTemplateInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentCreateNestedManyWithoutConsentTemplateInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema).array(), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionConsentCreateManyConsentTemplateInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
});

export default TestCatalogVersionConsentCreateNestedManyWithoutConsentTemplateInputSchema;
