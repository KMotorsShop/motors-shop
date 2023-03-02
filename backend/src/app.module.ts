/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { ConfigModule } from '@nestjs/config';
import { AdsModule } from './ads/ads.module';
import { UsersModule } from './users/users.module';
import { typeOrmConfig } from './config/typeorm.config';
<<<<<<< HEAD
import { CommentsModule } from './comments/comments.module';
=======
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
>>>>>>> cc2302e0725662e587cdeb5ec6d9cfabbc55ecb2

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AdsModule,
    UsersModule,
<<<<<<< HEAD
    CommentsModule,
=======
    AuthModule,
>>>>>>> cc2302e0725662e587cdeb5ec6d9cfabbc55ecb2
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}