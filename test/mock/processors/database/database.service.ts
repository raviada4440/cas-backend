import { PrismaClient } from '@db/client'
import { extendedPrismaClient } from '@core/processors/database/prisma.instance'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { prisma } from '@test/lib/prisma'

@Injectable()
export class MockedDatabaseService {
  private client: extendedPrismaClient
  constructor(readonly configService: ConfigService) {
    this.client = prisma
  }

  public get prisma(): PrismaClient {
    return this.client as unknown as PrismaClient
  }
}
