import {
  IsDefined,
  IsString,
  IsEmail,
  IsIn,
  IsDateString,
} from 'class-validator';
import { UserRoles } from '../entities/user.entity';

export class CreateUserDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  cpf: string;

  @IsDefined()
  @IsString()
  @IsIn(['Anunciante', 'Comprador'])
  type: UserRoles;

  @IsDefined()
  password: string;

  @IsDefined()
  @IsString()
  description: string;

  @IsDefined()
  @IsString()
  // @IsDateString()
  birthdate: string;

  @IsDefined()
  @IsString()
  cellphone: string;

  @IsDefined()
  zipCode: number;

  @IsDefined()
  @IsString()
  state: string;

  @IsDefined()
  @IsString()
  city: string;

  @IsDefined()
  @IsString()
  street: string;

  @IsDefined()
  number: number;
}
