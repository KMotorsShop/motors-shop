/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: number;

  @Column()
  cellphone: string;

  @Column()
  birthdate: Date;

  @Column()
  description: string;

  @Column()
  password: string;

  @Column()
  type: string;

  // @OneToOne(() => Address, { eager: true })
  // @JoinColumn()
  // address: Address;
}
