import { z } from 'zod';

export const LabOrderFormScalarFieldEnumSchema = z.enum(['id','labOrderId','versionOrderFormId','orderFormTemplateId','displayOrder','sectionName','templateName','formSchema','layoutSchema','responses','isCompleted','completedAt','createdAt','updatedAt']);

export default LabOrderFormScalarFieldEnumSchema;
