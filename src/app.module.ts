import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TYPE_ORM_CONFIG } from './config/type-orm.config';
import { PokemonModule } from './pokemon/pokemon.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TypeOrmModule.forRoot(TYPE_ORM_CONFIG), TasksModule, PokemonModule],
})
export class AppModule {}
