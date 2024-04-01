import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from 'src/repositories/task/task.repository';
import { DeleteResult } from 'typeorm';
import { CreateTaskDto } from './dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './enums';
import { TaskEntity } from './task.entity';
import { UserEntity } from 'src/auth/user.entity';

@Injectable()
export class TasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async getTasks(filterDto: GetTasksFilterDto): Promise<TaskEntity[]> {
    return this.taskRepository.getTasks(filterDto);
  }

  async createTask(
    createTaskTdo: CreateTaskDto,
    user: UserEntity,
  ): Promise<TaskEntity> {
    return this.taskRepository.createTask(createTaskTdo, user);
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
