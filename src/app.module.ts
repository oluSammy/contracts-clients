import { Module } from '@nestjs/common';
import { ProfilesModule } from './profiles/profiles.module';
import { ConfigModule } from '@nestjs/config';
// import { PrismaService } from './prisma.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProfilesModule, ConfigModule.forRoot(), AuthModule],
  // providers: [PrismaService],
})
export class AppModule {}
