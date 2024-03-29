/* eslint-disable prettier/prettier */
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encodePassword } from 'src/utils/bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserSerializer } from './serializers/user.serializer';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const emailAlreadyExists = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (emailAlreadyExists) {
      throw new ConflictException('Email already exists');
    }
    const password = encodePassword(createUserDto.password);
    const user = this.userRepository.create({ ...createUserDto, password });
    await this.userRepository.save(user);
    return new UserSerializer(user);
  }

  async findAll() {
    const userList = await this.userRepository.find();
    return userList.map((user) => new UserSerializer(user));
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: { ads: true },
    });
    if (!user) {
      throw new NotFoundException();
    }
    return new UserSerializer(user);
  }

  async findOneUserAds(id: string) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: { ads: true },
    });
    if (!user) {
      throw new NotFoundException();
    }
    return new UserSerializer(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const queryResponse = await this.userRepository.update(
      { id },
      updateUserDto,
    );
    if (queryResponse.affected === 0) {
      throw new NotFoundException();
    }
  }

  async remove(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException();
    }
    await this.userRepository.remove(user);
  }
}
