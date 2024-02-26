import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto';
import { TaskStatus } from './enums';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private _tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this._tasks;
  }

  getTaskById(id: string): Task {
    return this._tasks.find((task: Task) => task.id === id);
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const task: Task = {
      ...createTaskDto,
      status: TaskStatus.OPEN,
      id: uuidv4(),
    };

    this._tasks.push(task);
    return task;
  }

  deleteTask(id: string): void {
    this._tasks = this._tasks.filter((task: Task) => task.id !== id);
  }

  updateStatus(id: string, status: TaskStatus): Task | null {
    const task = this._tasks.find((task: Task) => task.id === id);
    if (task) {
      task.status = status;
      return task;
    }
    return null;
  }
}
