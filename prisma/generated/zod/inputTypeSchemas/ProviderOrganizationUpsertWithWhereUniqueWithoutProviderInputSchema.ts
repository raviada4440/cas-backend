import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProviderOrganizationWhereUniqueInputSchema } from './ProviderOrganizationWhereUniqueInputSchema';
import { ProviderOrganizationUpdateWithoutProviderInputSchema } from './ProviderOrganizationUpdateWithoutProviderInputSchema';
import { ProviderOrganizationUncheckedUpdateWithoutProviderInputSchema } from './ProviderOrganizationUncheckedUpdateWithoutProviderInputSchema';
import { ProviderOrganizationCreateWithoutProviderInputSchema } from './ProviderOrganizationCreateWithoutProviderInputSchema';
import { ProviderOrganizationUncheckedCreateWithoutProviderInputSchema } from './ProviderOrganizationUncheckedCreateWithoutProviderInputSchema';

export const ProviderOrganizationUpsertWithWhereUniqueWithoutProviderInputSchema: z.ZodType<Prisma.ProviderOrganizationUpsertWithWhereUniqueWithoutProviderInput> = z.strictObject({
  where: z.lazy(() => ProviderOrganizationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProviderOrganizationUpdateWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationUncheckedUpdateWithoutProviderInputSchema) ]),
  create: z.union([ z.lazy(() => ProviderOrganizationCreateWithoutProviderInputSchema), z.lazy(() => ProviderOrganizationUncheckedCreateWithoutProviderInputSchema) ]),
});

export default ProviderOrganizationUpsertWithWhereUniqueWithoutProviderInputSchema;
