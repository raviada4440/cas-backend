import { z } from 'zod';

export const AccountScalarFieldEnumSchema = z.enum(['id','userId','type','provider','providerAccountId','refreshToken','accessToken','expiresAt','tokenType','scope','state','idToken','sessionState','refreshTokenExpiresIn','epicDstu2Patient','appointment','dob','encounter','location','loginDepartment','needPatientBanner','patient','smartStyleUrl','unconfirmedStatus','userEmail','username','tenant','createdAt','updatedAt']);

export default AccountScalarFieldEnumSchema;
