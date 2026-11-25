import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  // Enable ValidationPipe globally
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Removes properties that don't have validation decorators.
      forbidNonWhitelisted: true, // Rejects requests containing unexpected properties.
    })
  )
  const port = configService.getOrThrow<number>('PORT')
  await app.listen(Number(port));
}
await bootstrap();
