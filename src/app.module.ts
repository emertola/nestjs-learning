import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [TasksModule, PokemonModule],
})
export class AppModule {}
