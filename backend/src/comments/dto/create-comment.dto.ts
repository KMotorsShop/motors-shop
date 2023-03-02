/* eslint-disable prettier/prettier */
import { IsDefined } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { Ad } from 'src/ads/entities/ad.entity';

export class CreateCommentDto {
  @IsDefined()
  ad_id: string;

  @IsDefined()
  content: string;
}
