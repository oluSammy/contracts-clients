import {
  Controller,
  Param,
  Post,
  ParseIntPipe,
  // UseGuards,
  Request,
  Get,
  UseGuards,
} from '@nestjs/common';
// import { ValidationPipe } from 'src/validation/validation.pipe';
// import { AuthGuard } from 'src/auth/auth.guard';
import { ContractService } from './contracts.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { UserType } from '@prisma/client';
import { RolesGuard } from 'src/roles/role.guard';
// import { Roles } from 'src/roles/roles.decorator';
// import { UserType } from '@prisma/client';

@Controller('contracts')
export class ContractsController {
  constructor(private contractService: ContractService) {}

  @Get()
  async getAll() {
    return 'Get all Contract';
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number) {
    return 'Get One Contract';
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(UserType.CLIENT)
  @Post(':id')
  async create(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return await this.contractService.create({
      clientId: req.user.sub,
      contractorId: id,
    });
  }
}
