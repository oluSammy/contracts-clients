import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ProfilesService } from 'src/profiles/profiles.service';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    ProfilesService,
    PrismaService,
    // JwtService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class AuthModule {}
