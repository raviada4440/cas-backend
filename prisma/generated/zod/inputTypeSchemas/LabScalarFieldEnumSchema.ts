import { z } from 'zod';

export const LabScalarFieldEnumSchema = z.enum(['id','labName','labCode','address','city','state','zip','createdAt','updatedAt']);

export default LabScalarFieldEnumSchema;
