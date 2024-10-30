import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config({ path: process.cwd() + '/.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();