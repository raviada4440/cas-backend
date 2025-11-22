import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderCreateWithoutOrderingProviderInputSchema } from './LabOrderCreateWithoutOrderingProviderInputSchema';
import { LabOrderUncheckedCreateWithoutOrderingProviderInputSchema } from './LabOrderUncheckedCreateWithoutOrderingProviderInputSchema';
import { LabOrderCreateOrConnectWithoutOrderingProviderInputSchema } from './LabOrderCreateOrConnectWithoutOrderingProviderInputSchema';
import { LabOrderCreateManyOrderingProviderInputEnvelopeSchema } from './LabOrderCreateManyOrderingProviderInputEnvelopeSchema';
import { LabOrderWhereUniqueInputSchema } from './LabOrderWhereUniqueInputSchema';

export const LabOrderUncheckedCreateNestedManyWithoutOrderingProviderInputSchema: z.ZodType<Prisma.LabOrderUncheckedCreateNestedManyWithoutOrderingProviderInput> = z.strictObject({
  create: z.union([ z.lazy(() => LabOrderCreateWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderCreateWithoutOrderingProviderInputSchema).array(), z.lazy(() => LabOrderUncheckedCreateWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderUncheckedCreateWithoutOrderingProviderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => LabOrderCreateOrConnectWithoutOrderingProviderInputSchema), z.lazy(() => LabOrderCreateOrConnectWithoutOrderingProviderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => LabOrderCreateManyOrderingProviderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => LabOrderWhereUniqueInputSchema), z.lazy(() => LabOrderWhereUniqueInputSchema).array() ]).optional(),
});

export default LabOrderUncheckedCreateNestedManyWithoutOrderingProviderInputSchema;
