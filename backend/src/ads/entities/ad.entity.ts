/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ads')
export class Ad {

  @PrimaryGeneratedColumn('uuid')
  id: string; 

  @Column()
  year: string;

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

};  
