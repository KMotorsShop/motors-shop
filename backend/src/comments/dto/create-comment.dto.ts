/* eslint-disable prettier/prettier */
import { IsDefined } from 'class-validator';

export class CreateCommentDto {
    
    @IsDefined()
    user: string;

    @IsDefined()
    ad: string;

    @IsDefined()
    content: string;
}
