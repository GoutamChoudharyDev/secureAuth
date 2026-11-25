import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { LoggerMiddleware } from './logger/logger.middleware.js';
import { ConfigModule } from '@nestjs/config';

// Root module
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ], // imports other modules
  controllers: [AppController],
  providers: [AppService],
})
// Register Middleware
export class AppModule implements NestModule {

  //   Here:
  // - NestModule allows us to configure module middleware.
  // - MiddlewareConsumer helps register middleware.
  // - apply() specifies which middleware to use.
  // - forRoutes('*') applies it to all routes.
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
