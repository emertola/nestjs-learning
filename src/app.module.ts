import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { PokemonModule } from './pokemon/pokemon.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    TasksModule,
    PokemonModule,
    AuthModule,
  ],
})
export class AppModule {}
