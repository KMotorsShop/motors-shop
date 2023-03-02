/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Comment } from 'src/comments/entities/comment.entity';

@Entity('ads')
export class Ad {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  year: number;

  @Column()
  price: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  km: number;

  @Column()
  description: string;

  @Column('varchar', { nullable: true, default: null, array: true })
  images: string[];

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}
