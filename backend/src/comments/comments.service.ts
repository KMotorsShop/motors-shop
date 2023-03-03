/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
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

  async create(
    createCommentDto: CreateCommentDto,
    // userId: string,
    adId: string,
  ) {
    const newComment: any = {
      content: createCommentDto.content,
      ad: adId,
      user: createCommentDto.userId,  
    };
    const comment = this.commentRepository.create(newComment);
    await this.commentRepository.save(comment);
    return comment;
  }

  async findAll(adId: any ) {
    const allComments = this.commentRepository.find();
    const adComments = (await allComments).filter((comment) => {
      console.log(comment.ad.id)
      return comment.ad.id == adId
    })
    return adComments;
  }

  async findOne(id: string) {
    const comment = await this.commentRepository.findOne({ where: { id } });
    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.commentRepository.update(id, updateCommentDto);
    // await this.commentRepository.save(comment);
    return '';
    // comment;
  }

  async remove(id: string) {
    // this.commentRepository.remove(id);
    return '';

  }
}
