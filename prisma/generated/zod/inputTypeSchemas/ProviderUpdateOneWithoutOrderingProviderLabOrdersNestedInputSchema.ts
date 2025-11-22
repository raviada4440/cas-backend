import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderCreateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderCreateOrConnectWithoutOrderingProviderLabOrdersInputSchema } from './ProviderCreateOrConnectWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderUpsertWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUpsertWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderUpdateToOneWithWhereWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUpdateToOneWithWhereWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderUpdateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUpdateWithoutOrderingProviderLabOrdersInputSchema';
import { ProviderUncheckedUpdateWithoutOrderingProviderLabOrdersInputSchema } from './ProviderUncheckedUpdateWithoutOrderingProviderLabOrdersInputSchema';

export const ProviderUpdateOneWithoutOrderingProviderLabOrdersNestedInputSchema: z.ZodType<Prisma.ProviderUpdateOneWithoutOrderingProviderLabOrdersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutOrderingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutOrderingProviderLabOrdersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutOrderingProviderLabOrdersInputSchema).optional(),
  upsert: z.lazy(() => ProviderUpsertWithoutOrderingProviderLabOrdersInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProviderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProviderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProviderUpdateToOneWithWhereWithoutOrderingProviderLabOrdersInputSchema), z.lazy(() => ProviderUpdateWithoutOrderingProviderLabOrdersInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutOrderingProviderLabOrdersInputSchema) ]).optional(),
});

export default ProviderUpdateOneWithoutOrderingProviderLabOrdersNestedInputSchema;
