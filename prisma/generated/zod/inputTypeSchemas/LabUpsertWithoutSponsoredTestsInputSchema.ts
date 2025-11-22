import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabUpdateWithoutSponsoredTestsInputSchema } from './LabUpdateWithoutSponsoredTestsInputSchema';
import { LabUncheckedUpdateWithoutSponsoredTestsInputSchema } from './LabUncheckedUpdateWithoutSponsoredTestsInputSchema';
import { LabCreateWithoutSponsoredTestsInputSchema } from './LabCreateWithoutSponsoredTestsInputSchema';
import { LabUncheckedCreateWithoutSponsoredTestsInputSchema } from './LabUncheckedCreateWithoutSponsoredTestsInputSchema';
import { LabWhereInputSchema } from './LabWhereInputSchema';

export const LabUpsertWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.LabUpsertWithoutSponsoredTestsInput> = z.strictObject({
  update: z.union([ z.lazy(() => LabUpdateWithoutSponsoredTestsInputSchema), z.lazy(() => LabUncheckedUpdateWithoutSponsoredTestsInputSchema) ]),
  create: z.union([ z.lazy(() => LabCreateWithoutSponsoredTestsInputSchema), z.lazy(() => LabUncheckedCreateWithoutSponsoredTestsInputSchema) ]),
  where: z.lazy(() => LabWhereInputSchema).optional(),
});

export default LabUpsertWithoutSponsoredTestsInputSchema;
