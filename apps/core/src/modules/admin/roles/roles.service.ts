import { ConflictException, Injectable, NotFoundException } from '@nestjs/common'

import { DatabaseService } from '@core/processors/database/database.service'

import {
  AssignRoleDto,
  BulkAssignRolesDto,
  CreateRoleDto,
  ListRolesQueryDto,
  RemoveRoleDto,
  UpdateRoleDto,
  UpdateUserRoleDto,
} from './roles.dto'

@Injectable()
export class RolesService {
  constructor(private readonly db: DatabaseService) {}

  async create(dto: CreateRoleDto) {
    return this.db.prisma.role.create({
      data: dto,
    })
  }

  async update(id: string, dto: UpdateRoleDto) {
    await this.ensureRoleExists(id)
    return this.db.prisma.role.update({
      where: { id },
      data: dto,
    })
  }

  async findById(id: string) {
    const role = await this.db.prisma.role.findUnique({
      where: { id },
      include: {
        userRoles: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    })
    if (!role) {
      throw new NotFoundException(`Role ${id} not found`)
    }
    return role
  }

  async findByName(name: string) {
    const role = await this.db.prisma.role.findUnique({
      where: { name },
      include: {
        userRoles: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
    })
    if (!role) {
      throw new NotFoundException(`Role ${name} not found`)
    }
    return role
  }

  async list(query: ListRolesQueryDto) {
    const take = query.limit ?? 50
    const skip = query.offset ?? 0

    return this.db.prisma.role.findMany({
      include: {
        userRoles: {
          select: {
            id: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
      },
      orderBy: { name: 'asc' },
      take,
      skip,
    })
  }

  async remove(id: string) {
    await this.ensureRoleExists(id)

    const usageCount = await this.db.prisma.userRole.count({
      where: { roleId: id },
    })
    if (usageCount > 0) {
      throw new ConflictException('Cannot delete role that is assigned to users')
    }

    await this.db.prisma.role.delete({ where: { id } })
    return { success: true }
  }

  async assignRole(roleId: string, dto: AssignRoleDto) {
    await this.ensureRoleExists(roleId)
    await this.ensureUserExists(dto.userId)

    const existing = await this.db.prisma.userRole.findUnique({
      where: {
        userId_roleId: {
          userId: dto.userId,
          roleId,
        },
      },
    })
    if (existing) {
      throw new ConflictException('User already has this role')
    }

    return this.db.prisma.userRole.create({
      data: {
        userId: dto.userId,
        roleId,
        assignedBy: dto.assignedBy ?? undefined,
        expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : undefined,
      },
    })
  }

  async removeRole(roleId: string, dto: RemoveRoleDto) {
    await this.ensureRoleExists(roleId)
    await this.ensureUserExists(dto.userId)

    await this.db.prisma.userRole.delete({
      where: {
        userId_roleId: {
          userId: dto.userId,
          roleId,
        },
      },
    })

    return { success: true }
  }

  async getUserRoles(userId: string) {
    await this.ensureUserExists(userId)

    return this.db.prisma.userRole.findMany({
      where: { userId },
      include: {
        role: true,
      },
      orderBy: { assignedAt: 'desc' },
    })
  }

  async getUsersWithRole(roleId: string) {
    await this.ensureRoleExists(roleId)

    return this.db.prisma.userRole.findMany({
      where: { roleId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { assignedAt: 'desc' },
    })
  }

  async updateUserRole(roleId: string, userId: string, dto: UpdateUserRoleDto) {
    await this.ensureRoleExists(roleId)
    await this.ensureUserExists(userId)

    try {
      return await this.db.prisma.userRole.update({
        where: {
          userId_roleId: {
            userId,
            roleId,
          },
        },
        data: {
          expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : null,
        },
      })
    } catch (error) {
      throw new NotFoundException(`User ${userId} does not have role ${roleId}`)
    }
  }

  async getUserPermissions(userId: string) {
    await this.ensureUserExists(userId)

    const userRoles = await this.db.prisma.userRole.findMany({
      where: {
        userId,
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
      include: {
        role: {
          select: {
            permissions: true,
          },
        },
      },
    })

    const allPermissions = userRoles.flatMap((ur) => ur.role.permissions)
    const uniquePermissions = [...new Set(allPermissions)]
    return {
      permissions: uniquePermissions,
      roles: userRoles.map((ur) => ({
        roleId: ur.roleId,
        assignedAt: ur.assignedAt,
        expiresAt: ur.expiresAt,
      })),
    }
  }

  async hasPermission(userId: string, permission: string) {
    await this.ensureUserExists(userId)

    const userRoles = await this.db.prisma.userRole.findMany({
      where: {
        userId,
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
      include: {
        role: {
          select: {
            permissions: true,
          },
        },
      },
    })

    const allPermissions = userRoles.flatMap((ur) => ur.role.permissions)
    return allPermissions.includes(permission)
  }

  async stats() {
    const [totalRoles, totalUserRoles, activeUserRoles, rolesByUsage] = await Promise.all([
      this.db.prisma.role.count(),
      this.db.prisma.userRole.count(),
      this.db.prisma.userRole.count({
        where: {
          OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
        },
      }),
      this.db.prisma.userRole.groupBy({
        by: ['roleId'],
        _count: { id: true },
      }),
    ])

    return {
      totalRoles,
      totalUserRoles,
      activeUserRoles,
      expiredUserRoles: totalUserRoles - activeUserRoles,
      rolesByUsage,
    }
  }

  async bulkAssignRoles(userId: string, dto: BulkAssignRolesDto) {
    await this.ensureUserExists(userId)

    await this.db.prisma.userRole.deleteMany({
      where: { userId },
    })

    if (dto.roleIds.length === 0) {
      return { success: true, assignedCount: 0 }
    }

    const result = await this.db.prisma.userRole.createMany({
      data: dto.roleIds.map((roleId) => ({
        userId,
        roleId,
        assignedBy: dto.assignedBy ?? undefined,
        expiresAt: dto.expiresAt ? new Date(dto.expiresAt) : undefined,
      })),
    })

    return { success: true, assignedCount: result.count }
  }

  async expiredUserRoles(query: ListRolesQueryDto) {
    const take = query.limit ?? 50
    const skip = query.offset ?? 0

    return this.db.prisma.userRole.findMany({
      where: {
        expiresAt: {
          lte: new Date(),
        },
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        role: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
      orderBy: { expiresAt: 'desc' },
      take,
      skip,
    })
  }

  async fetchRoles() {
    const users = await this.db.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        createdAt: true,
        userAttribute: {
          select: {
            userType: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 50,
    })

    return users.map((user) => ({
      id: user.id,
      name: user.name ?? 'Unnamed User',
      description: `User role for ${user.email}`,
      level: user.userAttribute?.userType === 'Admin' ? 1 : 2,
      createdAt: user.createdAt,
      userType: user.userAttribute?.userType ?? 'User',
    }))
  }

  async fetchUserTypes() {
    return this.db.prisma.userAttribute.findMany({
      select: {
        id: true,
        userType: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    })
  }

  private async ensureRoleExists(id: string) {
    const exists = await this.db.prisma.role.findUnique({ where: { id } })
    if (!exists) {
      throw new NotFoundException(`Role ${id} not found`)
    }
  }

  private async ensureUserExists(id: string) {
    const exists = await this.db.prisma.user.findUnique({ where: { id } })
    if (!exists) {
      throw new NotFoundException(`User ${id} not found`)
    }
  }
}
