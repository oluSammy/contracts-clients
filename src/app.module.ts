import { Module } from '@nestjs/common';
import { ProfilesModule } from './profiles/profiles.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ContractsModule } from './contracts/contracts.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    ContractsModule,
    ProfilesModule,
  ],
  providers: [],
})
export class AppModule {}
