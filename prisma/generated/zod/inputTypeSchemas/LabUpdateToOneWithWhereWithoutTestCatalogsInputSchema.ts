import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabWhereInputSchema } from './LabWhereInputSchema';
import { LabUpdateWithoutTestCatalogsInputSchema } from './LabUpdateWithoutTestCatalogsInputSchema';
import { LabUncheckedUpdateWithoutTestCatalogsInputSchema } from './LabUncheckedUpdateWithoutTestCatalogsInputSchema';

export const LabUpdateToOneWithWhereWithoutTestCatalogsInputSchema: z.ZodType<Prisma.LabUpdateToOneWithWhereWithoutTestCatalogsInput> = z.strictObject({
  where: z.lazy(() => LabWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabUpdateWithoutTestCatalogsInputSchema), z.lazy(() => LabUncheckedUpdateWithoutTestCatalogsInputSchema) ]),
});

export default LabUpdateToOneWithWhereWithoutTestCatalogsInputSchema;
