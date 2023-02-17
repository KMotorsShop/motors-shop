/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { AdsModule } from './ads/ads.module';

@Module({
  imports: [
  TypeOrmModule.forRoot(typeOrmConfig),
  ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    
  AdsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
