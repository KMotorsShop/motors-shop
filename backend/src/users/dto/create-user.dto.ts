import { IsDefined, IsString, IsNumber, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsNumber()
  cpf: number;

  @IsDefined()
  @IsString()
  type: string;

  @IsDefined()
  @IsNumber()
  password: string;
}
