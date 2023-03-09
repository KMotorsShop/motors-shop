/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { Ad } from './entities/ad.entity';
import { AdSerializer } from './serializers/ad.serializer';

@Injectable()
export class AdsService {
  constructor(
    @InjectRepository(Ad) private adRepository: Repository<Ad>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createAdDto: CreateAdDto, userId: string) {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException();
    }
    const ad = this.adRepository.create({
      ...createAdDto,
      seller: user,
    });
    await this.adRepository.save(ad);
    return new AdSerializer(ad);
  }

  async findAll() {
    const ads = await this.adRepository.find();
    return ads.map((ad) => new AdSerializer(ad));
  }

  async findOne(id: string) {
    const ad = await this.adRepository.findOne({ where: { id } });
    if (!ad) {
      throw new NotFoundException();
    }
    return new AdSerializer(ad);
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
