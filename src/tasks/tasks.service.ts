import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { TaskStatus } from './enums';
import * as uuid from 'uuid';

@Injectable()
export class TasksService {
  private _tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this._tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      title,
      description,
      status: TaskStatus.OPEN,
      id: uuid(),
    };

    this._tasks.push(task);
    return task;
  }
}
