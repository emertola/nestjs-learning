import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TYPE_ORM_CONFIG } from './config/type-orm.config';
import { PokemonModule } from './pokemon/pokemon.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(TYPE_ORM_CONFIG),
    TasksModule,
    PokemonModule,
    AuthModule,
  ],
})
export class AppModule {}
