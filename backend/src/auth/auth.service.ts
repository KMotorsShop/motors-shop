import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { UserPayload } from './models/userPayload';
import { JwtService } from '@nestjs/jwt/dist';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  login(user: User): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
      name: user.name,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      token: jwtToken,
    };
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOneBy({ email });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new Error('Email ou senha incorretos.');
  }
}
