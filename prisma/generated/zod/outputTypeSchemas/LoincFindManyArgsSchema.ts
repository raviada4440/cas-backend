import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LoincIncludeSchema } from '../inputTypeSchemas/LoincIncludeSchema'
import { LoincWhereInputSchema } from '../inputTypeSchemas/LoincWhereInputSchema'
import { LoincOrderByWithRelationInputSchema } from '../inputTypeSchemas/LoincOrderByWithRelationInputSchema'
import { LoincWhereUniqueInputSchema } from '../inputTypeSchemas/LoincWhereUniqueInputSchema'
import { LoincScalarFieldEnumSchema } from '../inputTypeSchemas/LoincScalarFieldEnumSchema'
import { TestCatalogVersionOrderLoincFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionOrderLoincFindManyArgsSchema"
import { TestCatalogVersionResultLoincFindManyArgsSchema } from "../outputTypeSchemas/TestCatalogVersionResultLoincFindManyArgsSchema"
import { TestConfigOrderLoincFindManyArgsSchema } from "../outputTypeSchemas/TestConfigOrderLoincFindManyArgsSchema"
import { TestConfigResultLoincFindManyArgsSchema } from "../outputTypeSchemas/TestConfigResultLoincFindManyArgsSchema"
import { LoincCountOutputTypeArgsSchema } from "../outputTypeSchemas/LoincCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const LoincSelectSchema: z.ZodType<Prisma.LoincSelect> = z.object({
  loincNum: z.boolean().optional(),
  component: z.boolean().optional(),
  property: z.boolean().optional(),
  timeAspct: z.boolean().optional(),
  system: z.boolean().optional(),
  scaleTyp: z.boolean().optional(),
  methodTyp: z.boolean().optional(),
  class: z.boolean().optional(),
  versionLastChanged: z.boolean().optional(),
  chngType: z.boolean().optional(),
  definitionDescription: z.boolean().optional(),
  status: z.boolean().optional(),
  consumerName: z.boolean().optional(),
  classtype: z.boolean().optional(),
  formula: z.boolean().optional(),
  exmplAnswers: z.boolean().optional(),
  surveyQuestText: z.boolean().optional(),
  surveyQuestSrc: z.boolean().optional(),
  unitsrequired: z.boolean().optional(),
  relatednames2: z.boolean().optional(),
  shortname: z.boolean().optional(),
  orderObs: z.boolean().optional(),
  hl7FieldSubfieldId: z.boolean().optional(),
  externalCopyrightNotice: z.boolean().optional(),
  exampleUnits: z.boolean().optional(),
  longCommonName: z.boolean().optional(),
  exampleUcumUnits: z.boolean().optional(),
  statusReason: z.boolean().optional(),
  statusText: z.boolean().optional(),
  changeReasonPublic: z.boolean().optional(),
  commonTestRank: z.boolean().optional(),
  commonOrderRank: z.boolean().optional(),
  hl7AttachmentStructure: z.boolean().optional(),
  externalCopyrightLink: z.boolean().optional(),
  panelType: z.boolean().optional(),
  askAtOrderEntry: z.boolean().optional(),
  associatedObservations: z.boolean().optional(),
  versionFirstReleased: z.boolean().optional(),
  validHl7AttachmentRequest: z.boolean().optional(),
  displayName: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  testOrderLoincs: z.union([z.boolean(),z.lazy(() => TestCatalogVersionOrderLoincFindManyArgsSchema)]).optional(),
  testResultLoincs: z.union([z.boolean(),z.lazy(() => TestCatalogVersionResultLoincFindManyArgsSchema)]).optional(),
  configOrderLoincs: z.union([z.boolean(),z.lazy(() => TestConfigOrderLoincFindManyArgsSchema)]).optional(),
  configResultLoincs: z.union([z.boolean(),z.lazy(() => TestConfigResultLoincFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => LoincCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const LoincFindManyArgsSchema: z.ZodType<Prisma.LoincFindManyArgs> = z.object({
  select: LoincSelectSchema.optional(),
  include: z.lazy(() => LoincIncludeSchema).optional(),
  where: LoincWhereInputSchema.optional(), 
  orderBy: z.union([ LoincOrderByWithRelationInputSchema.array(), LoincOrderByWithRelationInputSchema ]).optional(),
  cursor: LoincWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ LoincScalarFieldEnumSchema, LoincScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default LoincFindManyArgsSchema;
