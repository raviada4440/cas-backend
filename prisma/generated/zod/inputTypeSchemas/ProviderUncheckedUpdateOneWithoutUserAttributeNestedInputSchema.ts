import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutUserAttributeInputSchema } from './ProviderCreateWithoutUserAttributeInputSchema';
import { ProviderUncheckedCreateWithoutUserAttributeInputSchema } from './ProviderUncheckedCreateWithoutUserAttributeInputSchema';
import { ProviderCreateOrConnectWithoutUserAttributeInputSchema } from './ProviderCreateOrConnectWithoutUserAttributeInputSchema';
import { ProviderUpsertWithoutUserAttributeInputSchema } from './ProviderUpsertWithoutUserAttributeInputSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderUpdateToOneWithWhereWithoutUserAttributeInputSchema } from './ProviderUpdateToOneWithWhereWithoutUserAttributeInputSchema';
import { ProviderUpdateWithoutUserAttributeInputSchema } from './ProviderUpdateWithoutUserAttributeInputSchema';
import { ProviderUncheckedUpdateWithoutUserAttributeInputSchema } from './ProviderUncheckedUpdateWithoutUserAttributeInputSchema';

export const ProviderUncheckedUpdateOneWithoutUserAttributeNestedInputSchema: z.ZodType<Prisma.ProviderUncheckedUpdateOneWithoutUserAttributeNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutUserAttributeInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutUserAttributeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutUserAttributeInputSchema).optional(),
  upsert: z.lazy(() => ProviderUpsertWithoutUserAttributeInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProviderWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProviderWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProviderUpdateToOneWithWhereWithoutUserAttributeInputSchema), z.lazy(() => ProviderUpdateWithoutUserAttributeInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutUserAttributeInputSchema) ]).optional(),
});

export default ProviderUncheckedUpdateOneWithoutUserAttributeNestedInputSchema;
