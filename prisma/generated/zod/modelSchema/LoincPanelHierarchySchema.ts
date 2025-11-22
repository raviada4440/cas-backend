import { z } from 'zod';

/////////////////////////////////////////
// LOINC PANEL HIERARCHY SCHEMA
/////////////////////////////////////////

export const LoincPanelHierarchySchema = z.object({
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

export type LoincPanelHierarchy = z.infer<typeof LoincPanelHierarchySchema>

/////////////////////////////////////////
// LOINC PANEL HIERARCHY PARTIAL SCHEMA
/////////////////////////////////////////

export const LoincPanelHierarchyPartialSchema = LoincPanelHierarchySchema.partial()

export type LoincPanelHierarchyPartial = z.infer<typeof LoincPanelHierarchyPartialSchema>

export default LoincPanelHierarchySchema;
