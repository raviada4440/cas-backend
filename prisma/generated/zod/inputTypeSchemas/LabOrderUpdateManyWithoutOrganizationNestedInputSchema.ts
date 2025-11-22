import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutOrganizationInputSchema } from './LabOrderCreateWithoutOrganizationInputSchema';
import { LabOrderUncheckedCreateWithoutOrganizationInputSchema } from './LabOrderUncheckedCreateWithoutOrganizationInputSchema';
import { LabOrderCreateOrConnectWithoutOrganizationInputSchema } from './LabOrderCreateOrConnectWithoutOrganizationInputSchema';
import { LabOrderUpsertWithWhereUniqueWithoutOrganizationInputSchema } from './LabOrderUpsertWithWhereUniqueWithoutOrganizationInputSchema';
import { LabOrderCreateManyOrganizationInputEnvelopeSchema } from './LabOrderCreateManyOrganizationInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';
import { LabOrderUpdateWithWhereUniqueWithoutOrganizationInputSchema } from './LabOrderUpdateWithWhereUniqueWithoutOrganizationInputSchema';
import { LabOrderUpdateManyWithWhereWithoutOrganizationInputSchema } from './LabOrderUpdateManyWithWhereWithoutOrganizationInputSchema';
import { LabOrderScalarWhereInputSchema } from './LabOrderScalarWhereInputSchema';

export const LabOrderUpdateManyWithoutOrganizationNestedInputSchema: z.ZodType<Prisma.LabOrderUpdateManyWithoutOrganizationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrganizationInputSchema), z.lazy(() => LabOrderCreateWithoutOrganizationInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutOrganizationInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrganizationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutOrganizationInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutOrganizationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => LabOrderUpsertWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyOrganizationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutOrganizationInputSchema), z.lazy(() => LabOrderUpdateWithWhereUniqueWithoutOrganizationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => LabOrderUpdateManyWithWhereWithoutOrganizationInputSchema), z.lazy(() => LabOrderUpdateManyWithWhereWithoutOrganizationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => LabOrderScalarWhereInputSchema), z.lazy(() => LabOrderScalarWhereInputSchema).array() ]).optional(),
});

export default LabOrderUpdateManyWithoutOrganizationNestedInputSchema;
