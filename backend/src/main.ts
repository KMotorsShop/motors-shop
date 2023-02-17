/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('PORT');
  const appUrl = config.get<string>('APP_URL');
  const postgresPort = config.get<number>('POSTGRES_PORT');

  await app.listen(3000, () => {
    logger.log(`Database is running at ${postgresPort}`)
    logger.log(`Server Listening at ${appUrl}:${port}`);
  });
}
bootstrap();
