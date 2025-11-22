import { z } from 'zod';

export const LoincComponentHierarchyScalarFieldEnumSchema = z.enum(['id','parentId','level','code','sequence','codeText','component','property','timing','scale','method']);

export default LoincComponentHierarchyScalarFieldEnumSchema;
