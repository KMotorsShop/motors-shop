/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRoles {
  SELLER = 'seller',
  USER = 'user',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  password: string;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.USER,
  })
  type: UserRoles;

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

  @Column({ nullable: true })
  complement?: string;
}
