/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { Ad } from './entities/ad.entity';

@Injectable()
export class AdsService {
  constructor(@InjectRepository(Ad) private adRepository: Repository<Ad>) {}

  async create(createAdDto: CreateAdDto) {
    const ad = this.adRepository.create(createAdDto);
    await this.adRepository.save(ad);
    return ad;
  }

  async findAll() {
    return this.adRepository.find();
  }

  async findOne(id: string) {
    const ad = await this.adRepository.findOne({ where: { id } });
    return ad;
  }

  update(id: number, updateAdDto: UpdateAdDto) {
    return `This action updates a #${id} ad`;
  }

  remove(id: number) {
    return `This action removes a #${id} ad`;
  }
}
