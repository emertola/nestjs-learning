import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDto } from './dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './enums';
import { Task } from './task.model';

@Injectable()
export class TasksService {
  private _tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this._tasks;
  }

  getFilteredTasks(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task: Task) => task.status === status);
    }

    if (search) {
      tasks = tasks.filter((task: Task) => {
        return (
          task.title.search(search) >= 0 || task.description.search(search) >= 0
        );
      });
    }

    return tasks;
  }

  getTaskById(id: string): Task {
    const task = this._tasks.find((task: Task) => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} does not exist.`);
    }

    return task;
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
    const task = this.getTaskById(id);
    task.status = status;

    return task;
  }
}
