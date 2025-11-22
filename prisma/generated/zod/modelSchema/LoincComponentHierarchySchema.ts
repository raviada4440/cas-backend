import { z } from 'zod';

/////////////////////////////////////////
// LOINC COMPONENT HIERARCHY SCHEMA
/////////////////////////////////////////

export const LoincComponentHierarchySchema = z.object({
  id: z.string(),
  parentId: z.string(),
  level: z.number(),
  code: z.string(),
  sequence: z.string(),
  codeText: z.string(),
  component: z.string(),
  property: z.string(),
  timing: z.string(),
  scale: z.string(),
  method: z.string(),
})

export type LoincComponentHierarchy = z.infer<typeof LoincComponentHierarchySchema>

/////////////////////////////////////////
// LOINC COMPONENT HIERARCHY PARTIAL SCHEMA
/////////////////////////////////////////

export const LoincComponentHierarchyPartialSchema = LoincComponentHierarchySchema.partial()

export type LoincComponentHierarchyPartial = z.infer<typeof LoincComponentHierarchyPartialSchema>

export default LoincComponentHierarchySchema;
