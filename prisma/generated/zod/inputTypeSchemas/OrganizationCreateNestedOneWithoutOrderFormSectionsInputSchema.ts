import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateWithoutOrderFormSectionsInputSchema } from './OrganizationCreateWithoutOrderFormSectionsInputSchema';
import { OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema } from './OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema';
import { OrganizationCreateOrConnectWithoutOrderFormSectionsInputSchema } from './OrganizationCreateOrConnectWithoutOrderFormSectionsInputSchema';
import { OrganizationWhereUniqueInputSchema } from './OrganizationWhereUniqueInputSchema';

export const OrganizationCreateNestedOneWithoutOrderFormSectionsInputSchema: z.ZodType<Prisma.OrganizationCreateNestedOneWithoutOrderFormSectionsInput> = z.strictObject({
  create: z.union([ z.lazy(() => OrganizationCreateWithoutOrderFormSectionsInputSchema), z.lazy(() => OrganizationUncheckedCreateWithoutOrderFormSectionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OrganizationCreateOrConnectWithoutOrderFormSectionsInputSchema).optional(),
  connect: z.lazy(() => OrganizationWhereUniqueInputSchema).optional(),
});

export default OrganizationCreateNestedOneWithoutOrderFormSectionsInputSchema;
