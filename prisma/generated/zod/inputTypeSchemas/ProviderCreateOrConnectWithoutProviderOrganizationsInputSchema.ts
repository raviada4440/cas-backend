import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderWhereUniqueInputSchema } from './ProviderWhereUniqueInputSchema';
import { ProviderCreateWithoutProviderOrganizationsInputSchema } from './ProviderCreateWithoutProviderOrganizationsInputSchema';
import { ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema } from './ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema';

export const ProviderCreateOrConnectWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.ProviderCreateOrConnectWithoutProviderOrganizationsInput> = z.strictObject({
  where: z.lazy(() => ProviderWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderOrganizationsInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema) ]),
});

export default ProviderCreateOrConnectWithoutProviderOrganizationsInputSchema;
