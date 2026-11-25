import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CreateUserDto } from './users/dto/create-user.dto.js';

// Handles incoming requests
@Controller()
export class AppController {
  // Receives its dependency.
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('app-name')
  getAppName(): string {
    return this.appService.getAppName();
  }

  @Get('users/:id')
  getUser(@Param('id', ParseIntPipe) id: string) {
    return {
      id,
      type: typeof id,
    }
  }

  @Post('register')
  register(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
