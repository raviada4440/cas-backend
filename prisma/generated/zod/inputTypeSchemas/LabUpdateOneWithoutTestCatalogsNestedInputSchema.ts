import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabCreateWithoutTestCatalogsInputSchema } from './LabCreateWithoutTestCatalogsInputSchema';
import { LabUncheckedCreateWithoutTestCatalogsInputSchema } from './LabUncheckedCreateWithoutTestCatalogsInputSchema';
import { LabCreateOrConnectWithoutTestCatalogsInputSchema } from './LabCreateOrConnectWithoutTestCatalogsInputSchema';
import { LabUpsertWithoutTestCatalogsInputSchema } from './LabUpsertWithoutTestCatalogsInputSchema';
import { LabWhereInputSchema } from './LabWhereInputSchema';
import { LabWhereUniqueInputSchema } from './LabWhereUniqueInputSchema';
import { LabUpdateToOneWithWhereWithoutTestCatalogsInputSchema } from './LabUpdateToOneWithWhereWithoutTestCatalogsInputSchema';
import { LabUpdateWithoutTestCatalogsInputSchema } from './LabUpdateWithoutTestCatalogsInputSchema';
import { LabUncheckedUpdateWithoutTestCatalogsInputSchema } from './LabUncheckedUpdateWithoutTestCatalogsInputSchema';

export const LabUpdateOneWithoutTestCatalogsNestedInputSchema: z.ZodType<Prisma.LabUpdateOneWithoutTestCatalogsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabCreateWithoutTestCatalogsInputSchema), z.lazy(() => LabUncheckedCreateWithoutTestCatalogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabCreateOrConnectWithoutTestCatalogsInputSchema).optional(),
  upsert: z.lazy(() => LabUpsertWithoutTestCatalogsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabUpdateToOneWithWhereWithoutTestCatalogsInputSchema), z.lazy(() => LabUpdateWithoutTestCatalogsInputSchema), z.lazy(() => LabUncheckedUpdateWithoutTestCatalogsInputSchema) ]).optional(),
});

export default LabUpdateOneWithoutTestCatalogsNestedInputSchema;
