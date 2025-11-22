import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentCreateManyConsentTemplateInputEnvelopeSchema } from './TestCatalogVersionConsentCreateManyConsentTemplateInputEnvelopeSchema';
import { TestCatalogVersionConsentWhereUniqueInputSchema } from './TestCatalogVersionConsentWhereUniqueInputSchema';
import { TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema } from './TestCatalogVersionConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema';
import { TestCatalogVersionConsentScalarWhereInputSchema } from './TestCatalogVersionConsentScalarWhereInputSchema';

export const TestCatalogVersionConsentUncheckedUpdateManyWithoutConsentTemplateNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionConsentUncheckedUpdateManyWithoutConsentTemplateNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentCreateWithoutConsentTemplateInputSchema).array(), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentUncheckedCreateWithoutConsentTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentCreateOrConnectWithoutConsentTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentUpsertWithWhereUniqueWithoutConsentTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionConsentCreateManyConsentTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionConsentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentUpdateWithWhereUniqueWithoutConsentTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema), z.lazy(() => TestCatalogVersionConsentUpdateManyWithWhereWithoutConsentTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema), z.lazy(() => TestCatalogVersionConsentScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionConsentUncheckedUpdateManyWithoutConsentTemplateNestedInputSchema;
