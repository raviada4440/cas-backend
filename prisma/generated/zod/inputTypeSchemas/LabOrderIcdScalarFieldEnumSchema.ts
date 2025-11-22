import { z } from 'zod';

export const LabOrderIcdScalarFieldEnumSchema = z.enum(['id','labOrderId','icdId','createdAt','updatedAt']);

export default LabOrderIcdScalarFieldEnumSchema;
