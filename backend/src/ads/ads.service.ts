/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
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

  async update(id: string, updateAdDto: UpdateAdDto) {
    const ad = await this.adRepository.update({ id }, updateAdDto);
    if (ad.affected === 0) {
      throw new NotFoundException();
    }
  }

  async remove(id: string) {
    const ad = await this.adRepository.findOneBy({ id });
    if (!ad) {
      throw new NotFoundException();
    }
    await this.adRepository.remove(ad);
  }
}
