import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepositoryInterface } from 'src/shared/interfaces/task.interface';
import { GetTasksFilterDto } from 'src/tasks/dto/get-tasks-filter.dto';
import { TaskEntity } from 'src/tasks/task.entity';
import { Repository } from 'typeorm';
import { BaseAbstractRepository } from '../base/base.abstract.repository';
import { CreateTaskDto } from 'src/tasks/dto';
import { UserEntity } from 'src/auth/user.entity';
import { TaskStatus } from 'src/tasks/enums';

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

  async getTasks(filterDto: GetTasksFilterDto): Promise<TaskEntity[]> {
    const { status, search } = filterDto;
    const query = this.taskRepository.createQueryBuilder('task');

    if (status) {
      query.where('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(LOWER(task.title) LIKE :search OR LOWER(task.description) LIKE :search)',
        { search: `%${search.toLowerCase()}%` },
      );
    }

    const tasks = await query.getMany();

    return tasks;
  }

  async createTask(
    createTaskDto: CreateTaskDto,
    user: UserEntity,
  ): Promise<TaskEntity> {
    const { title, description } = createTaskDto;

    const task = new TaskEntity();
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    task.user = user;

    await task.save();
    delete task.user;

    return task;
  }
}
