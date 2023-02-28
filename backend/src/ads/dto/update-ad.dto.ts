/* eslint-disable prettier/prettier */
import {
  IsDefined,
  Max,
  MaxLength,
  MinDate,
  Min,
  isArray,
  IsInt,
  isString,
  MinLength,
  IsArray,
  isInt,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAdDto } from './create-ad.dto';

export class UpdateAdDto extends PartialType(CreateAdDto) {
  @Min(1885, {
    message: 'The automobile has not yet been invented',
  })
  @Max(2030, {
    message: 'This is too much futuristic'
  })
  year: number;

  @Min(1)
  price: number;

  @MaxLength(64)
  @MinLength(5, {
    message: 'Its name is too short'
  })
  name: string;

  type: string;

  @Min(0)
  @Max(100)
  km: number;

  description: string;
  
  @MinLength(3)
  @IsArray()
  @IsDefined()
  images: string[];
}
