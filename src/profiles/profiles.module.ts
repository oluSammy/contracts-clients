import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controllers';
import { ProfilesService } from './profiles.service';
import { PrismaService } from 'src/prisma.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService, PrismaService, AuthGuard, JwtService],
})
export class ProfilesModule {}
