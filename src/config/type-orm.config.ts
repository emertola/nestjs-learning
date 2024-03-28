import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TYPE_ORM_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRESQL_HOST,
  port: parseInt(process.env.PORT) || 5432,
  username: process.env.POSTGRESQL_USERNAME,
  password: 'postgres',
  database: process.env.POSTGRESQL_DB,
  entities: [__dirname + '/../**/*.entity.ts'],
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
};
