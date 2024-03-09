import { DataSource, Repository } from 'typeorm';
import { TaskEntity } from './task.entity';

export class TaskRepository extends Repository<TaskEntity> {
  constructor(private dataSource: DataSource) {
    super(TaskEntity, dataSource.createEntityManager());
  }
}
