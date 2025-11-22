import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabWhereUniqueInputSchema } from './LabWhereUniqueInputSchema';
import { LabCreateWithoutTestCatalogsInputSchema } from './LabCreateWithoutTestCatalogsInputSchema';
import { LabUncheckedCreateWithoutTestCatalogsInputSchema } from './LabUncheckedCreateWithoutTestCatalogsInputSchema';

export const LabCreateOrConnectWithoutTestCatalogsInputSchema: z.ZodType<Prisma.LabCreateOrConnectWithoutTestCatalogsInput> = z.strictObject({
  where: z.lazy(() => LabWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabCreateWithoutTestCatalogsInputSchema), z.lazy(() => LabUncheckedCreateWithoutTestCatalogsInputSchema) ]),
});

export default LabCreateOrConnectWithoutTestCatalogsInputSchema;
