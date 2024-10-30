import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ValidationPipe } from 'src/validation/validation.pipe';
import { CreateProfileDto } from './dto/create-profile.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { UserType } from '@prisma/client';
import { RolesGuard } from 'src/roles/role.guard';

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Get()
  getAll() {
    return this.profileService.getAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  getOne(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.profileService.getOne(req.user.sub);
  }

  @Post()
  @Roles(UserType.ADMIN)
  @UseGuards(AuthGuard, RolesGuard)
  create(@Body(new ValidationPipe()) data: CreateProfileDto) {
    return this.profileService.create(data);
  }
}
