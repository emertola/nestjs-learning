import { TaskEntity } from 'src/tasks/task.entity';
import { BaseAbstractRepository } from '../base/base.abstract.repository';
import { TaskRepositoryInterface } from 'src/shared/interfaces/task.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class TaskRepository
  extends BaseAbstractRepository<TaskEntity>
  implements TaskRepositoryInterface
{
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {
    super(taskRepository);
  }
}
