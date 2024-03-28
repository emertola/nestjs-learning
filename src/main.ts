import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  console.log('env', process.env.POSTGRESQL_HOST);
  await app.listen(3000);
}
bootstrap();
