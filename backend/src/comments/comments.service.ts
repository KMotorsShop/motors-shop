/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const comment = this.commentRepository.create(createCommentDto);
    await this.commentRepository.save(comment);
    return comment;
  }

  async findAll() {
    return this.commentRepository.find();
  }

  async findOne(id: string) {
    const comment = await this.commentRepository.findOne({ where: { id } });
    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    // const comment = this.commentRepository.update(updateCommentDto, id);
    // await this.commentRepository.save(comment);
    // return comment;
  }

  async remove(id: number) {
    // return this.commentRepository.remove(id);
  }
}
