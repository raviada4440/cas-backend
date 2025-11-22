import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutProviderOrganizationsInputSchema } from './ProviderCreateWithoutProviderOrganizationsInputSchema';
import { ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema } from './ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema';
import { ProviderCreateOrConnectWithoutProviderOrganizationsInputSchema } from './ProviderCreateOrConnectWithoutProviderOrganizationsInputSchema';
import { ProviderUpsertWithoutProviderOrganizationsInputSchema } from './ProviderUpsertWithoutProviderOrganizationsInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderUpdateToOneWithWhereWithoutProviderOrganizationsInputSchema } from './ProviderUpdateToOneWithWhereWithoutProviderOrganizationsInputSchema';
import { ProviderUpdateWithoutProviderOrganizationsInputSchema } from './ProviderUpdateWithoutProviderOrganizationsInputSchema';
import { ProviderUncheckedUpdateWithoutProviderOrganizationsInputSchema } from './ProviderUncheckedUpdateWithoutProviderOrganizationsInputSchema';

export const ProviderUpdateOneRequiredWithoutProviderOrganizationsNestedInputSchema: z.ZodType<Prisma.ProviderUpdateOneRequiredWithoutProviderOrganizationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderOrganizationsInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutProviderOrganizationsInputSchema).optional(),
  upsert: z.lazy(() => ProviderUpsertWithoutProviderOrganizationsInputSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProviderUpdateToOneWithWhereWithoutProviderOrganizationsInputSchema), z.lazy(() => ProviderUpdateWithoutProviderOrganizationsInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutProviderOrganizationsInputSchema) ]).optional(),
});

export default ProviderUpdateOneRequiredWithoutProviderOrganizationsNestedInputSchema;
