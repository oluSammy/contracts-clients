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

@Controller('profiles')
export class ProfilesController {
  constructor(private profileService: ProfilesService) {}

  @Get()
  getAll() {
    return this.profileService.getAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number, @Request() req) {
    console.log(req.user.sub);
    return this.profileService.getOne(req.user.sub);
  }

  @Post()
  create(@Body(new ValidationPipe()) data: CreateProfileDto) {
    return this.profileService.create(data);
  }
}
