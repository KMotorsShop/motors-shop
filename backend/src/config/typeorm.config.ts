/* eslint-disable prettier/prettier */
import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

console.log(__dirname + '/../**/*.entity.{js,ts}')
export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: parseInt(process.env.POSTGRES_PORT as string),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [User],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: true,
  logging: true,
};

const datasource = new DataSource(typeOrmConfig);
// '/../**/*.entity.{js,ts}'
// __dirname + 'entities/**/*.entity.ts'
export default datasource;