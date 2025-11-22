import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabCreateWithoutTestCatalogsInputSchema } from './LabCreateWithoutTestCatalogsInputSchema';
import { LabUncheckedCreateWithoutTestCatalogsInputSchema } from './LabUncheckedCreateWithoutTestCatalogsInputSchema';
import { LabCreateOrConnectWithoutTestCatalogsInputSchema } from './LabCreateOrConnectWithoutTestCatalogsInputSchema';
import { LabWhereUniqueInputSchema } from './LabWhereUniqueInputSchema';

export const LabCreateNestedOneWithoutTestCatalogsInputSchema: z.ZodType<Prisma.LabCreateNestedOneWithoutTestCatalogsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabCreateWithoutTestCatalogsInputSchema), z.lazy(() => LabUncheckedCreateWithoutTestCatalogsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabCreateOrConnectWithoutTestCatalogsInputSchema).optional(),
  connect: z.lazy(() => LabWhereUniqueInputSchema).optional(),
});

export default LabCreateNestedOneWithoutTestCatalogsInputSchema;
