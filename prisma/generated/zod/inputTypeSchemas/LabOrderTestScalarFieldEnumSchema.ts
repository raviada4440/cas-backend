import { z } from 'zod';

export const LabOrderTestScalarFieldEnumSchema = z.enum(['id','labOrderId','testId','createdAt','updatedAt']);

export default LabOrderTestScalarFieldEnumSchema;
