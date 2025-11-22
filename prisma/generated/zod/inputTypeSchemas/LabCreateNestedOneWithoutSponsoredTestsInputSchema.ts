import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabCreateWithoutSponsoredTestsInputSchema } from './LabCreateWithoutSponsoredTestsInputSchema';
import { LabUncheckedCreateWithoutSponsoredTestsInputSchema } from './LabUncheckedCreateWithoutSponsoredTestsInputSchema';
import { LabCreateOrConnectWithoutSponsoredTestsInputSchema } from './LabCreateOrConnectWithoutSponsoredTestsInputSchema';
import { LabWhereUniqueInputSchema } from './LabWhereUniqueInputSchema';

export const LabCreateNestedOneWithoutSponsoredTestsInputSchema: z.ZodType<Prisma.LabCreateNestedOneWithoutSponsoredTestsInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabCreateWithoutSponsoredTestsInputSchema), z.lazy(() => LabUncheckedCreateWithoutSponsoredTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabCreateOrConnectWithoutSponsoredTestsInputSchema).optional(),
  connect: z.lazy(() => LabWhereUniqueInputSchema).optional(),
});

export default LabCreateNestedOneWithoutSponsoredTestsInputSchema;
