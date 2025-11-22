import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabWhereUniqueInputSchema } from './LabWhereUniqueInputSchema';
import { LabCreateWithoutSponsoredTestsInputSchema } from './LabCreateWithoutSponsoredTestsInputSchema';
import { LabUncheckedCreateWithoutSponsoredTestsInputSchema } from './LabUncheckedCreateWithoutSponsoredTestsInputSchema';

export const LabCreateOrConnectWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.LabCreateOrConnectWithoutSponsoredTestsInput> = z.strictObject({
  where: z.lazy(() => LabWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => LabCreateWithoutSponsoredTestsInputSchema), z.lazy(() => LabUncheckedCreateWithoutSponsoredTestsInputSchema) ]),
});

export default LabCreateOrConnectWithoutSponsoredTestsInputSchema;
