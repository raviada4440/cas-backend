import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { OrganizationUpdateOneWithoutOrganizationFavoriteTestsNestedInputSchema } from './OrganizationUpdateOneWithoutOrganizationFavoriteTestsNestedInputSchema';
import { TestCatalogUpdateOneWithoutOrganizationFavoriteTestsNestedInputSchema } from './TestCatalogUpdateOneWithoutOrganizationFavoriteTestsNestedInputSchema';

export const OrganizationFavoriteTestUpdateInputSchema: z.ZodType<Prisma.OrganizationFavoriteTestUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneWithoutOrganizationFavoriteTestsNestedInputSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogUpdateOneWithoutOrganizationFavoriteTestsNestedInputSchema).optional(),
});

export default OrganizationFavoriteTestUpdateInputSchema;
