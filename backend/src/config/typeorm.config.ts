import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'arthur',
  password: '123',
  database: 'grupo35',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};