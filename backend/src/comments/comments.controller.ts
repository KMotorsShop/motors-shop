/* eslint-disable prettier/prettier */
import { AuthRequest } from 'src/auth/models/AuthRequest';
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

interface IToken {
  host: string;
  'user-agent': string;
  'content-type': string;
  authorization: string;
  accept: string;
  'content-length': string; 
}

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':adId')
  create(@Body() createCommentDto: CreateCommentDto,
  @Param('adId') adId: string, 
  @Headers() token: IToken) {
    const userId = token.authorization.split(" ")[1]
    return this.commentsService.create(createCommentDto, adId);
  }

  @Get(':adId')
  findAll(
    @Param('adId') adId: string,
  ) {
    return this.commentsService.findAll(adId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // return this.commentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    // return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.commentsService.remove(+id);
  }
}
