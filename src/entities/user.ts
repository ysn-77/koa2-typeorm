import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public userName: string;

  @Column({
    type: 'character varying',
    length: '255'
  })
  public password: string;
}
