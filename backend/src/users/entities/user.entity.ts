
import { Exclude } from 'class-transformer';

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
  cpf: string;

  @Column()
  cellphone: string;

  @Column()
  birthdate: string;

  @Column()
  description: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  type: string;

  @Column()
  zipCode: number;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement: string;
  password: string;

  @OneToMany(type => Comment, comment => comment.user)
  comment: Comment[]

}
