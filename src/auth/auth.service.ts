import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ProfilesService } from 'src/profiles/profiles.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInResponse } from './interfaces.auth';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: ProfilesService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<SignInResponse> {
    const user = await this.usersService.findByEmail(email);

    const isMatch = await bcrypt.compare(pass, user?.password);

    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.email };
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: jwtConstants.secret,
    });

    return { ...user, password: undefined, accessToken };
  }
}
