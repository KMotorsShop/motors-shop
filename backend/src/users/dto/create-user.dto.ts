import { IsDefined, IsString, IsEmail } from 'class-validator';

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
  type: string;

  @IsDefined()
  password: string;

  @IsDefined()
  @IsString()
  description: string;

  @IsDefined()
  @IsString()
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
