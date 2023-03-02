/* eslint-disable prettier/prettier */
import { IsDefined } from 'class-validator';
import { Ad } from 'src/ads/entities/ad.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateCommentDto {
  @IsDefined()
  user: User;

  @IsDefined()
  ad: Ad;

  @IsDefined()
  content: string;
}
