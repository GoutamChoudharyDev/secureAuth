import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable ValidationPipe globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Removes properties that don't have validation decorators.
      forbidNonWhitelisted: true, // Rejects requests containing unexpected properties.
    })
  )

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
