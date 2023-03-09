/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseInterceptors,
  ClassSerializerInterceptor,
  SerializeOptions,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { AuthRequest } from 'src/auth/models/AuthRequest';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({ excludeExtraneousValues: true })
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @IsPublic()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

// @Get('/profile')
// findOne(@Req() request: AuthRequest) {
//   return this.usersService.findOne(request.user.id);
// };

  // @Get(':id')
  // findOne(@Param('id') id: string,) {
  //   return this.usersService.findOne(id);
  // }

  @IsPublic()
  @Get('/profile/:id')
  findOneUserAds(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('/:id')
  @IsPublic()
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
