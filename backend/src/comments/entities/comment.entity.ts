/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Ad } from 'src/ads/entities/ad.entity';


@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(type => User, user => user.id, {eager: true})
  @JoinColumn()
  user: User;

  @ManyToOne(type => Ad, ad => ad.id, {eager: true})
  @JoinColumn()
  ad: Ad;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  content: string;
}
