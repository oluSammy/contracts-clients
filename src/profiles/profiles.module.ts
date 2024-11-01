import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controllers';
import { ProfilesService } from './profiles.service';
import { PrismaService } from 'src/prisma.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { RolesGuard } from 'src/roles/role.guard';

@Module({
  controllers: [ProfilesController],
  providers: [
    ProfilesService,
    PrismaService,
    JwtService,
    AuthGuard,
    RolesGuard,
  ],
})
export class ProfilesModule {}
