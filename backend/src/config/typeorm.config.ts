/* eslint-disable prettier/prettier */
import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Ad } from 'src/ads/entities/ad.entity';
import { Comment } from 'src/comments/entities/comment.entity';

export const typeOrmConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: parseInt(process.env.POSTGRES_PORT as string),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  // Quando der problema com as migrations descomente a 
  // próxima linha e comente a subsequente
  // entities: [User, Ad, Comment],
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
  synchronize: true,
  logging: true,
};

const datasource = new DataSource(typeOrmConfig);
// '/../**/*.entity.{js,ts}'
// 
export default datasource;