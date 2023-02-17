/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { AdsModule } from './ads/ads.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
  TypeOrmModule.forRoot(typeOrmAsyncConfig),
  ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  AdsModule,
  UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
