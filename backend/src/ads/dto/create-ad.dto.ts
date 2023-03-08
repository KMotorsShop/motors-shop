/* eslint-disable prettier/prettier */
import { IsDefined, IsIn, Max, MaxLength, Min } from 'class-validator';
import { AdTypes } from '../entities/ad.entity';

export class CreateAdDto {
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

  @IsDefined()
  @IsIn([AdTypes.CARRO, AdTypes.MOTO])
  type: AdTypes;

  @IsDefined()
  @Min(0)
  km: number;

  @IsDefined()
  description: string;

  @IsDefined()
  images: string[];
}
