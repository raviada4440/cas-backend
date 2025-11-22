import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabWhereInputSchema } from './LabWhereInputSchema';
import { LabUpdateWithoutSponsoredTestsInputSchema } from './LabUpdateWithoutSponsoredTestsInputSchema';
import { LabUncheckedUpdateWithoutSponsoredTestsInputSchema } from './LabUncheckedUpdateWithoutSponsoredTestsInputSchema';

export const LabUpdateToOneWithWhereWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.LabUpdateToOneWithWhereWithoutSponsoredTestsInput> = z.strictObject({
  where: z.lazy(() => LabWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => LabUpdateWithoutSponsoredTestsInputSchema), z.lazy(() => LabUncheckedUpdateWithoutSponsoredTestsInputSchema) ]),
});

export default LabUpdateToOneWithWhereWithoutSponsoredTestsInputSchema;
