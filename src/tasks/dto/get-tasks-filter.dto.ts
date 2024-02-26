import { TaskStatus } from '../enums';

export class GetTasksFilterDto {
  status: TaskStatus;
  search: string;
}
