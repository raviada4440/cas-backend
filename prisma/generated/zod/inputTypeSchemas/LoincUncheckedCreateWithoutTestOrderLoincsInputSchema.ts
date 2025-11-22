import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TestCatalogVersionResultLoincUncheckedCreateNestedManyWithoutLoincInputSchema } from './TestCatalogVersionResultLoincUncheckedCreateNestedManyWithoutLoincInputSchema';
import { TestConfigOrderLoincUncheckedCreateNestedManyWithoutLoincInputSchema } from './TestConfigOrderLoincUncheckedCreateNestedManyWithoutLoincInputSchema';
import { TestConfigResultLoincUncheckedCreateNestedManyWithoutLoincInputSchema } from './TestConfigResultLoincUncheckedCreateNestedManyWithoutLoincInputSchema';

export const LoincUncheckedCreateWithoutTestOrderLoincsInputSchema: z.ZodType<Prisma.LoincUncheckedCreateWithoutTestOrderLoincsInput> = z.strictObject({
  loincNum: z.string(),
  component: z.string().optional().nullable(),
  property: z.string().optional().nullable(),
  timeAspct: z.string().optional().nullable(),
  system: z.string().optional().nullable(),
  scaleTyp: z.string().optional().nullable(),
  methodTyp: z.string().optional().nullable(),
  class: z.string().optional().nullable(),
  versionLastChanged: z.string().optional().nullable(),
  chngType: z.string().optional().nullable(),
  definitionDescription: z.string().optional().nullable(),
  status: z.string().optional().nullable(),
  consumerName: z.string().optional().nullable(),
  classtype: z.number().optional().nullable(),
  formula: z.string().optional().nullable(),
  exmplAnswers: z.string().optional().nullable(),
  surveyQuestText: z.string().optional().nullable(),
  surveyQuestSrc: z.string().optional().nullable(),
  unitsrequired: z.string().optional().nullable(),
  relatednames2: z.string().optional().nullable(),
  shortname: z.string().optional().nullable(),
  orderObs: z.string().optional().nullable(),
  hl7FieldSubfieldId: z.string().optional().nullable(),
  externalCopyrightNotice: z.string().optional().nullable(),
  exampleUnits: z.string().optional().nullable(),
  longCommonName: z.string().optional().nullable(),
  exampleUcumUnits: z.string().optional().nullable(),
  statusReason: z.string().optional().nullable(),
  statusText: z.string().optional().nullable(),
  changeReasonPublic: z.string().optional().nullable(),
  commonTestRank: z.number().optional().nullable(),
  commonOrderRank: z.number().optional().nullable(),
  hl7AttachmentStructure: z.string().optional().nullable(),
  externalCopyrightLink: z.string().optional().nullable(),
  panelType: z.string().optional().nullable(),
  askAtOrderEntry: z.string().optional().nullable(),
  associatedObservations: z.string().optional().nullable(),
  versionFirstReleased: z.string().optional().nullable(),
  validHl7AttachmentRequest: z.string().optional().nullable(),
  displayName: z.string().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  testResultLoincs: z.lazy(() => TestCatalogVersionResultLoincUncheckedCreateNestedManyWithoutLoincInputSchema).optional(),
  configOrderLoincs: z.lazy(() => TestConfigOrderLoincUncheckedCreateNestedManyWithoutLoincInputSchema).optional(),
  configResultLoincs: z.lazy(() => TestConfigResultLoincUncheckedCreateNestedManyWithoutLoincInputSchema).optional(),
});

export default LoincUncheckedCreateWithoutTestOrderLoincsInputSchema;
