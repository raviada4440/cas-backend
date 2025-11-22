import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabUpdateWithoutTestCatalogsInputSchema } from './LabUpdateWithoutTestCatalogsInputSchema';
import { LabUncheckedUpdateWithoutTestCatalogsInputSchema } from './LabUncheckedUpdateWithoutTestCatalogsInputSchema';
import { LabCreateWithoutTestCatalogsInputSchema } from './LabCreateWithoutTestCatalogsInputSchema';
import { LabUncheckedCreateWithoutTestCatalogsInputSchema } from './LabUncheckedCreateWithoutTestCatalogsInputSchema';
import { LabWhereInputSchema } from './LabWhereInputSchema';

export const LabUpsertWithoutTestCatalogsInputSchema: z.ZodType<Prisma.LabUpsertWithoutTestCatalogsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabUpdateWithoutTestCatalogsInputSchema), z.lazy(() => LabUncheckedUpdateWithoutTestCatalogsInputSchema) ]),
  create: z.union([ z.lazy(() => LabCreateWithoutTestCatalogsInputSchema), z.lazy(() => LabUncheckedCreateWithoutTestCatalogsInputSchema) ]),
  where: z.lazy(() => LabWhereInputSchema).optional(),
});

export default LabUpsertWithoutTestCatalogsInputSchema;
