import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TYPE_ORM_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'dpg-cnm6pknsc6pc739ll040-a',
  port: 5432,
  username: 'taskmanagementuser',
  password: 'rCNPAa8lWD3KoFQ10b9m4QFO8mwJnNo0',
  database: 'taskmanagement_unv0',
  entities: [__dirname + '/../**/*.entity.ts'],
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
};

// export const TYPE_ORM_CONFIG: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'taskmanagement',
//   entities: [__dirname + '/../**/*.entity.ts'],
//   autoLoadEntities: true,
//   synchronize: true,
//   logging: true,
// };
