/* eslint-disable prettier/prettier */

import { Ad } from 'src/ads/entities/ad.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRoles {
  ANUNCIANTE = 'Anunciante',
  COMPRADOR = 'Comprador',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
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
    default: UserRoles.COMPRADOR,
    enum: UserRoles,
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

  @OneToMany(() => Ad, (ad) => ad.seller)
  ads: Ad[];
}
