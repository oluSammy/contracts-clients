import { Module } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ContractsController } from './contracts.controller';
import { ContractService } from './contracts.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/roles/role.guard';

@Module({
  controllers: [ContractsController],
  providers: [
    ContractService,
    PrismaService,
    JwtService,
    AuthGuard,
    RolesGuard,
  ],
})
export class ContractsModule {}
