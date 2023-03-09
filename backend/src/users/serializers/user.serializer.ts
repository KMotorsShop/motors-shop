import { Exclude, Expose, Type } from 'class-transformer';
import { AdSerializer } from 'src/ads/serializers/ad.serializer';
import { User } from '../entities/user.entity';

export class UserSerializer {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  cpf: string;

  @Expose()
  cellphone: string;

  @Expose()
  birthdate: string;

  @Expose()
  description: string;

  @Exclude()
  password: string;

  @Expose()
  type: string;

  @Expose()
  zipCode: number;

  @Expose()
  state: string;

  @Expose()
  city: string;

  @Expose()
  street: string;

  @Expose()
  number: number;

  @Expose()
  complement?: string;

  @Expose()
  @Type(() => AdSerializer)
  ads: AdSerializer[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
