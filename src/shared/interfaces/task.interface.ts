import { BaseInterfaceRepository } from 'src/repositories/base/base.interface.repository';
import { TaskEntity } from 'src/tasks/task.entity';

export interface TaskRepositoryInterface
  extends BaseInterfaceRepository<TaskEntity> {}
