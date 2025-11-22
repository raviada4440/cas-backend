import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { TestCatalogVersionOrderLoincListRelationFilterSchema } from './TestCatalogVersionOrderLoincListRelationFilterSchema';
import { TestCatalogVersionResultLoincListRelationFilterSchema } from './TestCatalogVersionResultLoincListRelationFilterSchema';
import { TestConfigOrderLoincListRelationFilterSchema } from './TestConfigOrderLoincListRelationFilterSchema';
import { TestConfigResultLoincListRelationFilterSchema } from './TestConfigResultLoincListRelationFilterSchema';

export const LoincWhereInputSchema: z.ZodType<Prisma.LoincWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LoincWhereInputSchema), z.lazy(() => LoincWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LoincWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LoincWhereInputSchema), z.lazy(() => LoincWhereInputSchema).array() ]).optional(),
  loincNum: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  component: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  property: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  timeAspct: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  system: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  scaleTyp: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  methodTyp: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  class: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  versionLastChanged: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  chngType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  definitionDescription: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  consumerName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  classtype: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  formula: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  exmplAnswers: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  surveyQuestText: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  surveyQuestSrc: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  unitsrequired: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  relatednames2: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  shortname: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  orderObs: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  hl7FieldSubfieldId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  externalCopyrightNotice: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  exampleUnits: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  longCommonName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  exampleUcumUnits: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  statusReason: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  statusText: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  changeReasonPublic: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  commonTestRank: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  commonOrderRank: z.union([ z.lazy(() => IntNullableFilterSchema), z.number() ]).optional().nullable(),
  hl7AttachmentStructure: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  externalCopyrightLink: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  panelType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  askAtOrderEntry: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  associatedObservations: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  versionFirstReleased: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  validHl7AttachmentRequest: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  displayName: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  testOrderLoincs: z.lazy(() => TestCatalogVersionOrderLoincListRelationFilterSchema).optional(),
  testResultLoincs: z.lazy(() => TestCatalogVersionResultLoincListRelationFilterSchema).optional(),
  configOrderLoincs: z.lazy(() => TestConfigOrderLoincListRelationFilterSchema).optional(),
  configResultLoincs: z.lazy(() => TestConfigResultLoincListRelationFilterSchema).optional(),
});

export default LoincWhereInputSchema;
