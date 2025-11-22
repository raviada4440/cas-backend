import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationUpdateWithoutOrderFormSectionsInputSchema } from './OrganizationUpdateWithoutOrderFormSectionsInputSchema';
import { OrganizationUncheckedUpdateWithoutOrderFormSectionsInputSchema } from './OrganizationUncheckedUpdateWithoutOrderFormSectionsInputSchema';
import { OrganizationCreateWithoutOrderFormSectionsInputSchema } from './OrganizationCreateWithoutOrderFormSectionsInputSchema';
import { OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema } from './OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema';
import { OrganizationWhereInputSchema } from './OrganizationWhereInputSchema';

export const OrganizationUpsertWithoutOrderFormSectionsInputSchema: z.ZodType<Prisma.OrganizationUpsertWithoutOrderFormSectionsInput> = z.strictObject({
  update: z.union([ z.lazy(() => OrganizationUpdateWithoutOrderFormSectionsInputSchema), z.lazy(() => OrganizationUncheckedUpdateWithoutOrderFormSectionsInputSchema) ]),
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrderFormSectionsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema) ]),
  where: z.lazy(() => OrganizationWhereInputSchema).optional(),
});

export default OrganizationUpsertWithoutOrderFormSectionsInputSchema;
