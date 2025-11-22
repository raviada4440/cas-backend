import { Injectable } from '@nestjs/common'
import { Prisma, Patient } from '@db/client'

import { BizException } from '@core/common/exceptions/biz.exception'
import { ErrorCodeEnum } from '@core/constants/error-code.constant'
import { DatabaseService } from '@core/processors/database/database.service'

import {
  CreatePatientInput,
  PatientDetail,
  PatientSearchResponse,
  PatientSummary,
  UpdatePatientInput,
} from '@shared/contracts/patients'

import { CreatePatientDtoInput, PatientSearchQuery, UpdatePatientDtoInput } from './patients.dto'

@Injectable()
export class PatientsService {
  constructor(private readonly db: DatabaseService) {}

  async search(query: PatientSearchQuery): Promise<PatientSearchResponse> {
    const take = Math.min(query.limit ?? 20, 50)
    const where: Prisma.PatientWhereInput = {}

    const searchTerm = query.search?.trim()
    if (searchTerm) {
      where.OR = [
        { firstName: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
        { lastName: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
        { email: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
        { mobile: { contains: searchTerm, mode: Prisma.QueryMode.insensitive } },
      ]
    }

    const patients = await this.db.prisma.patient.findMany({
      where,
      orderBy: [{ updatedAt: 'desc' }],
      take: take + 1,
      ...(query.cursor ? { skip: 1, cursor: { id: query.cursor } } : {}),
    })

    const items = patients.slice(0, take).map((patient) => this.mapSummary(patient))
    const nextCursor = patients.length > take ? patients[take].id : null

    return {
      items,
      nextCursor,
    }
  }

  async detail(patientId: string): Promise<PatientDetail> {
    const patient = await this.db.prisma.patient.findUnique({
      where: { id: patientId },
    })

    if (!patient) {
      throw new BizException(ErrorCodeEnum.PatientNotFound)
    }

    return this.mapDetail(patient)
  }

  async create(input: CreatePatientDtoInput): Promise<PatientDetail> {
    const created = await this.db.prisma.patient.create({
      data: this.buildCreateData(input),
    })

    return this.mapDetail(created)
  }

  async update(patientId: string, input: UpdatePatientDtoInput): Promise<PatientDetail> {
    const updated = await this.db.prisma.patient
      .update({
        where: { id: patientId },
        data: this.buildUpdateData(input),
      })
      .catch(() => {
        throw new BizException(ErrorCodeEnum.PatientNotFound)
      })

    return this.mapDetail(updated)
  }

  async delete(patientId: string) {
    await this.db.prisma.patientOrganization.deleteMany({ where: { patientId } })

    await this.db.prisma.patient.delete({ where: { id: patientId } }).catch(() => {
      throw new BizException(ErrorCodeEnum.PatientNotFound)
    })

    return { success: true }
  }

  private buildCreateData(input: CreatePatientInput): Prisma.PatientUncheckedCreateInput {
    return {
      firstName: input.firstName ?? null,
      lastName: input.lastName ?? null,
      email: input.email ?? null,
      mobile: input.mobile ?? null,
      gender: input.gender ?? null,
      dateOfBirth: input.dateOfBirth ? new Date(input.dateOfBirth) : null,
    }
  }

  private buildUpdateData(input: UpdatePatientInput): Prisma.PatientUncheckedUpdateInput {
    return {
      ...(input.firstName !== undefined ? { firstName: input.firstName } : {}),
      ...(input.lastName !== undefined ? { lastName: input.lastName } : {}),
      ...(input.email !== undefined ? { email: input.email } : {}),
      ...(input.mobile !== undefined ? { mobile: input.mobile } : {}),
      ...(input.gender !== undefined ? { gender: input.gender } : {}),
      ...(input.dateOfBirth !== undefined
        ? { dateOfBirth: input.dateOfBirth ? new Date(input.dateOfBirth) : null }
        : {}),
    }
  }

  private mapSummary(patient: Patient): PatientSummary {
    return {
      id: patient.id,
      firstName: patient.firstName ?? null,
      lastName: patient.lastName ?? null,
      email: patient.email ?? null,
      mobile: patient.mobile ?? null,
    }
  }

  private mapDetail(patient: Patient): PatientDetail {
    return {
      ...this.mapSummary(patient),
      dateOfBirth: patient.dateOfBirth?.toISOString() ?? null,
      gender: patient.gender ?? null,
      addressLine1: null,
      addressLine2: null,
      city: null,
      state: null,
      postalCode: null,
      country: null,
      createdAt: patient.createdAt.toISOString(),
      updatedAt: patient.updatedAt.toISOString(),
    }
  }
}
