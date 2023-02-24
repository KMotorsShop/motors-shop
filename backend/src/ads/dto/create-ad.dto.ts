/* eslint-disable prettier/prettier */
import { IsDefined, Max, MaxLength, Min } from 'class-validator';

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
  type: string;

  @IsDefined()
  @Min(0)
  km: number;

  @IsDefined()
  description: string;
}
