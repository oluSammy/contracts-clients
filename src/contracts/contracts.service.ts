import { Injectable } from '@nestjs/common';
import { Contract, ContractStatus } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ContractService {
  constructor(private prisma: PrismaService) {}

  saltOrRounds: number = 10;

  getAll() {
    return 'All Profiles';
  }

  async create({
    clientId,
    contractorId,
  }: {
    clientId: number;
    contractorId: number;
  }): Promise<Contract> {
    try {
      const contract = await this.prisma.contract.create({
        data: {
          clientId,
          contractorId,
          status: ContractStatus.NEW,
        },
      });

      return contract;
    } catch (error: any) {
      throw error; // Re-throw the error if it's not a unique constraint error
    }
  }
}
