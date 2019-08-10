import { Entity, PrimaryGeneratedColumn, Column, Index, OneToMany } from 'typeorm';
import { Heroes } from './heroes';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'character varying',
    length: '100',
    unique: true
  })
  @Index('IDX_unique_userName', { unique: true })
  public userName: string;

  @Column({
    type: 'character varying',
    length: '255'
  })
  public password: string;

  @OneToMany(_ => Heroes, hero => hero.user)
  public heroes: Heroes[];
}
