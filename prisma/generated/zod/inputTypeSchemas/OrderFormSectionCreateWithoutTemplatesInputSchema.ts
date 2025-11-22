import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OrganizationCreateNestedOneWithoutOrderFormSectionsInputSchema } from './OrganizationCreateNestedOneWithoutOrderFormSectionsInputSchema';

export const OrderFormSectionCreateWithoutTemplatesInputSchema: z.ZodType<Prisma.OrderFormSectionCreateWithoutTemplatesInput> = z.strictObject({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  sortOrder: z.number().optional(),
  isActive: z.boolean().optional(),
  createdBy: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  organization: z.lazy(() => OrganizationCreateNestedOneWithoutOrderFormSectionsInputSchema).optional(),
});

export default OrderFormSectionCreateWithoutTemplatesInputSchema;
