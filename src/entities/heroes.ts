
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './users';
@Entity('heroes')
export class Heroes {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(_ => User, user => user.heroes, {eager: true})
  @JoinColumn({ name: 'createdByUserId'})
  public user: User;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public name: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  public isActive: boolean;

  @Column({
    type: 'boolean',
    default: false,
  })
  public isDeleted: boolean;
}
