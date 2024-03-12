import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskEntity } from './task.entity';
import { TaskRepository } from 'src/repositories/task/task.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TasksController],
  providers: [TasksService, TaskRepository],
})
export class TasksModule {}
