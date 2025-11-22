import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderUpdateWithoutProviderOrganizationsInputSchema } from './ProviderUpdateWithoutProviderOrganizationsInputSchema';
import { ProviderUncheckedUpdateWithoutProviderOrganizationsInputSchema } from './ProviderUncheckedUpdateWithoutProviderOrganizationsInputSchema';
import { ProviderCreateWithoutProviderOrganizationsInputSchema } from './ProviderCreateWithoutProviderOrganizationsInputSchema';
import { ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema } from './ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema';
import { ProviderWhereInputSchema } from './ProviderWhereInputSchema';

export const ProviderUpsertWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.ProviderUpsertWithoutProviderOrganizationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => ProviderUpdateWithoutProviderOrganizationsInputSchema), z.lazy(() => ProviderUncheckedUpdateWithoutProviderOrganizationsInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderCreateWithoutProviderOrganizationsInputSchema), z.lazy(() => ProviderUncheckedCreateWithoutProviderOrganizationsInputSchema) ]),
  where: z.lazy(() => ProviderWhereInputSchema).optional(),
});

export default ProviderUpsertWithoutProviderOrganizationsInputSchema;
