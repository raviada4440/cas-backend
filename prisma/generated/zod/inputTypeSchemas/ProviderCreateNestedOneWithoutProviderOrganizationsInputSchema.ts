import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderCreateWithoutProviderOrganizationsInputSchema } from './ProviderCreateWithoutProviderOrganizationsInputSchema';
import { ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema } from './ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema';
import { ProviderCreateOrConnectWithoutProviderOrganizationsInputSchema } from './ProviderCreateOrConnectWithoutProviderOrganizationsInputSchema';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';

export const ProviderCreateNestedOneWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.ProviderCreateNestedOneWithoutProviderOrganizationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderOrganizationsInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProviderCreateOrConnectWithoutProviderOrganizationsInputSchema).optional(),
  connect: z.lazy(() => ProviderWhereUniqueInputSchema).optional(),
});

export default ProviderCreateNestedOneWithoutProviderOrganizationsInputSchema;
