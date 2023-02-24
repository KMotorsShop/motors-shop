/* eslint-disable prettier/prettier */
import { IsDefined, Max, MaxLength, Min } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAdDto } from './create-ad.dto';

export class UpdateAdDto extends PartialType(CreateAdDto) {
    @Min(1000)
    @Max(9999)
    @IsDefined()
    year: number;

    @IsDefined()
    @Min(1)
    price: number;

    @IsDefined()
    @MaxLength(64)
    name: string;
}
