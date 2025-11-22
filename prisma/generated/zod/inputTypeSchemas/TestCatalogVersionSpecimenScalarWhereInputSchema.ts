import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumSpecimenTypeNullableFilterSchema } from './EnumSpecimenTypeNullableFilterSchema';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';
import { EnumTestCatalogCollectionMethodNullableFilterSchema } from './EnumTestCatalogCollectionMethodNullableFilterSchema';
import { TestCatalogCollectionMethodSchema } from './TestCatalogCollectionMethodSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const TestCatalogVersionSpecimenScalarWhereInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => TestCatalogVersionSpecimenScalarWhereInputSchema), z.lazy(() => TestCatalogVersionSpecimenScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TestCatalogVersionSpecimenScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TestCatalogVersionSpecimenScalarWhereInputSchema), z.lazy(() => TestCatalogVersionSpecimenScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  displayName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  isPrimary: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  isRequired: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  specimenType: z.union([ z.lazy(() => EnumSpecimenTypeNullableFilterSchema), z.lazy(() => SpecimenTypeSchema) ]).optional().nullable(),
  specimenRequirements: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  volume: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  minimumVolume: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  container: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  specialInstructions: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  alternateContainers: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  preferredVolume: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  collectionMethod: z.union([ z.lazy(() => EnumTestCatalogCollectionMethodNullableFilterSchema), z.lazy(() => TestCatalogCollectionMethodSchema) ]).optional().nullable(),
  collection: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  stabilityRequirements: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  storageTransportation: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  patientPreparation: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  causesForRejection: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  processingNotes: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  displayOrder: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default TestCatalogVersionSpecimenScalarWhereInputSchema;
