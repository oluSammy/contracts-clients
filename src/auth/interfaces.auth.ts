import { User } from '@prisma/client';

export interface SignInResponse extends User {
  accessToken: string;
}
