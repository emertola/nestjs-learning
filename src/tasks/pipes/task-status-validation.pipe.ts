import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../enums';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.DONE,
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
  ];

  transform(value: any) {
    if (!this.isValidStatus(value.toUpperCase())) {
      throw new BadRequestException(`${value} is not a valid status.`);
    }
    return value;
  }

  private isValidStatus(status: any): boolean {
    return this.allowedStatuses.indexOf(status) >= 0;
  }
}
