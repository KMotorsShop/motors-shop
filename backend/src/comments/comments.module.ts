import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { AdsModule } from 'src/ads/ads.module';

@Module({
  imports: [AdsModule],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
