import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './enums';

@Entity()
export class TaskEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
