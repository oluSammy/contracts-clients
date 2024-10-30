import {
  HttpException,
  HttpStatus,
  Injectable,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfilesService {
  constructor(private prisma: PrismaService) {}

  saltOrRounds: number = 10;

  getAll() {
    return 'All Profiles';
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  getOne(@Param('id', ParseIntPipe) id: number) {
    const user = this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const hashPass = await bcrypt.hash(data.password, this.saltOrRounds);
    try {
      const user = await this.prisma.user.create({
        data: { ...data, password: hashPass },
      });
      return { ...user, password: undefined };
    } catch (error: any) {
      if (error.code === 'P2002') {
        // Prisma error code for unique constraint violation
        throw new HttpException(
          'Unique constraint failed on one or more fields',
          HttpStatus.CONFLICT,
        );
      }

      throw error; // Re-throw the error if it's not a unique constraint error
    }
  }
}
