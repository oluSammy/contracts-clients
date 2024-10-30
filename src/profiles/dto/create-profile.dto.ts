import { Prisma, UserType } from '@prisma/client';
import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';

export class CreateProfileDto implements Prisma.UserCreateInput {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsEnum(UserType)
  userType: UserType;
}
