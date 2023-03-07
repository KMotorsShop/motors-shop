import { Expose, Type } from 'class-transformer';
import { UserSerializer } from 'src/users/serializers/user.serializer';
import { Ad, AdTypes } from '../entities/ad.entity';

export class AdSerializer {
  @Expose()
  id: string;

  @Expose()
  year: number;

  @Expose()
  price: number;

  @Expose()
  name: string;

  @Expose()
  type: AdTypes;

  @Expose()
  km: number;

  @Expose()
  description: string;

  @Expose()
  images: string[];

  @Expose()
  isActive: boolean;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  @Expose()
  @Type(() => UserSerializer)
  seller: UserSerializer;

  constructor(partial: Partial<Ad>) {
    Object.assign(this, partial);
  }
}
