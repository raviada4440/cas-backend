import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormCreateManyTemplateInputEnvelopeSchema } from './TestCatalogVersionOrderFormCreateManyTemplateInputEnvelopeSchema';
import { TestCatalogVersionOrderFormWhereUniqueInputSchema } from './TestCatalogVersionOrderFormWhereUniqueInputSchema';
import { TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormUpdateManyWithWhereWithoutTemplateInputSchema } from './TestCatalogVersionOrderFormUpdateManyWithWhereWithoutTemplateInputSchema';
import { TestCatalogVersionOrderFormScalarWhereInputSchema } from './TestCatalogVersionOrderFormScalarWhereInputSchema';

export const TestCatalogVersionOrderFormUpdateManyWithoutTemplateNestedInputSchema: z.ZodType<Prisma.TestCatalogVersionOrderFormUpdateManyWithoutTemplateNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateWithoutTemplateInputSchema).array(), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormUpsertWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TestCatalogVersionOrderFormCreateManyTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema), z.lazy(() => TestCatalogVersionOrderFormWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormUpdateWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TestCatalogVersionOrderFormUpdateManyWithWhereWithoutTemplateInputSchema), z.lazy(() => TestCatalogVersionOrderFormUpdateManyWithWhereWithoutTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema), z.lazy(() => TestCatalogVersionOrderFormScalarWhereInputSchema).array() ]).optional(),
});

export default TestCatalogVersionOrderFormUpdateManyWithoutTemplateNestedInputSchema;
