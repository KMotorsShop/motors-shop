/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/users/entities/user.entity';

export enum AdTypes {
  CARRO = 'Carro',
  MOTO = 'Moto',
}

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

  @Column({
    type: 'enum',
    enum: AdTypes,
  })
  type: AdTypes;

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

  @ManyToOne(() => User, (user) => user.id, { eager: true })
  seller: User;

  // @OneToMany(type => Comment, comment => comment.ad, {eager: true})
  // comment: Comment;
}
