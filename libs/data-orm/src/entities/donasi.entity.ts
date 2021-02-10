import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({
  name: 'Donasi',
  schema: 'public',
})
export class Donasi extends BaseEntity {
  @PrimaryGeneratedColumn()
  sid: number;

  @Column()
  id: string;

  @Column()
  createdAt: Date;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 20 })
  phone: string;

  @Column('int')
  amount: number;

  @Column()
  syncedAt: Date;

  @Column()
  sync: boolean;
}
