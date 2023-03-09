/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';
import { IsDefined } from 'class-validator';


export class UpdateCommentDto extends PartialType(CreateCommentDto) {

    content: string;
}
