/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('ads')
export class Ad {

  @PrimaryGeneratedColumn('uuid')
  id: string; 

  @Column()
  ano: number;

  @Column()
  preco: number;

  @Column()
  nome: string;

  @Column()
  tipo: string;

  @Column()
  km: number;

  @Column()
  descricao: string;

};  
