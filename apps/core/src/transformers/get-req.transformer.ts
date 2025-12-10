import { FastifyRequest } from 'fastify'

import { ExecutionContext } from '@nestjs/common'

export interface RequestTenant {
  id: string
  name: string | null
  slug?: string | null
}

export interface RequestOwner {
  id: string
  email: string | null
  name: string | null
  image: string | null
  createdAt: Date
  updatedAt: Date
  emailVerified: Date | null
}

export type AuthenticatedRequest = FastifyRequest & {
  owner?: RequestOwner
  token?: string
  tenants?: RequestTenant[]
  tenant?: RequestTenant | null
  tenantIds?: string[]
  isSuperAdmin?: boolean
}

export function getNestExecutionContextRequest(context: ExecutionContext): AuthenticatedRequest {
  return context.switchToHttp().getRequest<AuthenticatedRequest>()
}
