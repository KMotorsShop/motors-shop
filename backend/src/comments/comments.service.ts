/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

import { AdsService } from '../ads/ads.service';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    private adsService: AdsService,
  ) {}

  async create(createCommentDto: CreateCommentDto, userId: string) {
    const newComment = {
      content: createCommentDto.content,
      ad: {
        id: createCommentDto.ad_id,
      },
      user: {
        id: userId
      }
    }
    // const comment = this.commentRepository.create(newComment);
    // await this.commentRepository.save(comment);
    return ""
    // comment;
  }

  async findAll() {
    return this.commentRepository.find();
  }

  async findOne(id: string) {
    const comment = await this.commentRepository.findOne({ where: { id } });
    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    // const comment = this.commentRepository.update(updateCommentDto);
    // await this.commentRepository.save(comment);
    return ""
    // comment;
  }

  async remove(id: string) {
    return ""
    // this.commentRepository.remove(id);
  }
}
