import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabCreateWithoutSponsoredTestsInputSchema } from './LabCreateWithoutSponsoredTestsInputSchema';
import { LabUncheckedCreateWithoutSponsoredTestsInputSchema } from './LabUncheckedCreateWithoutSponsoredTestsInputSchema';
import { LabCreateOrConnectWithoutSponsoredTestsInputSchema } from './LabCreateOrConnectWithoutSponsoredTestsInputSchema';
import { LabUpsertWithoutSponsoredTestsInputSchema } from './LabUpsertWithoutSponsoredTestsInputSchema';
import { LabWhereInputSchema } from './LabWhereInputSchema';
import { LabWhereUniqueInputSchema } from './LabWhereUniqueInputSchema';
import { LabUpdateToOneWithWhereWithoutSponsoredTestsInputSchema } from './LabUpdateToOneWithWhereWithoutSponsoredTestsInputSchema';
import { LabUpdateWithoutSponsoredTestsInputSchema } from './LabUpdateWithoutSponsoredTestsInputSchema';
import { LabUncheckedUpdateWithoutSponsoredTestsInputSchema } from './LabUncheckedUpdateWithoutSponsoredTestsInputSchema';

export const LabUpdateOneWithoutSponsoredTestsNestedInputSchema: z.ZodType<Prisma.LabUpdateOneWithoutSponsoredTestsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabCreateWithoutSponsoredTestsInputSchema), z.lazy(() => LabUncheckedCreateWithoutSponsoredTestsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => LabCreateOrConnectWithoutSponsoredTestsInputSchema).optional(),
  upsert: z.lazy(() => LabUpsertWithoutSponsoredTestsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => LabWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => LabWhereInputSchema) ]).optional(),
  connect: z.lazy(() => LabWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => LabUpdateToOneWithWhereWithoutSponsoredTestsInputSchema), z.lazy(() => LabUpdateWithoutSponsoredTestsInputSchema), z.lazy(() => LabUncheckedUpdateWithoutSponsoredTestsInputSchema) ]).optional(),
});

export default LabUpdateOneWithoutSponsoredTestsNestedInputSchema;
