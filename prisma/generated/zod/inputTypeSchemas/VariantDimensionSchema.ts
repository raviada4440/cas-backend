import { z } from 'zod';

export const VariantDimensionSchema = z.enum(['FAMILY_STRUCTURE','SPECIMEN_RELATIONSHIP','REFLEX_MODE','PANEL_COMPOSITION','SPECIMEN_TYPE','METHOD_VARIANT','TURNAROUND_VARIANT','OPERATIONAL_MODE','REPORTING_VARIANT']);

export type VariantDimensionType = `${z.infer<typeof VariantDimensionSchema>}`

export default VariantDimensionSchema;
