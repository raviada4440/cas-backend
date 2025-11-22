import { z } from 'zod';

export const LabOrderAttachmentScalarFieldEnumSchema = z.enum(['id','labOrderId','attachmentId','createdAt','updatedAt']);

export default LabOrderAttachmentScalarFieldEnumSchema;
