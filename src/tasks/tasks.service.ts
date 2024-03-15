import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from 'src/repositories/task/task.repository';
import { DeleteResult } from 'typeorm';
import { CreateTaskDto } from './dto';
import { TaskStatus } from './enums';
import { TaskEntity } from './task.entity';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}
  // private _tasks: Task[] = [];
  // getAllTasks(): Task[] {
  //   return this._tasks;
  // }
  // getFilteredTasks(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task: Task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task: Task) => {
  //       return (
  //         task.title.search(search) >= 0 || task.description.search(search) >= 0
  //       );
  //     });
  //   }
  //   return tasks;
  // }

  async createTask(createTaskTdo: CreateTaskDto): Promise<TaskEntity> {
    return this.taskRepository.save({
      ...createTaskTdo,
      status: TaskStatus.OPEN,
    });
  }

  async getTaskById(id: number): Promise<TaskEntity> {
    const foundTask = await this.taskRepository.findOne({ where: { id } });

    if (!foundTask) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    return foundTask;
  }

  async deleteTask(id: number): Promise<DeleteResult> {
    return this.taskRepository.delete(id);
  }

  async updateStatus(id: number, status: TaskStatus): Promise<TaskEntity> {
    const task = await this.getTaskById(id);
    task.status = status;
    await task.save();
    return task;
  }
}
