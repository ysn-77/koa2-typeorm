
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('heroes')
export class Heroes {
  @PrimaryGeneratedColumn()
  public id: number;

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
