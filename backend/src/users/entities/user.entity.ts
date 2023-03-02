/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from '../../comments/entities/comment.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;




}
