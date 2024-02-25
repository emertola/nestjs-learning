import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { TaskStatus } from './enums';
import { v4 as uuidv4 } from 'uuid';

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
      id: uuidv4(),
    };

    this._tasks.push(task);
    return task;
  }
}
